
#########################################################################################################################
#######################By Nicolas Contigliani####################################################################
######################################################################################################################### 


#InterviewResponsible

#Get-> InterviewResponsible
GET -> http://localshot:3000/InterviewResponsible/InterviewResponsible
------------------------------

GetId -> InterviewResponsible
GETid->http://localhost:3000/InterviewResponsible/InterviewResponsible/1
------------------------------

#Create Post -> InterviewResponsible
Post -> http://localhost:3000/InterviewResponsible/InterviewResponsible

body 
{
   "InterViewId":1 /* ID de la entrevista */,
   "UserId":1 /* ID del usuario */,
   "responsibilityDescription": "Descripción de la responsabilidad",
   "status_interview_responsible": true // Estado de la responsabilidad en la entrevista
}

Headers:    todo:toma
----------------------------------------
#Update Post -> InterviewResponsible

Post-> http://localhost:3000/InterviewResponsible/InterviewResponsible/1
body 
{  
   "id":1,
   "InterViewId":1 /* ID de la entrevista */,
   "UserId":1 /* ID del usuario */,
   "responsibilityDescription": "Descripción de la responsabilidad",
   "status_interview_responsible": true, // Estado de la responsabilidad en la entrevista
   "createdAt":"11/07/2023",
}
Headers:    todo:toma
--------------------------------------------------

#Delete Delete (update status) -> InterviewResponsible

delete->http://localhost:3000/InterviewResponsible/InterviewResponsible/1 
Headers:    todo:toma

---------------------------------------------------


#########################################################################################################################
##############################-nico.contigliani@gmail.com-############################################################### 
#########################################################################################################################
