"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Validator = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const formaterDataAuth_services_1 = require("../services/formaterDataAuth.services");
const Validator = (req, res, next) => {
    var _a, _b, _c, _d;
    const token = ((_a = req === null || req === void 0 ? void 0 : req.body) === null || _a === void 0 ? void 0 : _a.token) || ((_b = req === null || req === void 0 ? void 0 : req.query) === null || _b === void 0 ? void 0 : _b.token) || req.header('auth-token') || ((_d = (_c = req.headers) === null || _c === void 0 ? void 0 : _c.authorization) === null || _d === void 0 ? void 0 : _d.split(" ")[1]);
    const tokenProcess = process.env.JWT_SIGNATURE_GENERAL;
    if (!token) {
        return res.status(403).send("Error 403 -  A token is required for authentication ");
    }
    try {
        const tokenValido = jsonwebtoken_1.default.verify(token, process.env.JWT_SIGNATURE_GENERAL || 'pepito123');
        console.log("🚀 ~ tokenValido:19**************************", tokenValido);
        const { id, email, fullname, phone, birthday, Score, status_user, name_role, name_permission, conditions, code, creates, reads, updates, deletes, admins, exports, imports, approve, generate_reports, configure, restrict, manage_users, manage_roles, audit, name_branch, branch_long, branch_lat, branch_score, company, companyPhone, companyEmail, urlCompany, status_company, shift_name, start_time, end_time, status_shift, } = (0, formaterDataAuth_services_1.formaterDataAuthServices)(tokenValido);
        const rutaActual = req.originalUrl;
        console.log("🚀 ~ file: validator.ts:22 ~ rutaActual:", rutaActual);
        if (req.method === 'GET') {
            // La solicitud viene de POST
            console.log("get");
            console.log(req.params);
        }
        else {
            // La solicitud viene de otro método
            console.log("****************************toma por mirón*******************************");
        }
        next();
    }
    catch (error) {
        res.status(400).json({
            error: 'token no valido'
        });
    }
    return true;
};
exports.Validator = Validator;
