@echo off
setlocal enabledelayedexpansion

set SERVICES=auth-service catalog-service order-service finance-config-service

echo Preparando cada microservicio...

for %%s in (%SERVICES%) do (
    if exist %%s (
        echo ----------------------------------------------------
        echo Instalando dependencias en: %%s
        echo ----------------------------------------------------
        pushd %%s
        call npm install
        
        echo ----------------------------------------------------
        echo Ejecutando migraciones en: %%s
        echo ----------------------------------------------------
        
        set "ES_MULTI_DB=0"
        if "%%s"=="order-service" set "ES_MULTI_DB=1"
        if "%%s"=="finance-config-service" set "ES_MULTI_DB=1"

        if "!ES_MULTI_DB!"=="1" (
            call docker-compose run -e ACTIVE_DB=postgres --rm %%s npx prisma migrate deploy --schema=./prisma/postgres/schema.prisma
            call docker-compose run -e ACTIVE_DB=mongo --rm %%s npx prisma db push --schema=./prisma/mongo/schema.prisma
        ) else (
            call docker-compose run -e ACTIVE_DB=postgres --rm %%s npx prisma migrate deploy
        )
        popd
    ) else (
        echo ERROR: La carpeta %%s no existe. Saltando al siguiente...
    )
)

echo Proceso finalizado con exito
pause