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
const InterviewDao_1 = require("./InterviewDao");
const statusActive_services_1 = require("../../services/statusActive.services");
const alert_services_1 = require("../../services/alert.services");
const InterviewValidationSchema_1 = __importDefault(require("../../ValidationSchema/InterviewValidationSchema"));
const today_services_1 = require("../../services/today.services");
const chanegeOfActives_services_1 = require("../../services/chanegeOfActives.services");
const errorResponse = { data: [], message: (0, alert_services_1.AlertServices)("Error", "Error create"), status: 500 };
const get = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = "";
        const dataReturn = yield (0, InterviewDao_1.getDao)(data);
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
    const dataReturn = yield (0, InterviewDao_1.getIdDao)(id);
    let returnExist = yield (0, statusActive_services_1.statusActive)(dataReturn);
    if ((returnExist === null || returnExist === void 0 ? void 0 : returnExist.length) === 0)
        return res.status(200).json({ data: [], message: (0, alert_services_1.AlertServices)("Success", "It Dosen't find"), status: 200 });
    return res.status(200).json({ data: returnExist, message: (0, alert_services_1.AlertServices)("Success", "Find"), status: 200 });
});
exports.getId = getId;
const post = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    let { error, value } = InterviewValidationSchema_1.default.validate(req.body);
    try {
        const currentTime = yield (0, today_services_1.today)();
        value.createdAt = currentTime;
        value.updatedAt = currentTime;
        if (error)
            console.error(error.details);
        if (error)
            return res.status(500).json(errorResponse);
        const dataReturnS = yield (0, InterviewDao_1.postDao)(value);
        if (!dataReturnS)
            return res.status(500).json(errorResponse);
        let returnExist = yield getAllAlways();
        if (!returnExist)
            return res.status(500).json(errorResponse);
        return res.status(200).json({ data: returnExist, message: (0, alert_services_1.AlertServices)("Success", "Created"), status: 200 });
    }
    catch (error) {
        console.log("Error in createTypeTest:", error);
        return res.status(500).json({ data: [], message: (0, alert_services_1.AlertServices)("Error", "Internal Server Error"), status: 500 });
    }
});
exports.post = post;
const update = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const _a = req.body, { createdAt } = _a, updateCreate = __rest(_a, ["createdAt"]);
        if (!createdAt)
            return res.status(500).json(errorResponse);
        let { error, value } = InterviewValidationSchema_1.default.validate(updateCreate);
        if (error)
            return res.status(500).json(errorResponse);
        const dataReturnS = yield (0, InterviewDao_1.updateDao)(req.body, id);
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
        const dataGetId = yield (0, InterviewDao_1.getIdDao)(id);
        if (!dataGetId)
            if (500)
                return res.status(500).json(errorResponse);
        const todos = yield (0, chanegeOfActives_services_1.changeActive)(dataGetId);
        if (!todos)
            if (500)
                return res.status(500).json(errorResponse);
        const dataReturnS = yield (0, InterviewDao_1.deletesDao)(todos, id);
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
    const dataReturn = yield (0, InterviewDao_1.getDao)(data);
    return yield (0, statusActive_services_1.statusActive)(dataReturn);
});
