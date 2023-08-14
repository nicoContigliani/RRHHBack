
#########################################################################################################################
#######################By Nicolas Contigliani####################################################################
######################################################################################################################### 


#InterviewVacance

#Get-> InterviewVacance
GET -> http://localshot:3000/InterviewVacance/InterviewVacance
------------------------------

GetId -> InterviewVacance
GETid->http://localhost:3000/InterviewVacance/InterviewVacance/1
------------------------------

#Create Post -> InterviewVacance
Post -> http://localhost:3000/InterviewVacance/InterviewVacance

body 
{
        "InterviewId":1 /* ID de la entrevista */,
        "VacancyId":1 /* ID de la vacante */,
        "interviewDateTime": new Date(),
        "results": 'Resultados de la entrevista',
        "comments": 'Comentarios sobre la entrevista',
        "status_interview_vacancy_type": true
}

Headers:    todo:toma
----------------------------------------
#Update Post -> InterviewVacance

Post-> http://localhost:3000/InterviewVacance/InterviewVacance/1
body 
{  
   "id":1,
   "InterviewId":1 /* ID de la entrevista */,
   "VacancyId":1 /* ID de la vacante */,
   "interviewDateTime": new Date(),
   "results": 'Resultados de la entrevista',
   "comments": 'Comentarios sobre la entrevista',
   "status_interview_vacancy_type": true
   "createdAt":"11/07/2023"
}
Headers:    todo:toma
--------------------------------------------------

#Delete Delete (update status) -> InterviewVacance

delete->http://localhost:3000/InterviewVacance/InterviewVacance/1 
Headers:    todo:toma

---------------------------------------------------


#########################################################################################################################
##############################-nico.contigliani@gmail.com-############################################################### 
#########################################################################################################################
