#!/bin/bash

# Cargar las variables de entorno desde el archivo .env
source .env

# Crear la carpeta de destino si no existe
mkdir -p "$DESTINATION_FOLDER"

# Función para generar el archivo de validación
generate_validation_file() {
  MODEL_NAME="$1"
  JOI_VALIDATIONS="$2"

  VALIDATION_CODE="import Joi from 'joi';

const ${MODEL_NAME}ValidationSchema = Joi.object({
$JOI_VALIDATIONS
});

export default ${MODEL_NAME}ValidationSchema;
"

  echo "$VALIDATION_CODE" > "$DESTINATION_FOLDER/${MODEL_NAME}ValidationSchema.ts"
  echo "Archivo de validación generado para $MODEL_NAME"
}

# Leer el archivo bashSequelizeModel.sh línea por línea
while IFS= read -r line; do
  if [[ $line =~ "sequelize model:create --name" ]]; then
    MODEL_NAME=$(echo "$line" | sed -nE 's/.* --name ([a-zA-Z_0-9]+) --attributes.*/\1/p')
    ATTRIBUTES=$(echo "$line" | sed -nE 's/.* --attributes (.*)$/\1/p')

    JOI_VALIDATIONS=""

    # Procesar cada atributo para generar las validaciones Joi correspondientes
    IFS=',' read -ra ATTR_PARTS <<< "$ATTRIBUTES"
    for attr_part in "${ATTR_PARTS[@]}"; do
      ATTRIBUTE=$(echo "$attr_part" | awk -F':' '{print $1}')
      JOI_TYPE=$(echo "$attr_part" | awk -F':' '{print $2}')

      # Mapear tipos de datos a tipos de Joi
      case $JOI_TYPE in
         string) JOI_VALIDATION="${ATTRIBUTE}: Joi.string().required()," ;;
         boolean) JOI_VALIDATION="${ATTRIBUTE}: Joi.boolean().required()," ;;
         integer) JOI_VALIDATION="${ATTRIBUTE}: Joi.number().integer().required()," ;;
         bigint) JOI_VALIDATION="${ATTRIBUTE}: Joi.number().integer().required()," ;;
         float) JOI_VALIDATION="${ATTRIBUTE}: Joi.number().required()," ;;
         double) JOI_VALIDATION="${ATTRIBUTE}: Joi.number().required()," ;;
         enum) JOI_VALIDATION="${ATTRIBUTE}: Joi.number().required()," ;;
         date) JOI_VALIDATION="${ATTRIBUTE}: Joi.date().required()," ;;
        *) echo "Tipo de dato no reconocido: $JOI_TYPE" ;;
      esac

      JOI_VALIDATIONS="${JOI_VALIDATIONS}${JOI_VALIDATION}"
    done

    generate_validation_file "$MODEL_NAME" "$JOI_VALIDATIONS"
  fi
done < "$SEQUELIZE_MODEL_FILE"
