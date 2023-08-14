
#########################################################################################################################
#######################By Nicolas Contigliani####################################################################
######################################################################################################################### 


#CVUser

#Get-> CVUser
GET -> http://localshot:3000/CVUser/CVUser
------------------------------

GetId -> CVUser
GETid->http://localhost:3000/CVUser/CVUser/1
------------------------------

#Create Post -> CVUser
Post -> http://localhost:3000/CVUser/CVUser

body 
{
   "UserId": 2, // ID del usuario
   "CVId": 2,  // ID del CV
   "status_cv_user": true, // Estado de la relación entre usuario y CV
}

Headers:    todo:toma
----------------------------------------
#Update Post -> CVUser

Post-> http://localhost:3000/CVUser/CVUser/1
body 
{  
   "id":1,
   "UserId": 2, // ID del usuario
   "CVId": 2,  // ID del CV
   "status_cv_user": true, // Estado de la relación entre usuario y CV
   "createdAt":"11/07/2023"
}
Headers:    todo:toma
--------------------------------------------------

#Delete Delete (update status) -> CVUser

delete->http://localhost:3000/CVUser/CVUser/1 
Headers:    todo:toma

---------------------------------------------------


#########################################################################################################################
##############################-nico.contigliani@gmail.com-############################################################### 
#########################################################################################################################
