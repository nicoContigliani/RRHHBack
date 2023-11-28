sequelize model:create --name User --attributes email:string,password:string,fullname:string,phone:string,birthday:string,Score:bigint,status_user:boolean
sequelize model:create --name Role --attributes name_role:string,status_role:boolean,description_role:string;
sequelize model:create --name Permission --attributes name_permission:string,conditions:string,code:string,creates:boolean,reads:boolean,updates:boolean,deletes:boolean,admins:boolean,exports:boolean,imports:boolean,approve:boolean,generate_reports:boolean,configure:boolean,restrict:boolean,manage_users:boolean,manage_roles:boolean,audit:boolean,status_permission:boolean
sequelize model:create --name RollUser --attributes UserId:bigint,RoleId:bigint,status_role_user:boolean
sequelize model:create --name PermissionRoll --attributes RoleId:bigint,PermissionId:bigint,status_permission_roll:boolean
sequelize model:create --name Branch --attributes name_branch:string,conditions:string,idCompany:bigint,branch_long:string,branch_lat:string,branch_score:integer,guest:integer,status_branch:boolean
sequelize model:create --name BrachUser --attributes UserId:bigint,BranchId:bigint,status_branch_user:boolean
sequelize model:create --name Company --attributes company:string,companyPhone:string,companyEmail:string,urlCompany:string,status_company:boolean
sequelize model:create --name SectionType --attributes name_section_type:string,description_section_type:string,status_section_type:boolean
sequelize model:create --name Section --attributes SectionTypeId:bigint,title:string,content:string,status_section:boolean
sequelize model:create --name CV --attributes title:string,description_cv:string,status_cv:boolean
sequelize model:create --name CVSection --attributes CVId:bigint,SectionId:bigint,position:bigint,describle_cv_section:string,status_cv_section:boolean
sequelize model:create --name CVUser --attributes UserId:bigint,CVId:bigint,status_cv_user:boolean
sequelize model:create --name Item --attributes itemTitle:string,itemContent:string,status_item:boolean
sequelize model:create --name itemSection --attributes ItemId:bigint,SectionId:bigint,position:bigint,title_atribute:string,atribute:string,detail_atribute:string,status_item_section:boolean,startDate:date,endDate:date
sequelize model:create --name TypeTest --attributes name_type_test:string,description_type_test:string,status_type_test:boolean
sequelize model:create --name Test --attributes typeTestId:bigint,name_test:string,description_test:string,status_test:boolean
sequelize model:create --name Result --attributes  result:string,description_result_test:string,status_result:boolean
sequelize model:create --name ResultTest --attributes TestId:bigint,ResultId:bigint,status_result_test:boolean
sequelize model:create --name TestInterview --attributes CandidateId:bigint,TestId:bigint,interviewDateTime:date,results:string,comments:string,InterviewId:bigint,status_test_interview:boolean
sequelize model:create --name TypeInterview --attributes name_type_test:string,description_type_test:string,status_Type_interview:boolean
sequelize model:create --name Interview --attributes interviewDateTime:date,interviewTypeId:bigint,interviewers:string,interviewMethod:string,duration:bigint,rating:float,comments:string,inerview_result:string,requiredActions:string,nextActionDateTime:date,status_interview:boolean,TypeInterviewId:bigint
sequelize model:create --name TypeVacancy --attributes name_vacancy_type:string,description_vacancy_type:string,status_vacancy_type:boolean

sequelize model:create --name Vacancy --attributes title:string,description:text,requirements:string,responsibilities:string,status_vacancy:boolean,TypeVacancyId:bigint
sequelize model:create --name SoftSkill --attributes name_SoftSkill:string,description:text,status_SoftSkill:boolean,initial_value_SoftSkill:integer
sequelize model:create --name HardSkill --attributes name_HardSkill:string,proficiency:string,experienceYears:integer,status_HardSkill:boolean,initial_value_HardSkill:integer
sequelize model:create --name Location --attributes name_Location:string,country:string,timezone:string,status_Location:boolean,initial_value_Location:integer
sequelize model:create --name Salary --attributes amount:integer,currency:string,status_Salary:boolean,initial_value_Salary:integer
sequelize model:create --name Benefit --attributes name_Benefit:string,description:text,validity:string,status_Benefit:boolean,initial_value_Benefit:integer
sequelize model:create --name URL --attributes link:string,description:text,status_URL:boolean,initial_value_URL:integer
sequelize model:create --name Lenguaje --attributes name:string,description:text,status_Lenguaje:boolean,initial_value_Lenguaje:integer





sequelize model:create --name InterviewVacance --attributes InterviewId:bigint,VacancyId:bigint,interviewDateTime:date,results:string,comments:string,status_interview_vacancy_type:boolean
sequelize model:create --name InterviewResponsible --attributes InterviewId:bigint,RoadMapId:bigint,UserId:bigint,responsibilityDescription:string,status_interview_responsible:boolean
sequelize model:create --name InterviewUser --attributes InterviewId:bigint,RoadMapId:bigint,UserId:bigint,userDescription:string,status_interview_user:boolean
sequelize model:create --name CompanyVacances --attributes VacancyId:bigint,CompanyId:bigint,UserId:bigint,status_company_vacances:boolean
sequelize model:create --name TypeShift --attributes name_type_shift:string,description_type_shift:string,status_type_shift:boolean,hours:integer
sequelize model:create --name Shift --attributes name:string,start_time:time,end_time:time,status_shift:boolean,TypeshiptId:bigint
sequelize model:create --name BranchShift --attributes BranchId:bigint,ShiftId:bigint,status_branch_shift:boolean, present_day:boolean,delay_day:boolean

sequelize model:create --name Priority --attributes name_Priority:string,priorityDescription:text,jwtPriority:string,status_Priority:boolean





sequelize model:create --name RoadMap --attributes InterviewId:bigint,VacancyId:bigint,responsibilityDescription:string,status_roadmap:boolean,order:bigint,required:boolean,description:text,duration:bigint,location:string,scheduledDateTime:date,completionDateTime:date,outcome:string,nextSteps:text,nextActionDateTime:date,image:string

sequelize model:create --name InterviewRoadMap --attributes InterviewId:bigint,RoadMapId:bigint,status_InterviewRoadMap:boolean,comments:text,statusProgres:string

sequelize model:create --name RoadMapVacance --attributes VacancyId:bigint,RoadMapId:bigint,status_RoadMapVacance:boolean,comments:text,statusProgres:string