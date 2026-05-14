#!/bin/bash

# Definición de servicios
SERVICES=("auth-service" "catalog-service" "order-service" "finance-config-service")

echo "Preparando cada microservicio (Local y Docker)..."

for s in "${SERVICES[@]}"; do
    if [ -d "$s" ]; then
        echo -e "\n===================================================="
        echo "PROCESANDO: $s"
        echo "===================================================="
        
        pushd "$s" > /dev/null
        
        echo "[1] Instalando dependencias locales..."
        sudo npm install
        
        echo "[2] Instalando dependencias en Docker..."
        sudo docker exec -i "$s" npm install
        
        if [[ "$s" == "order-service" || "$s" == "finance-config-service" ]]; then
            
            echo "[3] Preparar base de datos en Postgres..."
            ACTIVE_DB=postgres npx prisma generate --schema=./prisma/postgres/schema.prisma
            sudo docker exec -i -e ACTIVE_DB=postgres "$s" npx prisma migrate deploy --schema=./prisma/postgres/schema.prisma
            sudo docker exec -i -e ACTIVE_DB=postgres "$s" npx prisma generate --schema=./prisma/postgres/schema.prisma

            echo "[4] Preparar base de datos en MongoDB..."
            ACTIVE_DB=mongo npx prisma generate --schema=./prisma/mongo/schema.prisma
            sudo docker exec -i -e ACTIVE_DB=mongo "$s" npx prisma db push --schema=./prisma/mongo/schema.prisma
            sudo docker exec -i -e ACTIVE_DB=mongo "$s" npx prisma generate --schema=./prisma/mongo/schema.prisma

        else
            echo "[3] Preparar base de datos en Postgres..."
            ACTIVE_DB=postgres npx prisma generate
            sudo docker exec -i -e ACTIVE_DB=postgres "$s" npx prisma migrate deploy
            sudo docker exec -i -e ACTIVE_DB=postgres "$s" npx prisma generate
        fi
        
        popd > /dev/null
    else
        echo -e "\nERROR: La carpeta $s no existe."
    fi
done

echo -e "\nProceso finalizado."