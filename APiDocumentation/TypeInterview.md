
#########################################################################################################################
#######################By Nicolas Contigliani####################################################################
######################################################################################################################### 


#TypeInterview

#Get-> TypeInterview
GET -> http://localshot:3000/TypeInterview/TypeInterview
------------------------------

GetId -> TypeInterview
GETid->http://localhost:3000/TypeInterview/TypeInterview/1
------------------------------

#Create Post -> TypeInterview
Post -> http://localhost:3000/TypeInterview/TypeInterview

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
#Update Post -> TypeInterview

Post-> http://localhost:3000/TypeInterview/TypeInterview/1
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

#Delete Delete (update status) -> TypeInterview

delete->http://localhost:3000/TypeInterview/TypeInterview/1 
Headers:    todo:toma

---------------------------------------------------


#########################################################################################################################
##############################-nico.contigliani@gmail.com-############################################################### 
#########################################################################################################################
