
#########################################################################################################################
#######################By Nicolas Contigliani####################################################################
######################################################################################################################### 


#Vacancy

#Get-> Vacancy
GET -> http://localshot:3000/Vacancy/Vacancy
------------------------------

GetId -> Vacancy
GETid->http://localhost:3000/Vacancy/Vacancy/1
------------------------------

#Create Post -> Vacancy
Post -> http://localhost:3000/Vacancy/Vacancy

body 
{
   "title": 'Vacante de Desarrollador Web',
   "description": 'Descripción de la vacante de desarrollador web',
   "requirements": 'Requisitos para el puesto de desarrollador web',
   "responsibilities": 'Responsabilidades del puesto de desarrollador web',
   "status_vacancy": true,
   "TypeVacancyId":1
}

Headers:    todo:toma
----------------------------------------
#Update Post -> Vacancy

Post-> http://localhost:3000/Vacancy/Vacancy/1
body 
{  
   "title": 'Vacante de Desarrollador Web',
   "description": 'Descripción de la vacante de desarrollador web',
   "requirements": 'Requisitos para el puesto de desarrollador web',
   "responsibilities": 'Responsabilidades del puesto de desarrollador web',
   "status_vacancy": true,
   "TypeVacancyId":1
   "createdAt":"11/07/2023",
}
Headers:    todo:toma
--------------------------------------------------

#Delete Delete (update status) -> Vacancy

delete->http://localhost:3000/Vacancy/Vacancy/1 
Headers:    todo:toma

---------------------------------------------------


#########################################################################################################################
##############################-nico.contigliani@gmail.com-############################################################### 
#########################################################################################################################
