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
        call docker exec -it %%s npm install
        
        echo ----------------------------------------------------
        echo Ejecutando migraciones en: %%s
        echo ----------------------------------------------------
        
        set "ES_MULTI_DB=0"
        if "%%s"=="order-service" set "ES_MULTI_DB=1"
        if "%%s"=="finance-config-service" set "ES_MULTI_DB=1"

        if "!ES_MULTI_DB!"=="1" (
            call docker exec -it -e ACTIVE_DB=postgres %%s npx prisma migrate deploy --schema=./prisma/postgres/schema.prisma
            call docker exec -it -e ACTIVE_DB=mongo %%s npx prisma db push --schema=./prisma/mongo/schema.prisma

            call docker exec -it -e ACTIVE_DB=postgres %%s npx prisma generate --schema=./prisma/postgres/schema.prisma
            call docker exec -it -e ACTIVE_DB=mongo %%s npx prisma generate --schema=./prisma/mongo/schema.prisma
        ) else (
            call docker exec -it -e ACTIVE_DB=postgres %%s npx prisma migrate deploy
            call docker exec -it -e ACTIVE_DB=postgres %%s npx prisma generate
        )
        popd
    ) else (
        echo ERROR: La carpeta %%s no existe. Saltando al siguiente...
    )
)

echo Proceso finalizado con exito
pause