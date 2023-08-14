
#########################################################################################################################
#######################By Nicolas Contigliani####################################################################
######################################################################################################################### 


#SectionType

#Get-> SectionType
GET -> http://localshot:3000/SectionType/SectionType
------------------------------

GetId -> SectionType
GETid->http://localhost:3000/SectionType/SectionType/1
------------------------------

#Create Post -> SectionType
Post -> http://localhost:3000/SectionType/SectionType

body 
{
    "name_section_type": "Tipo de Sección 2",
    "description_section_type": "Descripción del Tipo de Sección 2",
    "status_section_type": true,
}

Headers:    todo:toma
----------------------------------------
#Update Post -> SectionType

Post-> http://localhost:3000/SectionType/SectionType/1
body 
{  
   "id":1,
   "name_section_type": "Tipo de Sección 2",
   "description_section_type": "Descripción del Tipo de Sección 2",
   "status_section_type": true,
   "createdAt":"11/07/2023"
}
Headers:    todo:toma
--------------------------------------------------

#Delete Delete (update status) -> SectionType

delete->http://localhost:3000/SectionType/SectionType/1 
Headers:    todo:toma

---------------------------------------------------


#########################################################################################################################
##############################-nico.contigliani@gmail.com-############################################################### 
#########################################################################################################################
