"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deletes = exports.update = exports.post = exports.getId = exports.get = void 0;
const CVDao_1 = require("./CVDao");
const CVUserDao_1 = require("../CVUser/CVUserDao");
const SectionDao_1 = require("../Section/SectionDao");
const CVSectionDao_1 = require("../CVSection/CVSectionDao");
const ItemDao_1 = require("../Item/ItemDao");
const itemSectionDao_1 = require("../itemSection/itemSectionDao");
const statusActive_services_1 = require("../../services/statusActive.services");
const alert_services_1 = require("../../services/alert.services");
const CVValidationSchema_1 = __importDefault(require("../../ValidationSchema/CVValidationSchema"));
const today_services_1 = require("../../services/today.services");
const chanegeOfActives_services_1 = require("../../services/chanegeOfActives.services");
const personDataCVExist_1 = require("../../services/cvData/personDataCVExist");
const fullnameTabulator_services_1 = require("../../services/cvData/fullnameTabulator.services");
const cvGetIdOfNewCV_services_1 = require("../../services/cvData/cvGetIdOfNewCV.services");
const cvGetIdCVUSerObjectServices_1 = require("../../services/cvData/cvGetIdCVUSerObjectServices");
const cvGetIdMaxArray_services_1 = require("../../services/cvData/cvGetIdMaxArray.services");
const cvTitleJoin_services_1 = require("../../services/cvData/cvTitleJoin.services");
const indexDataFormaterSendCV_service_1 = require("../../services/cvData/indexDataFormaterSendCV.service");
const errorResponse = { data: [], message: (0, alert_services_1.AlertServices)("Error", "Error create"), status: 500 };
const get = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = "";
        const dataReturn = yield (0, CVDao_1.getDao)(data);
        let returnExist = yield (0, statusActive_services_1.statusActive)(dataReturn);
        if ((returnExist === null || returnExist === void 0 ? void 0 : returnExist.length) === 0)
            return res.status(200).json({ data: [], message: (0, alert_services_1.AlertServices)("Success", "TypeTest dosen't find"), status: 200 });
        return res.status(200).json({ data: returnExist, message: (0, alert_services_1.AlertServices)("Success", "Find"), status: 200 });
    }
    catch (error) {
        console.log("🚀 ~ file: UserController.ts:14 ~ get ~ error:", error);
    }
});
exports.get = get;
const getId = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const dataReturn = yield (0, CVDao_1.getIdDao)(id);
    let returnExist = yield (0, statusActive_services_1.statusActive)(dataReturn);
    if ((returnExist === null || returnExist === void 0 ? void 0 : returnExist.length) === 0)
        return res.status(200).json({ data: [], message: (0, alert_services_1.AlertServices)("Success", "It Dosen't find"), status: 200 });
    return res.status(200).json({ data: returnExist, message: (0, alert_services_1.AlertServices)("Success", "Find"), status: 200 });
});
exports.getId = getId;
const post = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    // --- crear usuario general 
    // --- ingresar a crear cv o ver CV 
    // --- Crear CV  (se ha creado usuario y ahora se crea cv... a su vez se agrega CVUser con ambos id)
    // --- luego segun el perfil(X) se inserta  copias section[{}] y 
    // toma el ultimo id el numero ya uqe luego en cvSection va del primer idSectionCopiado hata el ultimo idSectionCopiado  
    // ---- luego se agrega en cvSection el cVID y se le pega (el ultimo id creado en section el numero ya uqe luego en cvSection va del primer
    // idSectionCopiado hata el ultimo idSectionCopiado )
    // luego llega lo mas complejo  
    // en itemSection -> todo lo que viene de los steps iportante (capturar de Section los 9 o mas id  de la seccion que pueden ser los últimos)
    let { PersonalInformation, PersonTitle, PersonalDescription, Education, Experience, HardSkill, SoffSkill, Lenguage, Disponibility } = req.body;
    const { Score, birthday, CreateAt, email, fullname, id, phone, status_user, updateAt, linkedin, repository, folderprofile, birthsday } = PersonalInformation[0];
    const dataReturnCVTitle = yield (0, cvTitleJoin_services_1.cvTitleJoinServices)(PersonTitle);
    let dataPersonObject = PersonalInformation[0];
    dataPersonObject.titleCV = dataReturnCVTitle;
    //TODO  esto debe estar si o si 
    const fullnameTabulator = yield (0, fullnameTabulator_services_1.fullnameTabulatorServices)(fullname);
    try {
        const data = "";
        const currentTime = yield (0, today_services_1.today)();
        const dataReturn = yield (0, CVDao_1.getDao)(data);
        const cvExist = yield (0, personDataCVExist_1.personDataCVExist)(dataReturn, fullnameTabulator);
        // if (cvExist) return res.status(500).json({ data: [], message: AlertServices("Error", "Internal Server Error"), status: 500 });
        const newObjectForCV = {
            title: fullnameTabulator,
            description_cv: fullname,
            status_cv: true,
            createdAt: currentTime,
            updatedAt: currentTime,
        };
        //TODO  crea CV
        const dataReturnCreateCV = yield (0, CVDao_1.postDao)(newObjectForCV);
        //  if(dataReturnCreateCV) return res.status(500).json({ data: [], message: AlertServices("Error", "Internal Server Error"), status: 500 });
        const getIdCV = yield (0, cvGetIdOfNewCV_services_1.cvGetIdOfNewCV)(dataReturnCreateCV);
        const newObjectForCVUser = {
            UserId: id,
            CVId: getIdCV,
            status_cv_user: true,
            createdAt: currentTime,
            updatedAt: currentTime,
        };
        //TODO Crea CVUSer
        const dataReturnCreateCVUSer = yield (0, CVUserDao_1.postDao)(newObjectForCVUser);
        //TODO  ------getUserId--------
        const getUserId = yield (0, cvGetIdCVUSerObjectServices_1.cvGetIdCVUSerObject)(dataReturnCreateCVUSer);
        const dataStructureSection = [
            {
                SectionTypeId: 1,
                title: "data Person",
                content: "",
                status_section: true,
                createdAt: currentTime,
                updatedAt: currentTime
            },
            {
                SectionTypeId: 2,
                title: "description Person",
                content: "",
                status_section: true,
                createdAt: currentTime,
                updatedAt: currentTime
            },
            {
                SectionTypeId: 3,
                "title": "experience work",
                content: "",
                status_section: true,
                createdAt: currentTime,
                updatedAt: currentTime
            },
            {
                SectionTypeId: 4,
                "title": "experience freelancer",
                content: "",
                status_section: true,
                createdAt: currentTime,
                updatedAt: currentTime
            },
            {
                SectionTypeId: 5,
                "title": "soft skill",
                content: "",
                status_section: true,
                createdAt: currentTime,
                updatedAt: currentTime
            },
            {
                SectionTypeId: 6,
                "title": "hard skill",
                content: "",
                status_section: true,
                createdAt: currentTime,
                updatedAt: currentTime
            },
            {
                SectionTypeId: 7,
                "title": "education",
                content: "",
                status_section: true,
                createdAt: currentTime,
                updatedAt: currentTime
            },
            {
                SectionTypeId: 8,
                "title": "lenguaje",
                content: "",
                status_section: true,
                createdAt: currentTime,
                updatedAt: currentTime
            },
            {
                SectionTypeId: 9,
                "title": "disponibility",
                content: "",
                status_section: true,
                createdAt: currentTime,
                updatedAt: currentTime
            }
        ];
        try {
            const dataReturnS = [];
            for (const obj of dataStructureSection) {
                obj.createdAt = currentTime;
                obj.updatedAt = currentTime;
                //TODO crea Section
                const dataReturn = yield (0, SectionDao_1.postDao)(obj);
                if (!dataReturn)
                    return res.status(500).json(errorResponse);
                dataReturnS.push(dataReturn);
            }
            let returnExist = yield getAllAlways();
            if (!returnExist)
                return res.status(500).json(errorResponse);
        }
        catch (error) {
            console.log("Error in createTypeTest:", error);
            return res.status(500).json({ data: [], message: (0, alert_services_1.AlertServices)("Error", "Internal Server Error"), status: 500 });
        }
        const getSectionAll = yield (0, SectionDao_1.getDao)(data);
        const dataIdmmax = yield (0, cvGetIdMaxArray_services_1.cvGetIdMaxArray)(getSectionAll);
        const dataInitialId = (dataIdmmax - 9);
        for (let i = dataInitialId; i <= dataIdmmax; i++) {
            const todos = {
                CVId: getIdCV,
                SectionId: i,
                position: "1",
                describle_cv_section: currentTime,
                status_cv_section: true,
                createdAt: currentTime,
                updatedAt: currentTime
            };
            //TODO crea CVSection
            (0, CVSectionDao_1.postDao)(todos);
        }
        const dataAfterPostItem = yield (0, ItemDao_1.getDao)(data);
        const todo = yield (0, indexDataFormaterSendCV_service_1.indexDataFormaterSendCV)(dataAfterPostItem, req.body);
        const dataReturnS = [];
        for (const obj of todo) {
            obj.createdAt = currentTime;
            obj.updatedAt = currentTime;
            if (100 <= obj.ItemId && obj.ItemId < 200)
                obj.SectionId = dataInitialId + 1;
            if (200 <= obj.ItemId && obj.ItemId < 300)
                obj.SectionId = dataInitialId + 2;
            if (300 <= obj.ItemId && obj.ItemId < 400)
                obj.SectionId = dataInitialId + 3;
            if (400 <= obj.ItemId && obj.ItemId < 500)
                obj.SectionId = dataInitialId + 4;
            if (500 <= obj.ItemId && obj.ItemId < 600)
                obj.SectionId = dataInitialId + 5;
            if (600 <= obj.ItemId && obj.ItemId < 700)
                obj.SectionId = dataInitialId + 6;
            if (700 <= obj.ItemId && obj.ItemId < 800)
                obj.SectionId = dataInitialId + 7;
            if (800 <= obj.ItemId && obj.ItemId < 900)
                obj.SectionId = dataInitialId + 8;
            if (900 <= obj.ItemId && obj.ItemId < 1000)
                obj.SectionId = dataInitialId + 9;
            //TODO crea Section
            const dataReturn = yield (0, itemSectionDao_1.postDao)(obj);
            // //  if (!dataReturn) return res.status(500).json(errorResponse);
            dataReturnS.push(dataReturn);
        }
        return res.status(200).json({ data: dataReturnS, message: (0, alert_services_1.AlertServices)("Success", "Create CV"), status: 200 });
    }
    catch (error) {
        console.log("🚀 ~ post ~ error:", error);
    }
});
exports.post = post;
const update = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const _a = req.body, { createdAt } = _a, updateCreate = __rest(_a, ["createdAt"]);
        if (!createdAt)
            return res.status(500).json(errorResponse);
        let { error, value } = CVValidationSchema_1.default.validate(updateCreate);
        if (error)
            console.error(error.details);
        if (error)
            return res.status(500).json(errorResponse);
        const dataReturnS = yield (0, CVDao_1.updateDao)(req.body, id);
        if (dataReturnS) {
            const dataReturnGet = yield getAllAlways();
            return res.status(200).json({ data: dataReturnGet, message: (0, alert_services_1.AlertServices)("Success", "Update"), status: 200 });
        }
    }
    catch (error) {
        console.log("🚀 ~ file: TypeTestController.ts:71 ~ update ~ error:", error);
        if (error)
            return res.status(500).json(errorResponse);
    }
});
exports.update = update;
const deletes = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const dataGetId = yield (0, CVDao_1.getIdDao)(id);
        if (!dataGetId)
            if (500)
                return res.status(500).json(errorResponse);
        const todos = yield (0, chanegeOfActives_services_1.changeActive)(dataGetId);
        if (!todos)
            if (500)
                return res.status(500).json(errorResponse);
        const dataReturnS = yield (0, CVDao_1.deletesDao)(todos, id);
        if (dataReturnS) {
            const dataReturnGet = yield getAllAlways();
            return res.status(200).json({ data: dataReturnGet, message: (0, alert_services_1.AlertServices)("Success", " Deletes"), status: 200 });
        }
    }
    catch (error) {
        if (error)
            return res.status(500).json(errorResponse);
    }
});
exports.deletes = deletes;
const getAllAlways = () => __awaiter(void 0, void 0, void 0, function* () {
    const data = "";
    const dataReturn = yield (0, CVDao_1.getDao)(data);
    return yield (0, statusActive_services_1.statusActive)(dataReturn);
});
