
#########################################################################################################################
#######################By Nicolas Contigliani####################################################################
######################################################################################################################### 


#TypeVacancy

#Get-> TypeVacancy
GET -> http://localshot:3000/TypeVacancy/TypeVacancy
------------------------------

GetId -> TypeVacancy
GETid->http://localhost:3000/TypeVacancy/TypeVacancy/1
------------------------------

#Create Post -> TypeVacancy
Post -> http://localhost:3000/TypeVacancy/TypeVacancy

body 
{
        "name_vacancy_type": 'Medio Tiempo',
        "description_vacancy_type": 'Vacante de medio tiempo con jornada laboral de 20 horas a la semana.',
        "status_vacancy_type": true,
}

Headers:    todo:toma
----------------------------------------
#Update Post -> TypeVacancy

Post-> http://localhost:3000/TypeVacancy/TypeVacancy/1
body 
{  
   "name_vacancy_type": 'Medio Tiempo',
   "description_vacancy_type": 'Vacante de medio tiempo con jornada laboral de 20 horas a la semana.',
   "status_vacancy_type": true,
   "createdAt":"11/07/2023",
}
Headers:    todo:toma
--------------------------------------------------

#Delete Delete (update status) -> TypeVacancy

delete->http://localhost:3000/TypeVacancy/TypeVacancy/1 
Headers:    todo:toma

---------------------------------------------------


#########################################################################################################################
##############################-nico.contigliani@gmail.com-############################################################### 
#########################################################################################################################
