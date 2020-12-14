#!/bin/sh
set -e

echo $1

if [[ "$1" = "develop" ]]; then
  echo "npm run build build-dev"
  npm run build-dev
elif [[ "$1" = "staging" ]]; then
  echo "npm run build-staging"
  npm run build-staging
elif [[ "$1" = "production" ]]; then
  echo "npm run build"
  npm run build
else
  echo "$1 must be develop, staging or production"
  exit 1
fi
