
#########################################################################################################################
#######################By Nicolas Contigliani####################################################################
######################################################################################################################### 


#InterviewUser

#Get-> InterviewUser
GET -> http://localshot:3000/InterviewUser/InterviewUser
------------------------------

GetId -> InterviewUser
GETid->http://localhost:3000/InterviewUser/InterviewUser/1
------------------------------

#Create Post -> InterviewUser
Post -> http://localhost:3000/InterviewUser/InterviewUser

body 
{
   "InterViewId":1 /* ID de la entrevista */,
   "UserId":1 /* ID del usuario */,
   "userDescription": "Descripción del usuario en la entrevista",
   "status_interview_user": true // Estado de la relación entre usuario y entrevista
}

Headers:    todo:toma
----------------------------------------
#Update Post -> InterviewUser

Post-> http://localhost:3000/InterviewUser/InterviewUser/1
body 
{  
   "id":1,
   "InterViewId":1 /* ID de la entrevista */,
   "UserId":1 /* ID del usuario */,
   "userDescription": "Descripción del usuario en la entrevista",
   "status_interview_user": true, // Estado de la relación entre usuario y entrevista
   "createdAt":"11/07/2023",
}
Headers:    todo:toma
--------------------------------------------------

#Delete Delete (update status) -> InterviewUser

delete->http://localhost:3000/InterviewUser/InterviewUser/1 
Headers:    todo:toma

---------------------------------------------------


#########################################################################################################################
##############################-nico.contigliani@gmail.com-############################################################### 
#########################################################################################################################
