@echo off
setlocal enabledelayedexpansion

set SERVICES=auth-service catalog-service order-service finance-config-service

echo Preparando cada microservicio (Local y Docker)...

for %%s in (%SERVICES%) do (
    if exist %%s (
        echo.
        echo ====================================================
        echo PROCESANDO: %%s
        echo ====================================================
        
        pushd %%s
        
        echo [1] Instalando dependencias locales...
        call npm install
        echo [2] Instalando dependencias en Docker...
        docker exec -i %%s npm install
        
        set "ES_MULTI=0"
        if "%%s"=="order-service" set "ES_MULTI=1"
        if "%%s"=="finance-config-service" set "ES_MULTI=1"

        if "!ES_MULTI!"=="1" (
            set "ACTIVE_DB=postgres"
            echo [3] Preparar base de datos en Postgres...
            call npx prisma generate --schema=./prisma/postgres/schema.prisma
            docker exec -i -e ACTIVE_DB=postgres %%s npx prisma migrate deploy --schema=./prisma/postgres/schema.prisma
            docker exec -i -e ACTIVE_DB=postgres %%s npx prisma generate --schema=./prisma/postgres/schema.prisma

            set "ACTIVE_DB=mongo"
            echo [4] Preparar base de datos en MongoDB...
            call npx prisma generate --schema=./prisma/mongo/schema.prisma
            docker exec -i -e ACTIVE_DB=mongo %%s npx prisma db push --schema=./prisma/mongo/schema.prisma
            docker exec -i -e ACTIVE_DB=mongo %%s npx prisma generate --schema=./prisma/mongo/schema.prisma
        ) else (
            set "ACTIVE_DB=postgres"
            echo [3] Preparar base de datos en Postgres...
            call npx prisma generate
            docker exec -i -e ACTIVE_DB=postgres %%s npx prisma migrate deploy
            docker exec -i -e ACTIVE_DB=postgres %%s npx prisma generate
        )
        popd
    ) else (
        echo ERROR: La carpeta %%s no existe.
    )
)

echo.
echo Proceso finalizado.
pause