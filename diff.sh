#!/usr/bin/env bash

set +e

node_modules/.bin/cdk diff

EXIT_CODE=$?

echo "Exit Code: $EXIT_CODE"
