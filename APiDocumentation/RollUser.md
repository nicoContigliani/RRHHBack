
#########################################################################################################################
#######################By Nicolas Contigliani####################################################################
######################################################################################################################### 


#RollUser

#Get-> RollUser
GET -> http://localshot:3000/RollUser/RollUser
------------------------------

GetId -> RollUser
GETid->http://localhost:3000/RollUser/RollUser/1
------------------------------

#Create Post -> RollUser
Post -> http://localhost:3000/RollUser/RollUser

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
#Update Post -> RollUser

Post-> http://localhost:3000/RollUser/RollUser/1
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

#Delete Delete (update status) -> RollUser

delete->http://localhost:3000/RollUser/RollUser/1 
Headers:    todo:toma

---------------------------------------------------


#########################################################################################################################
##############################-nico.contigliani@gmail.com-############################################################### 
#########################################################################################################################
