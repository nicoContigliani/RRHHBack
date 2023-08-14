
#########################################################################################################################
#######################By Nicolas Contigliani####################################################################
######################################################################################################################### 


#Company

#Get-> Company
GET -> http://localshot:3000/Company/Company
------------------------------

GetId -> Company
GETid->http://localhost:3000/Company/Company/1
------------------------------

#Create Post -> Company
Post -> http://localhost:3000/Company/Company

body 
{
   "company": 'Compañía 1',
   "companyPhone": '123-456-7890',
   "companyEmail": 'info@compania1.com',
   "urlCompany": 'https://www.compania1.com',
   "status_company": true, // Estado de la compañía
}

Headers:    todo:toma
----------------------------------------
#Update Post -> Company

Post-> http://localhost:3000/Company/Company/1
body 
{  
   "id":1,
   "company": 'Compañía 1',
   "companyPhone": '123-456-7890',
   "companyEmail": 'info@compania1.com',
   "urlCompany": 'https://www.compania1.com',
   "status_company": true, // Estado de la compañía
   "createdAt":"11/07/2023",
}
Headers:    todo:toma
--------------------------------------------------

#Delete Delete (update status) -> Company

delete->http://localhost:3000/Company/Company/1 
Headers:    todo:toma

---------------------------------------------------


#########################################################################################################################
##############################-nico.contigliani@gmail.com-############################################################### 
#########################################################################################################################
