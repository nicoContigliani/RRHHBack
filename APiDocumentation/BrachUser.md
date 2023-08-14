
#########################################################################################################################
#######################By Nicolas Contigliani####################################################################
######################################################################################################################### 


#BrachUser

#Get-> BrachUser
GET -> http://localshot:3000/BrachUser/BrachUser
------------------------------

GetId -> BrachUser
GETid->http://localhost:3000/BrachUser/BrachUser/1
------------------------------

#Create Post -> BrachUser
Post -> http://localhost:3000/BrachUser/BrachUser

body 
{
   "UserId": 1,
   "BranchId":1,
   "status_branch_user": true,
}

Headers:    todo:toma
----------------------------------------
#Update Post -> BrachUser

Post-> http://localhost:3000/BrachUser/BrachUser/1
body 
{  
   "id":1,
   "UserId": 1,
   "BranchId":1,
   "status_branch_user": true,
   "createdAt":"11/07/2023",
}
Headers:    todo:toma
--------------------------------------------------

#Delete Delete (update status) -> BrachUser

delete->http://localhost:3000/BrachUser/BrachUser/1 
Headers:    todo:toma

---------------------------------------------------


#########################################################################################################################
##############################-nico.contigliani@gmail.com-############################################################### 
#########################################################################################################################
