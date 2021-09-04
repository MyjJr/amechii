#!/bin/bash

export ENV_FILE_PATH=".env"
# echo ${ENV_FILE_PATH}

# sh run_frontend.sh

# docker-compose config

sh scripts/remove_dockerimage.sh
docker-compose up --force-recreate --build