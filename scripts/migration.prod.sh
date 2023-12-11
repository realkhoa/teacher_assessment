#!/bin/sh

export ENVIRONMENT=prod;

ts-node ./src/db/initDB.ts
ts-node ./src/db/migrate.ts