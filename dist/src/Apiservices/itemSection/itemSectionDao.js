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
exports.deletesDao = exports.updateDao = exports.postDao = exports.getIdDao = exports.getDao = void 0;
const { Op } = require('sequelize');
const { BrachUser, Branch, Company, CompanyVacances, CV, CVSection, CVUser, Interview, InterviewResponsible, InterviewUser, InterviewVacance, Item, itemSection, Permission, PermissionRoll, Result, ResultTest, Role, RollUser, Section, SectionType, TestInterview, Test, TypeInterview, TypeTest, TypeVacancy, User, Vacancy } = require('../../../models');
const getDao = (data) => __awaiter(void 0, void 0, void 0, function* () {
    return yield itemSection.findAll({
        include: [
            {
                model: Item
            },
            {
                model: Section
            }
        ]
    });
});
exports.getDao = getDao;
const getIdDao = (data) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("🚀 ~ file: itemSectionDao.ts:53 ~ getIdDao ~ data:", data);
    try {
        return yield itemSection.findAll({
            include: [
                {
                    model: Item
                },
                {
                    model: Section
                }
            ],
            where: {
                id: data // Filtrar por id
            }
        });
    }
    catch (error) {
        console.log("🚀 ~ file: itemSectionDao.ts:71 ~ getIdDao ~ error:", error);
    }
});
exports.getIdDao = getIdDao;
const postDao = (data) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        data.createdAt = new Date();
        data.updatedAt = new Date();
        return yield itemSection.create(data);
    }
    catch (error) {
        console.log("🚀 ~ file: itemSectionDao.ts:57 ~ postDao ~ error:", error);
    }
});
exports.postDao = postDao;
const updateDao = (data, id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield itemSection.update(data, { where: { id: id } });
    }
    catch (error) {
        console.log("🚀 ~ file: userDao.ts:52 ~ updateDao ~ error:", error);
    }
});
exports.updateDao = updateDao;
const deletesDao = (data, id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield itemSection.update(data, { where: { id: id } });
    }
    catch (error) {
        console.log("🚀 ~ file: userDao.ts:52 ~ updateDao ~ error:", error);
    }
});
exports.deletesDao = deletesDao;
