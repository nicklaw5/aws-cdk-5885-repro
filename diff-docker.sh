#!/usr/bin/env bash

set +e

docker run --rm --tty \
    --workdir /app \
    --volume ${HOME}/.aws:/root/.aws/ \
    --volume ${PWD}:/app/ \
    --entrypoint node_modules/.bin/cdk \
    node:current-alpine \
    diff

EXIT_CODE=$?

echo "Exit Code: $EXIT_CODE"
