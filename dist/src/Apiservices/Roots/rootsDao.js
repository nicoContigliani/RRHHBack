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
exports.getAllColumns = exports.postDao = exports.getDaoFilter = exports.getDao = void 0;
const { Op } = require('sequelize');
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const sequelize_1 = require("sequelize");
// Configura tu instancia de Sequelize
const sequelize = new sequelize_1.Sequelize(`${process.env.database}`, //db
`${process.env.username}`, //username
`${process.env.password}`, //password
{
    host: `${process.env.host}`,
    dialect: 'postgres',
});
const { BrachUser, Branch, Company, CompanyVacances, CV, CVSection, CVUser, Interview, InterviewResponsible, InterviewUser, InterviewVacance, Item, itemSection, Permission, PermissionRoll, Result, ResultTest, Role, RollUser, Section, SectionType, TestInterview, Test, TypeInterview, TypeTest, TypeVacancy, User, Vacancy, Shift } = require('../../../models');
const getDao = () => __awaiter(void 0, void 0, void 0, function* () {
    const Alls = yield User.findAll({});
    return Alls;
});
exports.getDao = getDao;
const getDaoFilter = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const Alls = yield User.findOne({
        where: {
            [Op.or]: [
                { email: data },
                { fullname: data },
            ]
        },
        include: [
            {
                model: Role,
                as: 'Roles',
                include: [
                    {
                        model: Permission,
                        as: 'Permissions'
                    },
                ]
            },
            {
                model: Branch,
                as: 'Branches',
                include: [
                    {
                        model: Company,
                        as: 'Company'
                    },
                    {
                        model: Shift,
                        as: 'Shifts'
                    }
                ]
            }
        ]
    });
    return Alls;
});
exports.getDaoFilter = getDaoFilter;
const postDao = (data) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield User.create(data);
    }
    catch (error) {
        console.log("🚀 ~ postDao ~ error:", error);
    }
});
exports.postDao = postDao;
const getAllColumns = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Define tu consulta SQL
        // const consultaSQL = 'SELECT * FROM tabla WHERE Users = :condicion';
        const consultaSQL = `
    SELECT 
      t.table_name,
      c.column_name,
      c.data_type,
      c.character_maximum_length 
    FROM 
      information_schema.tables AS t 
    JOIN 
      information_schema.columns AS c 
    ON 
      t.table_schema = c.table_schema 
      AND t.table_name = c.table_name 
    WHERE 
      t.table_schema = 'public' 
    ORDER BY 
      t.table_name, 
      c.ordinal_position;
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
});
exports.getAllColumns = getAllColumns;
