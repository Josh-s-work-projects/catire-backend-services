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
            cd "$SERVICE" || exit
            npm install
            
            echo "----------------------------------------------------"
            echo "Ejecutando migraciones en: $SERVICE"
            echo "----------------------------------------------------"
            
            if [[ "$SERVICE" == "order-service" || "$SERVICE" == "finance-config-service" ]]; then
                npx prisma migrate deploy --schema=./prisma/postgres/schema.prisma
                npx prisma db push --schema=./prisma/mongo/schema.prisma
            else
                npx prisma migrate deploy
            fi
        )
    else
        echo "ERROR: La carpeta $SERVICE no existe. Saltando al siguiente..."
    fi
done

echo "¡Proceso finalizado con éxito!"