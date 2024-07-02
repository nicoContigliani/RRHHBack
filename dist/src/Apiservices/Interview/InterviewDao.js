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
    return yield Interview.findAll({
        include: [
            {
                model: Test
            },
            {
                model: Vacancy,
                include: [
                    {
                        model: Company
                    }
                ]
            },
        ]
    });
});
exports.getDao = getDao;
const getIdDao = (data) => __awaiter(void 0, void 0, void 0, function* () {
    return yield Interview.findAll({
        where: {
            id: data // Filtrar por id
        },
        include: [
            {
                model: Test
            },
            {
                model: Vacancy,
                include: [
                    {
                        model: Company
                    }
                ]
            },
        ]
    });
});
exports.getIdDao = getIdDao;
// export const postDao = async (data: any) => {
//       try {
//             const dataForSent: any = { ...data };
//             dataForSent['interviewDateTime'] = new Date(data?.interviewDateTime);
//             return await Interview.create(dataForSent)
//       } catch (error) {
//             console.log("🚀 ~ file: InterviewDao.ts:57 ~ postDao ~ error:", error)
//       }
// }
const postDao = (data) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Create a copy of the data object
        const dataForSent = Object.assign({}, data);
        // Convert interviewDateTime to a Date object
        dataForSent.interviewDateTime = new Date(data.interviewDateTime);
        // Check if nextActionDateTime is valid (optional, replace with actual validation)
        if (dataForSent.nextActionDateTime && !isNaN(new Date(dataForSent.nextActionDateTime).getTime())) {
            // Valid date/time, proceed
        }
        else {
            // Invalid date/time, handle it (e.g., set to null)
            dataForSent.nextActionDateTime = null;
        }
        // Create the interview record
        const newInterview = yield Interview.create(dataForSent);
        return newInterview; // Return the created interview object for potential use
    }
    catch (error) {
        console.error(" ~ file: InterviewDao.ts:line-number ~ postDao ~ error:", error);
    }
});
exports.postDao = postDao;
const updateDao = (data, id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield Interview.update(data, { where: { id: id } });
    }
    catch (error) {
        console.log("🚀 ~ file: userDao.ts:52 ~ updateDao ~ error:", error);
    }
});
exports.updateDao = updateDao;
const deletesDao = (data, id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield Interview.update(data, { where: { id: id } });
    }
    catch (error) {
        console.log("🚀 ~ file: userDao.ts:52 ~ updateDao ~ error:", error);
    }
});
exports.deletesDao = deletesDao;
