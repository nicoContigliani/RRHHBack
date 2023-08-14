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
exports.deletes = exports.update = exports.post = exports.getId = exports.get = void 0;
const TypeTestDao_1 = require("./TypeTestDao");
const statusActive_services_1 = require("../../services/statusActive.services");
const alert_services_1 = require("../../services/alert.services");
const TypeTestValidationSchema_1 = __importDefault(require("../../ValidationSchema/TypeTestValidationSchema"));
const today_services_1 = require("../../services/today.services");
const get = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = "";
        const dataReturn = yield (0, TypeTestDao_1.getDao)(data);
        console.log("🚀 ~ file: TypeTestController.ts:12 ~ get ~ dataReturn:", dataReturn);
        let returnExist = yield (0, statusActive_services_1.statusActive)(dataReturn);
        if ((returnExist === null || returnExist === void 0 ? void 0 : returnExist.length) === 0)
            return res.status(200).json({ data: [], message: (0, alert_services_1.AlertServices)("Success", "TypeTest dosen't find"), status: 200 });
        return res.status(200).json({ data: returnExist, message: (0, alert_services_1.AlertServices)("Success", "TypeTest  find"), status: 200 });
    }
    catch (error) {
        console.log("🚀 ~ file: UserController.ts:14 ~ get ~ error:", error);
    }
});
exports.get = get;
const getId = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const dataReturn = yield (0, TypeTestDao_1.getIdDao)(id);
    let returnExist = yield (0, statusActive_services_1.statusActive)(dataReturn);
    if ((returnExist === null || returnExist === void 0 ? void 0 : returnExist.length) === 0)
        return res.status(200).json({ data: [], message: (0, alert_services_1.AlertServices)("Success", "TypeTest dosen't find"), status: 200 });
    return res.status(200).json({ data: returnExist, message: (0, alert_services_1.AlertServices)("Success", "TypeTest  find"), status: 200 });
});
exports.getId = getId;
const post = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    let { error, value } = TypeTestValidationSchema_1.default.validate(req.body);
    try {
        const currentTime = yield (0, today_services_1.today)();
        value.createdAt = currentTime;
        value.updatedAt = currentTime;
        if (error)
            return res.status(500).json({ data: [], message: (0, alert_services_1.AlertServices)("Error", "Error create"), status: 500 });
        const dataReturnS = yield (0, TypeTestDao_1.postDao)(value);
        if (!dataReturnS)
            return res.status(500).json({ data: [], message: (0, alert_services_1.AlertServices)("Error", "Error create"), status: 500 });
        let returnExist = yield getAllAlways();
        if (!returnExist)
            return res.status(500).json({ data: [], message: (0, alert_services_1.AlertServices)("Error", "Error create"), status: 500 });
        return res.status(200).json({ data: returnExist, message: (0, alert_services_1.AlertServices)("Success", "Client Created"), status: 200 });
    }
    catch (error) {
        console.log("Error in createTypeTest:", error);
        return res.status(500).json({ data: [], message: (0, alert_services_1.AlertServices)("Error", "Internal Server Error"), status: 500 });
    }
});
exports.post = post;
const update = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    let { error, value } = TypeTestValidationSchema_1.default.validate(req.body);
});
exports.update = update;
const deletes = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () { });
exports.deletes = deletes;
const getAllAlways = () => __awaiter(void 0, void 0, void 0, function* () {
    const data = "";
    const dataReturn = yield (0, TypeTestDao_1.getDao)(data);
    return yield (0, statusActive_services_1.statusActive)(dataReturn);
});
