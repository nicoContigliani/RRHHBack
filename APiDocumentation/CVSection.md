
#########################################################################################################################
#######################By Nicolas Contigliani####################################################################
######################################################################################################################### 


#CVSection

#Get-> CVSection
GET -> http://localshot:3000/CVSection/CVSection
------------------------------

GetId -> CVSection
GETid->http://localhost:3000/CVSection/CVSection/1
------------------------------

#Create Post -> CVSection
Post -> http://localhost:3000/CVSection/CVSection

body 
{ 
   "CVId": 1, // ID del CV
   "SectionId": 1, // ID de la sección
   "position": 1, // Posición en la sección
   "describle_cv_section": "Descripción de la sección del CV",
   "status_cv_section: true // Estado de la sección del CV
}

Headers:    todo:toma
----------------------------------------
#Update Post -> CVSection

Post-> http://localhost:3000/CVSection/CVSection/1
body 
{  
   "id":1,
   "CVId": 1, // ID del CV
   "SectionId": 1, // ID de la sección
   "position": 1, // Posición en la sección
   "describle_cv_section": "Descripción de la sección del CV",
   "status_cv_section: true, // Estado de la sección del CV
   "createdAt":"11/07/2023"
}
Headers:    todo:toma
--------------------------------------------------

#Delete Delete (update status) -> CVSection

delete->http://localhost:3000/CVSection/CVSection/1 
Headers:    todo:toma

---------------------------------------------------


#########################################################################################################################
##############################-nico.contigliani@gmail.com-############################################################### 
#########################################################################################################################
