#!/bin/bash

SERVICES=("auth-service" "catalog-service" "order-service" "finance-config-service")

echo "Preparando cada microservicio..."

for SERVICE in "${SERVICES[@]}"
do
    if [ -d "$SERVICE" ]; then
        echo "----------------------------------------------------"
        echo "Instalando dependencias en: $SERVICE"
        echo "----------------------------------------------------"
        (
            sudo docker-compose run --rm "$SERVICE" npm install
            
            echo "----------------------------------------------------"
            echo "Ejecutando migraciones en: $SERVICE"
            echo "----------------------------------------------------"
            
            if [[ "$SERVICE" == "order-service" || "$SERVICE" == "finance-config-service" ]]; then
                sudo docker-compose run -e ACTIVE_DB=postgres --rm "$SERVICE" npx prisma migrate deploy --schema=./prisma/postgres/schema.prisma
                sudo docker-compose run -e ACTIVE_DB=mongo --rm "$SERVICE" npx prisma db push --schema=./prisma/mongo/schema.prisma
            else
                sudo docker-compose run -e ACTIVE_DB=postgres --rm "$SERVICE" npx prisma migrate deploy
            fi
        )
    else
        echo "ERROR: La carpeta $SERVICE no existe. Saltando al siguiente..."
    fi
done

echo "¡Proceso finalizado con éxito!"