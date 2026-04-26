# Catire — Backend Services

Esta es la documentacion del servidor de la app movil del Catire Hot Dog. Contiene todo lo necesario para entender, instalar y ejecutar los microservicios en entornos Linux y Windows, así como instrucciones para Docker.

**Resumen**
- Proyecto: conjunto de microservicios (NestJS) que componen la API del proyecto.
- Estructura principal: cada microservicio está en su propia carpeta (por ejemplo: `auth-service`, `catalog-service`, `order-service`, `finance-config-service`).
- Configuracion: [docker-compose.yml](docker-compose.yml) y desarrollo local con Node.js.

**Requisitos**
- Node.js LTS (recomendado v18 o superior)
- npm (incluido con Node)
- Git
- Docker & Docker Compose
- En Windows: PowerShell o Git Bash.

**Estructura del repositorio**
- [auth-service](auth-service) — Autenticacion y autorizacion de usuarios
- [catalog-service](catalog-service) — Catalogo de los productos, menus y sucursales 
- [order-service](order-service) — Gestion de pedidos de los productos
- [finance-config-service](finance-config-service) — Configuracion/Pagos
- [nginx](nginx) — API Gateway (punto de partida)
- [docker-compose.yml](docker-compose.yml) — Servicios para despliegue local
- [Dockerfile.dev](Dockerfile.dev) — Definicion de Docker en dev (raíz)

**Guia de preparacion**

- Ejecuta los contenedores de

  Linux:
  ```
  sudo docker-compose up -d --build
  ```

  Windows:
  ```
  docker-compose up -d --build
  ```
- Configura las variables de entorno del proyecto base y de los microservicios:

  Linux:
  ```
  cp .env.example .env
  cd auth-service/ && cp .env.example .env && cd ..
  cd catalog-service/ && cp .env.example .env && cd ..
  cd finance-config-service/ && cp .env.example .env && cd ..
  cd order-service/ && cp .env.example .env && cd ..
  ```

  Windows:
  ```
  copy .env.example .env
  cd auth-service && copy .env.example .env && cd ..
  cd catalog-service && copy .env.example .env && cd ..
  cd finance-config-service && copy .env.example .env && cd ..
  cd order-service && copy .env.example .env && cd ..
  ```

- Ejecuta los scripts para preparar los microservicios (dependencias, migraciones, etc):
  
  Linux:
  ```
  chmod +x prepare-microservices.sh
  ./prepare-microservices.sh
  ```

  Windows:
  ```
  prepare-microservices.bat
  ```

- Pruebe ahora ejecutando el contenedor de postgres y verificando las tablas:

  ```
  docker exec -it catire_postgres_db psql -U root -d postgres
  ```

  Si este comando falla, verifique los pasos anteriores.

  Y ahora haga una consulta a una base de datos para ver sus tablas:
  
  ```psql
  \c catire_auth_db
  \d
  ```

**Notas específicas por servicio**
- `auth-service`: maneja login, refresh tokens, creación de usuarios y validación de permisos.
  - Revisa `src/main.ts` y `.env` para puerto y variables (JWT_SECRET, DB_URI).
- `catalog-service`: gestiona productos, categorías y búsquedas.
  - Variables típicas: conexión a base de datos, índices de búsqueda.
- `order-service`: crea y maneja flujo de pedidos (estado, pagos, notificaciones).
  - Puede requerir integración con `finance-config-service`.
- `finance-config-service`: servicios y configuraciones financieras necesarias para pagos y contabilidad.

En caso de ejecutar algun comando para algun microservicio, tome en cuenta el siguiente comando:
  
  Linux:
  ```
  sudo docker-compose run --rm <nombre-servicio> <comando>
  ```

  Windows:
  ```
  docker-compose run --rm <nombre-servicio> <comando>
  ```
---
Fecha de generación: 2026-04-23
