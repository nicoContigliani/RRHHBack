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
const { BrachUser, Branch, Company, CompanyVacances, CV, CVSection, CVUser, Interview, InterviewResponsible, InterviewUser, InterviewVacance, Item, itemSection, Permission, PermissionRoll, Result, ResultTest, Role, RollUser, Section, SectionType, TestInterview, Test, TypeInterview, TypeTest, TypeVacancy, User, Vacancy, RoadMap, InterviewRoadMap, RoadMapVacance } = require('../../../models');
// export const getDao = async (data: any) => {
//       return await Vacancy.findAll({
//             include: [
//                   {
//                         model:Interview
//                   },
//                   {
//                         model: TypeVacancy
//                   },
//                   {
//                         model:Company
//                   }
//             ]
//       })
const getDao = (data) => __awaiter(void 0, void 0, void 0, function* () {
    return yield Vacancy.findAll({
        include: [
            {
                model: Interview,
                include: [
                    {
                        model: TypeInterview
                    },
                    {
                        model: InterviewResponsible,
                        include: {
                            model: User // Include the User model in InterviewResponsible
                        }
                    },
                    {
                        model: InterviewUser,
                        include: {
                            model: User,
                            where: data.userId ? { id: data.userId } : undefined // Filter by userId if provided
                        }
                    }
                ]
            },
            {
                model: TypeVacancy
            },
            {
                model: Company
            }
        ],
    });
});
exports.getDao = getDao;
const getIdDao = (data) => __awaiter(void 0, void 0, void 0, function* () {
    return yield Vacancy.findAll({
        include: [
            {
                model: Interview,
                include: [
                    {
                        model: TypeInterview
                    },
                    {
                        model: InterviewResponsible,
                        include: {
                            model: User // Include the User model in InterviewResponsible
                        }
                    },
                    {
                        model: InterviewUser,
                        include: {
                            model: User,
                            where: data.userId ? { id: data.userId } : undefined // Filter by userId if provided
                        }
                    }
                ]
            },
            {
                model: TypeVacancy
            },
            {
                model: Company
            }
        ],
        where: {
            id: data // Filtrar por id
        }
    });
});
exports.getIdDao = getIdDao;
const postDao = (data) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield Vacancy.create(data);
    }
    catch (error) {
        console.log("🚀 ~ file: VacancyDao.ts:57 ~ postDao ~ error:", error);
    }
});
exports.postDao = postDao;
const updateDao = (data, id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield Vacancy.update(data, { where: { id: id } });
    }
    catch (error) {
        console.log("🚀 ~ file: userDao.ts:52 ~ updateDao ~ error:", error);
    }
});
exports.updateDao = updateDao;
const deletesDao = (data, id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield Vacancy.update(data, { where: { id: id } });
    }
    catch (error) {
        console.log("🚀 ~ file: userDao.ts:52 ~ updateDao ~ error:", error);
    }
});
exports.deletesDao = deletesDao;
