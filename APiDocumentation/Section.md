
#########################################################################################################################
#######################By Nicolas Contigliani####################################################################
######################################################################################################################### 


#Section

#Get-> Section
GET -> http://localshot:3000/Section/Section
------------------------------

GetId -> Section
GETid->http://localhost:3000/Section/Section/1
------------------------------

#Create Post -> Section
Post -> http://localhost:3000/Section/Section

body 
{
  "SectionTypeId": 1, // ID del tipo de sección
  "title": "Experiencia Laboral",
  "content": "Detalles sobre mis trabajos anteriores...",
  "status_section": true // Estado de la sección
}

Headers:    todo:toma
----------------------------------------
#Update Post -> Section

Post-> http://localhost:3000/Section/Section/1
body 
{  
   "id":1,
   "SectionTypeId": 1, // ID del tipo de sección
   "title": "Experiencia Laboral",
   "content": "Detalles sobre mis trabajos anteriores...",
   "status_section": true // Estado de la sección
   "createdAt":"11/07/2023"
}
Headers:    todo:toma
--------------------------------------------------

#Delete Delete (update status) -> Section

delete->http://localhost:3000/Section/Section/1 
Headers:    todo:toma

---------------------------------------------------


#########################################################################################################################
##############################-nico.contigliani@gmail.com-############################################################### 
#########################################################################################################################
