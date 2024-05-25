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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.get = exports.login = exports.signIn = void 0;
const rootsDao_1 = require("./rootsDao");
const RollUserDao_1 = require("../RollUser/RollUserDao");
const alert_services_1 = require("../../services/alert.services");
const bcrypt_services_1 = require("../../services/bcrypt.services");
const UserPasswordReturnToCompare_services_1 = require("../../services/UserPasswordReturnToCompare.services");
const clean_password_services_1 = require("../../services/clean.password.services");
const jwt_services_1 = require("../../services/jwt.services");
const rootsDto_1 = require("./rootsDto");
const SigInValidationSchema_1 = __importDefault(require("../../ValidationSchema/SigInValidationSchema"));
const today_services_1 = require("../../services/today.services");
const jwt_Col_services_1 = require("../../services/jwt.Col.services");
// import { getIdDao } from '../User/userDao';
const errorResponse = { data: [], message: (0, alert_services_1.AlertServices)("Error", "Error create"), status: 500 };
const signIn = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("toma por miron");
    const { email, password, fullname, phone, birthday, Score, status_user } = req === null || req === void 0 ? void 0 : req.body;
    let dataReturn = yield (0, rootsDao_1.getDaoFilter)(email);
    if (dataReturn)
        return res.status(200).json({ data: [], message: (0, alert_services_1.AlertServices)("Error", "There is Client"), status: 500 });
    let { error, value } = SigInValidationSchema_1.default.validate(req.body);
    console.log("🚀 ~ signIn ~ value:", value);
    try {
        const currentTime = yield (0, today_services_1.today)();
        const bcryptReturn = yield (0, bcrypt_services_1.bcryptCreatePassword)(password);
        value.createdAt = currentTime;
        value.updatedAt = currentTime;
        value.password = bcryptReturn;
        if (error)
            console.error(error.details);
        if (error)
            return res.status(500).json(errorResponse);
        const dataReturnS = yield (0, rootsDao_1.postDao)(value);
        if (dataReturnS) {
            let { dataValues: { id, status_user } } = dataReturnS;
            try {
                const todo = { UserId: id, RoleId: 2, status_role_user: status_user };
                if (id && status_user)
                    yield (0, RollUserDao_1.postDao)(todo);
            }
            catch (error) {
                console.log("🚀 ~ error:", error);
            }
            let cleanPasswordUser = yield (0, clean_password_services_1.cleanPassword)(dataReturnS);
            if (!cleanPasswordUser)
                return res.status(500).json({ data: [], message: (0, alert_services_1.AlertServices)("Error", "Error create"), status: 500 });
            const JTWToken = yield (0, jwt_services_1.jwtGenerateToken)(cleanPasswordUser);
            if (!JTWToken)
                return res.status(500).json({ data: [], message: (0, alert_services_1.AlertServices)("Error", "Error JTWToken "), status: 500 });
            if (JTWToken)
                return res.status(200).json({ data: [{ token: JTWToken, login: true, User: cleanPasswordUser }], message: (0, alert_services_1.AlertServices)("Success", "Client True"), status: 200 });
        }
    }
    catch (error) {
        console.log("Error in createTypeTest:", error);
        return res.status(500).json({ data: [], message: (0, alert_services_1.AlertServices)("Error", "Internal Server Error"), status: 500 });
    }
});
exports.signIn = signIn;
const login = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let reqBody = req === null || req === void 0 ? void 0 : req.body;
        let { email, password } = reqBody;
        if (!(reqBody === null || reqBody === void 0 ? void 0 : reqBody.password))
            return res.status(500).json({ data: [], message: (0, alert_services_1.AlertServices)("Error", "Error Password dosen't Exist"), status: 500 });
        if (!(reqBody === null || reqBody === void 0 ? void 0 : reqBody.email))
            return res.status(500).json({ data: [], message: (0, alert_services_1.AlertServices)("Error", "Error Password dosen't Exist"), status: 500 });
        let dataReturn = yield (0, rootsDao_1.getDaoFilter)(email);
        if (!dataReturn)
            return res.status(200).json({ data: [], message: (0, alert_services_1.AlertServices)("Success", "There aren't Clients"), status: 200 });
        const passwordU = yield (0, UserPasswordReturnToCompare_services_1.UserPasswordReturnToCompare)(dataReturn);
        const passworValidator = yield (0, bcrypt_services_1.bcryptComparePassword)(password, passwordU);
        if (!passworValidator)
            return res.status(500).json({ data: [], message: (0, alert_services_1.AlertServices)("Error", "Error Password "), status: 500 });
        const dataCleanPasswordUser = yield (0, clean_password_services_1.cleanPassword)(dataReturn);
        console.log("🚀 ~ file: authController.ts:39 ~ login ~ dataCleanPasswordUser:", dataCleanPasswordUser);
        let dataCleanUser = (0, rootsDto_1.formaterDataAuth)(dataCleanPasswordUser);
        let JTWToken = yield (0, jwt_services_1.jwtGenerateToken)(dataCleanPasswordUser);
        if (!JTWToken)
            return res.status(500).json({ data: [], message: (0, alert_services_1.AlertServices)("Error", "Error JTWToken "), status: 500 });
        if (JTWToken)
            return res.status(200).json({ data: [{ token: JTWToken, login: true, User: dataCleanUser, UserE: dataCleanPasswordUser }], message: (0, alert_services_1.AlertServices)("Success", "Client True"), status: 200 });
    }
    catch (error) {
        console.log("🚀 ~ file: authController.ts:11 ~ login ~ error:", error);
    }
});
exports.login = login;
const get = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const dataReturnAsync = () => __awaiter(void 0, void 0, void 0, function* () {
            let dataReturn = yield (0, rootsDao_1.getAllColumns)();
            delete dataReturn.fields;
            delete dataReturn.Result;
            let todo = yield (0, rootsDto_1.rootFormateDtoo)(dataReturn[0]);
            let dataR = yield (0, jwt_Col_services_1.jwtGenerateTokenCol)(todo);
            const licentia = {
                start_licencie: "hoy",
                finish_licencie: "mañana",
                volumen_key: "123-123-123",
                mac_asociate: "cafe-cafe-cafe-cafe"
            };
            const JTWToken = yield (0, jwt_services_1.jwtGenerateToken)({});
            if (dataReturn)
                return res.status(200).json({ data: [{ token: JTWToken, login: true, col_structure: todo }], message: (0, alert_services_1.AlertServices)("Success", "Client True"), status: 200 });
            if (!dataReturn)
                return res.status(500).json({ data: [], message: (0, alert_services_1.AlertServices)("Error", "Error JTWToken "), status: 500 });
        });
        dataReturnAsync();
    }
    catch (error) {
    }
});
exports.get = get;
