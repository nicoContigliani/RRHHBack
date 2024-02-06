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
exports.postDao = exports.getDaoFilter = exports.getDao = void 0;
const { Op } = require('sequelize');
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
    console.log("🚀 ~ postDao ~ data:", data, "*************");
    try {
        return yield User.create(data);
    }
    catch (error) {
        console.log("🚀 ~ postDao ~ error:", error);
    }
});
exports.postDao = postDao;
