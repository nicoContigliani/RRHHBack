"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors = require("cors");
const morgan_1 = __importDefault(require("morgan"));
const BrachUserRouter_1 = __importDefault(require("./routes/BrachUserRouter"));
const BranchRouter_1 = __importDefault(require("./routes/BranchRouter"));
const CompanyRouter_1 = __importDefault(require("./routes/CompanyRouter"));
const CompanyVacancesRouter_1 = __importDefault(require("./routes/CompanyVacancesRouter"));
const CVRouter_1 = __importDefault(require("./routes/CVRouter"));
const CVSectionRouter_1 = __importDefault(require("./routes/CVSectionRouter"));
const CVUserRouter_1 = __importDefault(require("./routes/CVUserRouter"));
const InterviewRouter_1 = __importDefault(require("./routes/InterviewRouter"));
const InterviewResponsibleRouter_1 = __importDefault(require("./routes/InterviewResponsibleRouter"));
const InterviewUserRouter_1 = __importDefault(require("./routes/InterviewUserRouter"));
const InterviewVacanceRouter_1 = __importDefault(require("./routes/InterviewVacanceRouter"));
const ItemRouter_1 = __importDefault(require("./routes/ItemRouter"));
const itemSectionRouter_1 = __importDefault(require("./routes/itemSectionRouter"));
const PermissionRouter_1 = __importDefault(require("./routes/PermissionRouter"));
const PermissionRollRouter_1 = __importDefault(require("./routes/PermissionRollRouter"));
const ResultRouter_1 = __importDefault(require("./routes/ResultRouter"));
const ResultTestRouter_1 = __importDefault(require("./routes/ResultTestRouter"));
const RoleRouter_1 = __importDefault(require("./routes/RoleRouter"));
const RollUserRouter_1 = __importDefault(require("./routes/RollUserRouter"));
const SectionRouter_1 = __importDefault(require("./routes/SectionRouter"));
const SectionTypeRouter_1 = __importDefault(require("./routes/SectionTypeRouter"));
const TestInterviewRouter_1 = __importDefault(require("./routes/TestInterviewRouter"));
const TestRouter_1 = __importDefault(require("./routes/TestRouter"));
const TypeInterviewRouter_1 = __importDefault(require("./routes/TypeInterviewRouter"));
const TypeTestRouter_1 = __importDefault(require("./routes/TypeTestRouter"));
const TypeVacancyRouter_1 = __importDefault(require("./routes/TypeVacancyRouter"));
const UserRouter_1 = __importDefault(require("./routes/UserRouter"));
const VacancyRouter_1 = __importDefault(require("./routes/VacancyRouter"));
const ShiftRouter_1 = __importDefault(require("./routes/ShiftRouter"));
const auth_1 = __importDefault(require("./routes/auth"));
const RoadMap_1 = __importDefault(require("./routes/RoadMap"));
const app = (0, express_1.default)();
app.use(body_parser_1.default.json());
app.use(cors()); /* NEW */
// Configuración de morgan
app.use((0, morgan_1.default)('dev')); // Usar 'dev' para un formato de registro predefinido
app.use('/BrachUser', BrachUserRouter_1.default);
app.use('/Branch', BranchRouter_1.default);
app.use('/Company', CompanyRouter_1.default);
app.use('/CompanyVacances', CompanyVacancesRouter_1.default);
app.use('/CV', CVRouter_1.default);
app.use('/CVSection', CVSectionRouter_1.default);
app.use('/CVUser', CVUserRouter_1.default);
app.use('/Interview', InterviewRouter_1.default);
app.use('/InterviewResponsible', InterviewResponsibleRouter_1.default);
app.use('/InterviewUser', InterviewUserRouter_1.default);
app.use('/InterviewVacance', InterviewVacanceRouter_1.default);
app.use('/Item', ItemRouter_1.default);
app.use('/itemSection', itemSectionRouter_1.default);
app.use('/Permission', PermissionRouter_1.default);
app.use('/PermissionRoll', PermissionRollRouter_1.default);
app.use('/Result', ResultRouter_1.default);
app.use('/ResultTest', ResultTestRouter_1.default);
app.use('/Role', RoleRouter_1.default);
app.use('/RollUser', RollUserRouter_1.default);
app.use('/Section', SectionRouter_1.default);
app.use('/SectionType', SectionTypeRouter_1.default);
app.use('/TestInterview', TestInterviewRouter_1.default);
app.use('/Test', TestRouter_1.default);
app.use('/TypeInterview', TypeInterviewRouter_1.default);
app.use('/TypeTest', TypeTestRouter_1.default);
app.use('/TypeVacancy', TypeVacancyRouter_1.default);
app.use('/User', UserRouter_1.default);
app.use('/Vacancy', VacancyRouter_1.default);
app.use('/Shift', ShiftRouter_1.default);
app.use('/RoadMap', RoadMap_1.default);
app.use('/Auth', auth_1.default);
exports.default = app;
