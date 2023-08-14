
#########################################################################################################################
#######################By Nicolas Contigliani####################################################################
######################################################################################################################### 


#Interview

#Get-> Interview
GET -> http://localshot:3000/Interview/Interview
------------------------------

GetId -> Interview
GETid->http://localhost:3000/Interview/Interview/1
------------------------------

#Create Post -> Interview
Post -> http://localhost:3000/Interview/Interview

body 
{
        "interviewDateTime": new Date(),
        "interviewType": 'Entrevista inicial',
        "interviewers": 'Nombre de los entrevistadores',
        "interviewMethod": 'Presencial',
        "duration": 60, // Duración en minutos
        "rating": 4.5, // Puntuación de la entrevista
        "comments": 'Comentarios sobre la entrevista',
        "inerview_result": 'Aprobado', // Resultado de la entrevista
        "requiredActions": 'Ninguna',
        "nextActionDateTime": new Date(),
        "interview_status": true, // Estado de la entrevista
        "TypeInterviewId":1 /* ID del tipo de entrevista */
}

Headers:    todo:toma
----------------------------------------
#Update Post -> Interview

Post-> http://localhost:3000/Interview/Interview/1
body 
{  
  
        "interviewDateTime": new Date(),
        "interviewType": 'Entrevista inicial',
        "interviewers": 'Nombre de los entrevistadores',
        "interviewMethod": 'Presencial',
        "duration": 60, // Duración en minutos
        "rating": 4.5, // Puntuación de la entrevista
        "comments": 'Comentarios sobre la entrevista',
        "inerview_result": 'Aprobado', // Resultado de la entrevista
        "requiredActions": 'Ninguna',
        "nextActionDateTime": new Date(),
        "interview_status": true, // Estado de la entrevista
        "TypeInterviewId":1 /* ID del tipo de entrevista */
        "createdAt":"11/07/2023",
}
Headers:    todo:toma
--------------------------------------------------

#Delete Delete (update status) -> Interview

delete->http://localhost:3000/Interview/Interview/1 
Headers:    todo:toma

---------------------------------------------------


#########################################################################################################################
##############################-nico.contigliani@gmail.com-############################################################### 
#########################################################################################################################
