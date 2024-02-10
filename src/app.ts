import express from 'express';
import bodyParser from 'body-parser';
import cors = require("cors");
import morgan  from 'morgan';



import BrachUser from './routes/BrachUserRouter'
import Branch from './routes/BranchRouter'
import Company from './routes/CompanyRouter'
import CompanyVacances from './routes/CompanyVacancesRouter'
import CV from './routes/CVRouter'
import CVNext from './routes/CVNextRouter'
import CVSection from './routes/CVSectionRouter'
import CVUser from './routes/CVUserRouter'
import Interview from './routes/InterviewRouter'
import InterviewResponsible from './routes/InterviewResponsibleRouter'
import InterviewUser from './routes/InterviewUserRouter'
import InterviewVacance from './routes/InterviewVacanceRouter'
import Item from './routes/ItemRouter'
import itemSection from './routes/itemSectionRouter'
import Permission from './routes/PermissionRouter'
import PermissionRoll from './routes/PermissionRollRouter'
import Result from './routes/ResultRouter'
import ResultTest from './routes/ResultTestRouter'
import Role from './routes/RoleRouter'
import RollUser from './routes/RollUserRouter'
import Section from './routes/SectionRouter'
import SectionType from './routes/SectionTypeRouter'
import TestInterview from './routes/TestInterviewRouter'
import Test from './routes/TestRouter'
import TypeInterview from './routes/TypeInterviewRouter'
import TypeTest from './routes/TypeTestRouter'
import TypeVacancy from './routes/TypeVacancyRouter'
import User from './routes/UserRouter'
import Vacancy from './routes/VacancyRouter'
import Shift from './routes/ShiftRouter'
import auth from './routes/auth'
import RoadMap from './routes/RoadMap'



const app = express();
app.use(bodyParser.json());
app.use(cors()); /* NEW */
// Configuración de morgan
app.use(morgan('dev')); // Usar 'dev' para un formato de registro predefinido




app.use('/BrachUser',BrachUser)
app.use('/Branch',Branch)
app.use('/Company',Company)
app.use('/CompanyVacances',CompanyVacances)
app.use('/CV',CV)
app.use('/CVNext',CVNext)

app.use('/CVSection',CVSection)
app.use('/CVUser',CVUser)
app.use('/Interview',Interview)
app.use('/InterviewResponsible',InterviewResponsible)
app.use('/InterviewUser',InterviewUser)
app.use('/InterviewVacance',InterviewVacance)
app.use('/Item',Item)
app.use('/itemSection',itemSection)
app.use('/Permission',Permission)
app.use('/PermissionRoll',PermissionRoll)
app.use('/Result',Result)
app.use('/ResultTest',ResultTest)
app.use('/Role',Role)
app.use('/RollUser',RollUser)
app.use('/Section',Section)
app.use('/SectionType',SectionType)
app.use('/TestInterview',TestInterview)
app.use('/Test',Test)
app.use('/TypeInterview',TypeInterview)
app.use('/TypeTest',TypeTest)
app.use('/TypeVacancy',TypeVacancy)
app.use('/User',User)
app.use('/Vacancy',Vacancy)
app.use('/Shift',Shift)

app.use('/RoadMap',RoadMap)




app.use('/Auth', auth)



export default app;