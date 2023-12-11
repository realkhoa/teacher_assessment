#!/bin/sh

export ENVIRONMENT=dev;

ts-node ./src/db/initDB.ts
ts-node ./src/db/migrate.ts