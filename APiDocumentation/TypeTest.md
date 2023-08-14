
#########################################################################################################################
#######################By Nicolas Contigliani####################################################################
######################################################################################################################### 


#TypeTest

#Get-> TypeTest
GET -> http://localshot:3000/TypeTest/TypeTest
------------------------------

GetId -> TypeTest
GETid->http://localhost:3000/TypeTest/TypeTest/1
------------------------------

#Create Post -> TypeTest
Post -> http://localhost:3000/TypeTest/TypeTest

body 
{
   "name_type_test":"Habilidades de Comunicacion",
   "description_type_test":"Evaluarán cómo te comunicas verbalmente y por escrito. Pueden hacer preguntas sobre cómo te comunicas con compañeros de equipo, superiores y clientes",
   "status_type_test": true,
}

Headers:    todo:toma
----------------------------------------
#Update Post -> TypeTest

Post-> http://localhost:3000/TypeTest/TypeTest/1
body 
{    
    "name_type_test":"Habilidades de Comunicacion",
    "description_type_test":"Evaluarán cómo te comunicas verbalmente y por escrito. Pueden hacer preguntas sobre cómo te comunicas con compañeros de equipo, superiores y clientes",
    "status_type_test": true,
    "createdAt":"2023-08-11"
}
Headers:    todo:toma
--------------------------------------------------

#Delete Delete (update status) -> TypeTest

delete->http://localhost:3000/TypeTest/TypeTest/1 
Headers:    todo:toma

---------------------------------------------------


#########################################################################################################################
##############################-nico.contigliani@gmail.com-############################################################### 
#########################################################################################################################
