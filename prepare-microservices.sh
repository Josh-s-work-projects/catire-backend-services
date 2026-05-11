#!/usr/bin/env bash
set -euo pipefail

SERVICES=(auth-service catalog-service order-service finance-config-service)
MULTI_DB_SERVICES=(order-service finance-config-service)
TIMEOUT=${TIMEOUT:-120}

echo "Installing local dependencies..."
for SERVICE in "${SERVICES[@]}"; do
    if [ -d "$SERVICE" ]; then
        echo "----------------------------------------------------"
        echo "Installing dependencies in: $SERVICE"
        echo "----------------------------------------------------"
        (cd "$SERVICE" && npm install)
    else
        echo "Warning: folder $SERVICE not found; skipping local npm install"
    fi
done

echo "Building and starting containers..."
docker compose up -d --build

wait_for_container() {
    local service="$1"
    local timeout_seconds=${2:-$TIMEOUT}
    local elapsed=0
    printf "Waiting for %s container... " "$service"
    while :; do
        cid=$(docker compose ps -q "$service" 2>/dev/null || true)
        if [ -n "$cid" ]; then
            running=$(docker inspect -f '{{.State.Running}}' "$cid" 2>/dev/null || echo "false")
            if [ "$running" = "true" ]; then
                printf "up (cid=%s)\n" "$cid"
                return 0
            fi
        fi
        sleep 2
        elapsed=$((elapsed + 2))
        if [ "$elapsed" -ge "$timeout_seconds" ]; then
            printf "\nTimeout waiting for %s container\n" "$service"
            return 1
        fi
    done
}

for SERVICE in "${SERVICES[@]}"; do
    if [ -d "$SERVICE" ]; then
        if ! wait_for_container "$SERVICE"; then
            echo "Skipping $SERVICE due to timeout"
            continue
        fi

        if printf '%s\n' "${MULTI_DB_SERVICES[@]}" | grep -qx "$SERVICE"; then
            echo "Running multi-db migrations for $SERVICE"
            docker compose exec -T "$SERVICE" sh -c "npx prisma migrate deploy --schema=./prisma/postgres/schema.prisma || true && npx prisma db push --schema=./prisma/mongo/schema.prisma || true && npx prisma generate --schema=./prisma/postgres/schema.prisma || true && npx prisma generate --schema=./prisma/mongo/schema.prisma || true"
        else
            echo "Running single-db migrations for $SERVICE"
            docker compose exec -T "$SERVICE" sh -c "npx prisma migrate deploy --schema=./prisma/schema.prisma || true && npx prisma generate --schema=./prisma/schema.prisma || true"
        fi
    else
        echo "Warning: folder $SERVICE not found; skipping prepare"
    fi
done

echo "All services prepared."