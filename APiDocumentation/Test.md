
#########################################################################################################################
#######################By Nicolas Contigliani####################################################################
######################################################################################################################### 


#Test

#Get-> Test
GET -> http://localshot:3000/Test/Test
------------------------------

GetId -> Test
GETid->http://localhost:3000/Test/Test/1
------------------------------

#Create Post -> Test
Post -> http://localhost:3000/Test/Test

body 
{
  "typeTestId":1,
  "name_test":"colores",
  "description_test":"test de personalidad",
  "status_test":true
}

Headers:    todo:toma
----------------------------------------
#Update Post -> Test

Post-> http://localhost:3000/Test/Test/1
body 
{  
   "id":1,
   "typeTestId":1,
   "name_test":"colores",
   "description_test":"test de personalidad",
   "status_test":true
   "createdAt":"11/07/2023",
   }
Headers:    todo:toma
--------------------------------------------------

#Delete Delete (update status) -> Test

delete->http://localhost:3000/Test/Test/1 
Headers:    todo:toma

---------------------------------------------------


#########################################################################################################################
##############################-nico.contigliani@gmail.com-############################################################### 
#########################################################################################################################
