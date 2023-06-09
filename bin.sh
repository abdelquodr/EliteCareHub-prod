#!/usr/bash
docker build -t elite-care-hub-image .
docker run -v $(pwd)/src:/app/src:ro --env-file ./.env -d -p 3000:3000 --name elite-care-hub elite-care-hub-image


#!/bin/bash
# docker build -f Dockerfile.prod -t elite-care-hub-prod-image .
# docker run --env-file ./.env -d -p 8080:80 --name elite-care-hub-prod elite-care-hub-prod-image
