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
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = exports.signIn = void 0;
const authDao_1 = require("./authDao");
const alert_services_1 = require("../../services/alert.services");
const bcrypt_services_1 = require("../../services/bcrypt.services");
const UserPasswordReturnToCompare_services_1 = require("../../services/UserPasswordReturnToCompare.services");
const clean_password_services_1 = require("../../services/clean.password.services");
const jwt_services_1 = require("../../services/jwt.services");
// import { getIdDao } from '../User/userDao';
const signIn = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("toma por miron");
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
        let dataReturn = yield (0, authDao_1.getDaoFilter)(email);
        if (!dataReturn)
            return res.status(200).json({ data: [], message: (0, alert_services_1.AlertServices)("Success", "There aren't Clients"), status: 200 });
        const passwordU = yield (0, UserPasswordReturnToCompare_services_1.UserPasswordReturnToCompare)(dataReturn);
        const passworValidator = yield (0, bcrypt_services_1.bcryptComparePassword)(password, passwordU);
        if (!passworValidator)
            return res.status(500).json({ data: [], message: (0, alert_services_1.AlertServices)("Error", "Error Password "), status: 500 });
        const dataCleanPasswordUser = yield (0, clean_password_services_1.cleanPassword)(dataReturn);
        const JTWToken = yield (0, jwt_services_1.jwtGenerateToken)(dataCleanPasswordUser);
        if (!JTWToken)
            return res.status(500).json({ data: [], message: (0, alert_services_1.AlertServices)("Error", "Error JTWToken "), status: 500 });
        if (JTWToken)
            return res.status(200).json({ data: [{ token: JTWToken, login: true, User: dataCleanPasswordUser }], message: (0, alert_services_1.AlertServices)("Success", "Client True"), status: 200 });
    }
    catch (error) {
        console.log("🚀 ~ file: authController.ts:11 ~ login ~ error:", error);
    }
});
exports.login = login;
