#!/bin/bash

# Variables
PGUSER="root"
PGPASSWORD="postgres"
PGDATABASE="integratio"

# Ingresar a la base de datos
psql -U $PGUSER -W -h localhost -d $PGDATABASE
# psql -U root -h localhost -d integratio -c "PASSWORD 'postgres';"
psql -U root -h localhost -d integratio -W "postgres";

# Si se quiere ejecutar un comando dentro de la base de datos
# psql -U $PGUSER -W -h localhost -d $PGDATABASE -c "SELECT * FROM mi_tabla;"

# Salir de la base de datos
exit