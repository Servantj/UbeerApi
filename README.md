API logiciel cablage

Positionnez-vous dans le répertoire du projet et saisir `git init`
Cela crée un nouveau sous-répertoire nommé .git qui contient tous les fichiers nécessaires au dépôt — un squelette de dépôt Git.

`git clone https://thales-avs-dtp@dev.azure.com/thales-avs-dtp/Unicorn/_git/unicorn-api` Cette commande vous permets de cloner le dépots actuel du projet.

Faite une modification peut important pour tester le git commit et git push.

## Quick start

You can use the one you prefer between `npm` or `yarn`.
Each command is translatable to `yarn`.

`npm run dev` executes the project in development mode.
`npm test` runs the tests.

> Why not `npm run test`?
>
> Because npm has some predefined commands like `test` and `start`. Thus,
> running `npm test` is equivalent to `npm run test`.

## Database management

This API connects to a MySQL DB for accessing data.
- At application start, it will automatically run knex migrate (datamodel updates) and knex seed (master data) to align the connected DB with the last datamodel version.
- Running test:api will perform the same actions through the hook defined in package.json


To start a clean DB locally:
- Install the last version of Docker
- Start the Docker daemon
- Start the DB: `docker-compose up`

If it fails on windows, please try to restart Docker.


It will start:
- a MySQL DB at `localhost:3306`
- a MySQL web admin tool at `http://localhost:8082`

### Create a new migration (schema changes)

Install knex CLI `npm install knex -g`
Initiate a new migration `knex migrate:make migration_name`: This will create a new file in /migrations to be filled with migration steps.
Rollback the migration `knex migrate:rollback`: this will delete the last migration.
Latest migration `knex migrate:latest`: this will update the latest migration.