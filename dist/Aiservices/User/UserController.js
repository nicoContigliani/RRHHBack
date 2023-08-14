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
exports.deletes = exports.update = exports.post = exports.getId = exports.get = void 0;
const UserDao_1 = require("./UserDao");
const alert_services_1 = require("../../services/alert.services");
const UserDto_1 = require("./UserDto");
const bcrypt_services_1 = require("../../services/bcrypt.services");
const clean_password_services_1 = require("../../services/clean.password.services");
const chanegeOfActives_services_1 = require("../../services/chanegeOfActives.services");
const statusActive_services_1 = require("../../services/statusActive.services");
// const todos = await jwtGenerateToken(password)
const get = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = "";
        const dataReturn = yield (0, UserDao_1.getDao)(data);
        let returnExist = yield (0, statusActive_services_1.statusActive)(dataReturn);
        const ifExist = yield (0, UserDto_1.cleanPasswordArray)(returnExist);
        if ((ifExist === null || ifExist === void 0 ? void 0 : ifExist.length) === 0)
            return res.status(200).json({ data: [], message: (0, alert_services_1.AlertServices)("Success", "Client dosen't find"), status: 200 });
        return res.status(200).json({ data: ifExist, message: (0, alert_services_1.AlertServices)("Success", "Client find"), status: 200 });
    }
    catch (error) {
        console.log("🚀 ~ file: UserController.ts:14 ~ get ~ error:", error);
    }
});
exports.get = get;
const getId = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const dataReturn = yield (0, UserDao_1.getIdDao)(id);
        let returnExist = yield (0, statusActive_services_1.statusActive)(dataReturn);
        const ifExist = yield (0, UserDto_1.cleanPasswordArray)(returnExist);
        if ((ifExist === null || ifExist === void 0 ? void 0 : ifExist.length) === 0)
            return res.status(200).json({ data: [], message: (0, alert_services_1.AlertServices)("Success", "Client dosen't find"), status: 200 });
        return res.status(200).json({ data: ifExist, status: 200 });
    }
    catch (error) {
        console.log("🚀 ~ file: UserController.ts:37 ~ getId ~ error:", error);
    }
});
exports.getId = getId;
const post = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const todo = req.headers.todo;
        const data = "";
        let reqBody = req === null || req === void 0 ? void 0 : req.body;
        let { email, password } = reqBody;
        console.log("🚀 ~ file: UserController.ts:46 ~ post ~ reqBody:", reqBody);
        const dataReturn = yield (0, UserDao_1.getDao)(data);
        if (!((dataReturn === null || dataReturn === void 0 ? void 0 : dataReturn.length) === 0))
            console.log((dataReturn === null || dataReturn === void 0 ? void 0 : dataReturn.length) === 0);
        const bcryptReturn = yield (0, bcrypt_services_1.bcryptCreatePassword)(password);
        reqBody.password = bcryptReturn;
        const dataReturnS = yield (0, UserDao_1.postDao)(reqBody);
        let cleanPasswordUser = yield (0, clean_password_services_1.cleanPassword)(dataReturnS);
        if (!cleanPasswordUser)
            return res.status(500).json({ data: [], message: (0, alert_services_1.AlertServices)("Error", "Error create"), status: 500 });
        return res.status(200).json({ data: cleanPasswordUser, message: (0, alert_services_1.AlertServices)("Success", "Client Created"), status: 200 });
    }
    catch (error) {
    }
});
exports.post = post;
const update = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const todo = req.headers.todo;
        const data = "";
        let reqBody = req === null || req === void 0 ? void 0 : req.body;
        let { email, password } = reqBody;
        const bcryptReturn = yield (0, bcrypt_services_1.bcryptCreatePassword)(password);
        reqBody.password = bcryptReturn;
        const dataReturnS = yield (0, UserDao_1.updateDao)(reqBody, id);
        if (dataReturnS) {
            const dataReturnGet = yield getAllAlways();
            return res.status(200).json({ data: dataReturnGet, message: (0, alert_services_1.AlertServices)("Success", "Client Update"), status: 200 });
        }
    }
    catch (error) {
        console.log("🚀 ~ file: UserController.ts:84 ~ update ~ error:", error);
    }
});
exports.update = update;
const deletes = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const dataGetId = yield (0, UserDao_1.getIdDao)(id);
        const todos = yield (0, chanegeOfActives_services_1.changeActive)(dataGetId);
        console.log("🚀 ~ file: UserController.ts:111 ~ deletes ~ todos:", todos);
        const dataReturnS = yield (0, UserDao_1.deletesDao)(todos, id);
        if (dataReturnS) {
            const dataReturnGet = yield getAllAlways();
            return res.status(200).json({ data: dataReturnGet, message: (0, alert_services_1.AlertServices)("Success", "Client Update"), status: 200 });
        }
    }
    catch (error) {
        console.log("🚀 ~ file: UserController.ts:84 ~ update ~ error:", error);
    }
});
exports.deletes = deletes;
const getAllAlways = () => __awaiter(void 0, void 0, void 0, function* () {
    const data = "";
    const dataReturn = yield (0, UserDao_1.getDao)(data);
    let returnExist = yield (0, statusActive_services_1.statusActive)(dataReturn);
    return yield (0, UserDto_1.cleanPasswordArray)(returnExist);
});
