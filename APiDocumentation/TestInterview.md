
#########################################################################################################################
#######################By Nicolas Contigliani####################################################################
######################################################################################################################### 


#TestInterview

#Get-> TestInterview
GET -> http://localshot:3000/TestInterview/TestInterview
------------------------------

GetId -> TestInterview
GETid->http://localhost:3000/TestInterview/TestInterview/1
------------------------------

#Create Post -> TestInterview
Post -> http://localhost:3000/TestInterview/TestInterview

body 
{
  "CandidateId": 1, // Reemplaza con el ID correspondiente del candidato
  "TestId": 1, // Reemplaza con el ID correspondiente de la prueba
  "interviewDateTime": new Date(),
  "results": 'Resultados de la prueba 1',
  "comments": 'Comentarios sobre la prueba 1',
  "InterviewId": 1, // Reemplaza con el ID correspondiente de la entrevista
  "status_test_inteview": true,
}

Headers:    todo:toma
----------------------------------------
#Update Post -> TestInterview

Post-> http://localhost:3000/TestInterview/TestInterview/1
body 
{  
  "CandidateId": 1, // Reemplaza con el ID correspondiente del candidato
  "TestId": 1, // Reemplaza con el ID correspondiente de la prueba
  "interviewDateTime": new Date(),
  "results": 'Resultados de la prueba 1',
  "comments": 'Comentarios sobre la prueba 1',
  "InterviewId": 1, // Reemplaza con el ID correspondiente de la entrevista
  "status_test_inteview": true,
  "createdAt":"11/07/2023",
}
Headers:    todo:toma
--------------------------------------------------

#Delete Delete (update status) -> TestInterview

delete->http://localhost:3000/TestInterview/TestInterview/1 
Headers:    todo:toma

---------------------------------------------------


#########################################################################################################################
##############################-nico.contigliani@gmail.com-############################################################### 
#########################################################################################################################
