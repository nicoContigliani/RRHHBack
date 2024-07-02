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
exports.deletesDao = exports.updateDao = exports.postBulkDao = exports.postDao = exports.getIdDao = exports.getDao = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
const sequelize_1 = require("sequelize");
const { Op } = require('sequelize');
dotenv_1.default.config();
// Configura tu instancia de Sequelize
const sequelize = new sequelize_1.Sequelize(`${process.env.database}`, //db
`${process.env.username}`, //username
`${process.env.password}`, //password
{
    host: `${process.env.host}`,
    dialect: 'postgres',
});
const { BrachUser, Branch, Company, CompanyVacances, CV, CVSection, CVUser, Interview, InterviewResponsible, InterviewRoadMap, InterviewUser, InterviewVacance, Item, itemSection, Permission, PermissionRoll, Result, ResultTest, Role, RollUser, Section, SectionType, TestInterview, Test, TypeInterview, TypeTest, TypeVacancy, User, Vacancy } = require('../../../models');
const getDao = (data) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Define tu consulta SQL
        const consultaSQL = `
            SELECT 
            rm."id" AS "RoadMapId",
            json_agg(json_build_object(
                'interviewOrder', i."order",  
                'interview', i."id" || '-' || i."interviewers",
                'InterviewUsers', (
                    SELECT json_agg(DISTINCT u."id" || '-' || u."fullname")
                    FROM "InterviewUsers" iu
                    JOIN "Users" u ON iu."UserId" = u."id"
                    WHERE iu."InterviewId" = i."id"
                ),
                'InterviewResponsibles', (
                    SELECT json_agg(DISTINCT u."id" || '-' || u."fullname")
                    FROM "InterviewResponsibles" ir
                    JOIN "Users" u ON ir."UserId" = u."id"
                    WHERE ir."InterviewId" = i."id"
                )
            )) AS "Interviews"
        FROM 
            "RoadMaps" rm 
        JOIN 
            "InterviewRoadMaps" irm ON rm."id" = irm."RoadMapId"
        JOIN 
            "Interviews" i ON i."id" = irm."InterviewId"
        GROUP BY 
            rm."id"
        ORDER BY 
            rm."id";
      `;
        // Ejecuta la consulta
        const resultados = yield sequelize.query(consultaSQL, {
        // replacements: { condicion: 'valor' }, // Puedes pasar parámetros usando replacements
        // type: QueryTypes.SELECT, // Especifica el tipo de consulta
        });
        return resultados;
    }
    catch (error) {
        console.log("🚀 ~ postDao ~ error:", error);
    }
    // return await InterviewRoadMap.findAll({})
});
exports.getDao = getDao;
const getIdDao = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const dataFormater = parseInt(data);
    if (data.startsWith('0')) {
        try {
            // Define tu consulta SQL
            const consultaSQL = `
                  SELECT 
                  rm."id" AS "RoadMapId",
                  json_agg(json_build_object(
                      'interviewOrder', i."order",
                      'interview', i."id" || '-' || i."interviewers",
                      'InterviewUsers', (
                          SELECT json_agg(DISTINCT u."id" || '-' || u."fullname")
                          FROM "InterviewUsers" iu
                          JOIN "Users" u ON iu."UserId" = u."id"
                          WHERE iu."InterviewId" = i."id"
                      ),
                      'InterviewResponsibles', (
                          SELECT json_agg(DISTINCT u."id" || '-' || u."fullname")
                          FROM "InterviewResponsibles" ir
                          JOIN "Users" u ON ir."UserId" = u."id"
                          WHERE ir."InterviewId" = i."id"
                      )
                  )) AS "Interviews"
              FROM 
                  "RoadMaps" rm 
              JOIN 
                  "InterviewRoadMaps" irm ON rm."id" = irm."RoadMapId"
              JOIN 
                  "Interviews" i ON i."id" = irm."InterviewId"
              WHERE 
                  rm."id" = ${data}
              GROUP BY 
                  rm."id"
              ORDER BY 
                  rm."id";
      `;
            // Ejecuta la consulta
            const resultados = yield sequelize.query(consultaSQL, {
            // replacements: { condicion: 'valor' }, // Puedes pasar parámetros usando replacements
            // type: QueryTypes.SELECT, // Especifica el tipo de consulta
            });
            return resultados;
        }
        catch (error) {
            console.log("🚀 ~ postDao ~ error:", error);
        }
    }
    if (!(data === null || data === void 0 ? void 0 : data.startsWith('0'))) {
        try {
            // Define tu consulta SQL
            const consultaSQL = yield `
                  SELECT 
                  rm."id" AS "RoadMapId",
                  json_agg(json_build_object(
                      'interviewOrder', i."order",
                      'interview', i."id" || '-' || i."interviewers",
                      'InterviewUsers', (
                          SELECT json_agg(DISTINCT u."id" || '-' || u."fullname")
                          FROM "InterviewUsers" iu
                          JOIN "Users" u ON iu."UserId" = u."id"
                          WHERE iu."InterviewId" = i."id"
                      ),
                      'InterviewResponsibles', (
                          SELECT json_agg(DISTINCT u."id" || '-' || u."fullname")
                          FROM "InterviewResponsibles" ir
                          JOIN "Users" u ON ir."UserId" = u."id"
                          WHERE ir."InterviewId" = i."id"
                      )
                  )) AS "Interviews"
              FROM 
                  "RoadMaps" rm 
              JOIN 
                  "InterviewRoadMaps" irm ON rm."id" = irm."RoadMapId"
              JOIN 
                  "Interviews" i ON i."id" = irm."InterviewId"
              WHERE 
                  rm."id" = ${data}
              GROUP BY 
                  rm."id"
              ORDER BY 
                  rm."id"; 
            `;
            // Ejecuta la consulta
            const resultados = yield sequelize.query(consultaSQL, {
            // replacements: { condicion: 'valor' }, // Puedes pasar parámetros usando replacements
            // type: QueryTypes.SELECT, // Especifica el tipo de consulta
            });
            return yield resultados;
        }
        catch (error) {
            console.log("🚀 ~ postDao ~ error:", error);
        }
    }
    // return await InterviewRoadMap.findAll({})
});
exports.getIdDao = getIdDao;
const postDao = (data) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield InterviewRoadMap.create(data);
    }
    catch (error) {
        console.log("🚀 ~ file: InterviewRoadMapDao.ts:57 ~ postDao ~ error:", error);
    }
});
exports.postDao = postDao;
const postBulkDao = (data) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield InterviewRoadMap.bulkCreate(data);
    }
    catch (error) {
        console.log("🚀 ~ file: InterviewRoadMapDao.ts:57 ~ postDao ~ error:", error);
    }
});
exports.postBulkDao = postBulkDao;
const updateDao = (data, id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield InterviewRoadMap.update(data, { where: { id: id } });
    }
    catch (error) {
        console.log("🚀 ~ file: userDao.ts:52 ~ updateDao ~ error:", error);
    }
});
exports.updateDao = updateDao;
const deletesDao = (data, id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield InterviewRoadMap.update(data, { where: { id: id } });
    }
    catch (error) {
        console.log("🚀 ~ file: userDao.ts:52 ~ updateDao ~ error:", error);
    }
});
exports.deletesDao = deletesDao;
