#!/bin/bash
set -e 

echo "Migrating database 'php artisan migrate --force'..."
sudo php artisan migrate --force
