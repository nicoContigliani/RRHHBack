
#########################################################################################################################
#######################By Nicolas Contigliani####################################################################
######################################################################################################################### 


#itemSection

#Get-> itemSection
GET -> http://localshot:3000/itemSection/itemSection
------------------------------

GetId -> itemSection
GETid->http://localhost:3000/itemSection/itemSection/1
------------------------------

#Create Post -> itemSection
Post -> http://localhost:3000/itemSection/itemSection

body 
{
   "ItemId":1 /* ID del ítem */,
   "SectionId":1 /* ID de la sección */,
   "position": 1, // Posición en la sección
   "atribute": "Atributo del ítem en la sección",
   "status_item_section": true

}

Headers:    todo:toma
----------------------------------------
#Update Post -> itemSection

Post-> http://localhost:3000/itemSection/itemSection/1
body 
{  
   "id":1,
   "ItemId":1 /* ID del ítem */,
   "SectionId":1 /* ID de la sección */,
   "position": 1, // Posición en la sección
   "atribute": "Atributo del ítem en la sección",
   "status_item_section": true,
   "createdAt":"11/07/2023"
}
Headers:    todo:toma
--------------------------------------------------

#Delete Delete (update status) -> itemSection

delete->http://localhost:3000/itemSection/itemSection/1 
Headers:    todo:toma

---------------------------------------------------


#########################################################################################################################
##############################-nico.contigliani@gmail.com-############################################################### 
#########################################################################################################################
