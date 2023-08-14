#!/bin/bash
#########################################################################################################################
#######################Creado por Nicolás Contigliani####################################################################
######################################################################################################################### 



cd /home/nico/Atalaya/Proyecto/RRHH/rrhh/src/routes/

# Declarar el array sin espacios alrededor del signo igual (=)
nombres=("BrachUser" "Branch" "Company" "CompanyVacances" "CV" "CVSection" "CVUser" "Interview" "InterviewResponsible" "InterviewUser" "InterviewVacance" "Item" "itemSection" "Permission" "PermissionRoll" "Result" "ResultTest" "Role" "RollUser" "Section" "SectionType" "TestInterview" "Test" "TypeInterview" "TypeTest" "TypeVacancy" "User" "Vacancy")

# nombres=("UserType")



for nombre in "${nombres[@]}"; do
  # Crear el directorio con el nombre del controlador
  # touch "$nombre"
  # cd "$nombre"
  
  # Crear el archivo del controlador con el contenido especificado
  archivoRouter="${nombre}Router.ts"


   contenidoRouter=$(cat <<EOM

import express, { Request, Response } from 'express';
import ${nombre} from `../Apiservices/${nombre}/${nombre}Router`
const router = express.Router();

// Ruta
router.use('/${nombre}',${nombre})

export default router;

EOM
)

  

  echo "$contenidoRouter" > "$archivoRouter"





  
  # Volver al directorio anterior
  # cd ..
done


# ../Aiservices/BrachUser/BrachUserRouter