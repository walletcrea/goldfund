#!/bin/bash
set -e 

echo "Migrating database 'sudo php artisan migrate --force'..."
sudo php artisan migrate --force
