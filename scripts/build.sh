#!/bin/sh
export ENVIRONMENT=prod;

echo Removing old build...;
echo Deleted $(rm -rfv ./dist | wc -l) file;
echo Build started...;
tsc -p tsconfig.json;