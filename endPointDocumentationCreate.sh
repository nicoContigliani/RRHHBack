#!/bin/bash
#########################################################################################################################
#######################Creado por Nicolás Contigliani####################################################################
######################################################################################################################### 



cd /home/nico/Atalaya/Proyecto/RRHH/rrhh/APiDocumentation/

# Declarar el array sin espacios alrededor del signo igual (=)
nombres=( "BrachUser" "Branch" "Company" "CompanyVacances" "CV" "CVSection" "CVUser" "Interview" "InterviewResponsible" "InterviewUser" "InterviewVacance" "Item" "itemSection" "Permission" "PermissionRoll" "Result" "ResultTest" "Role" "RollUser" "Section" "SectionType" "TestInterview" "Test" "TypeInterview" "TypeTest" "TypeVacancy" "User" "Vacancy")

for nombre in "${nombres[@]}"; do
  # Crear el directorio con el nombre del controlador
 
  
  # Crear el archivo del controlador con el contenido especificado
  archiveApi="${nombre}.md"



   dataApi=$(cat <<EOM

#########################################################################################################################
#######################By Nicolas Contigliani####################################################################
######################################################################################################################### 


#${nombre}

#Get-> ${nombre}
GET -> http://localshot:3000/${nombre}/${nombre}
------------------------------

GetId -> ${nombre}
GETid->http://localhost:3000/${nombre}/${nombre}/1
------------------------------

#Create Post -> ${nombre}
Post -> http://localhost:3000/${nombre}/${nombre}

body 
{
   "email":"nico.contigliani@gmail.com",
   "password":"123456789",
   "fullname":"nicolas Contigliani",
   "phone":"+549261444106",
   "birthday":"11/7/2023",
   "Score":1000,
   "status_user":true,
   "createdAt":"11/07/2023",
   "updatedAt":"11/07/2023"
}

Headers:    todo:toma
----------------------------------------
#Update Post -> ${nombre}

Post-> http://localhost:3000/${nombre}/${nombre}/1
body 
{  
   "id":1,
   "email":"nico.contigliani@gmail.com",
   "password":"123456789",
   "fullname":"nicolas Contigliani",
   "phone":"+549261444106",
   "birthday":"11/7/2023",
   "Score":1000,
   "status_user":true,
   "createdAt":"11/07/2023",
   "updatedAt":"11/07/2023"
}
Headers:    todo:toma
--------------------------------------------------

#Delete Delete (update status) -> ${nombre}

delete->http://localhost:3000/${nombre}/${nombre}/1 
Headers:    todo:toma

---------------------------------------------------


#########################################################################################################################
##############################-nico.contigliani@gmail.com-############################################################### 
#########################################################################################################################



EOM
)


  echo "$dataApi" > "$archiveApi"




  
  # Volver al directorio anterior
done