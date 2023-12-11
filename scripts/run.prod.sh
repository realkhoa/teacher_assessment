#!/bin/sh
export ENVIRONMENT=prod;
export TS_NODE_BASEURL=./dist 
node dist/index.js