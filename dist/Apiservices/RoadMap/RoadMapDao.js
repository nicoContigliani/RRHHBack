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
//       return await RoadMap.findAll({
//                   include:[{
//                         model:Vacancy,
//                         include:[
//                               {
//                                     model:Interview,
//                                     include: [
//                                           {
//                                             model: User,
//                                             as: 'Interviewees', // Usar el alias correcto definido en las asociaciones
//                                           },
//                                           {
//                                             model: User,
//                                             as: 'Responsibles', // Usar el alias correcto definido en las asociaciones
//                                           },
//                                         ],
//                               }
//                         ]
//                   },
//             ]
//        })
// }
// export const getDao = async (data: any) => {
//       return await RoadMap.findAll({
//             include: [
//                   {
//                         model:Vacancy,
//                         include: [
//                               {
//                                     model: Interview,
//                                     include: [
//                                           {
//                                                 model: User,
//                                                 as: 'Interviewees', // Usar el alias correcto definido en las asociaciones
//                                           },
//                                           {
//                                                 model: User,
//                                                 as: 'Responsibles', // Usar el alias correcto definido en las asociaciones
//                                           },
//                                     ],
//                               },
//                         ],
//                   },
//             ],
//             group: ['Vacancy.id'], // Agrupar por el campo de identificación de la vacante
//             order: [[Vacancy, 'id']], // Ordenar por el ID de la vacante
//       });
// };
const getDao = (data) => __awaiter(void 0, void 0, void 0, function* () {
    return yield RoadMap.findAll({
        include: [
            {
                model: Vacancy,
                include: [
                    {
                        model: Interview,
                        include: [
                            {
                                model: User,
                                as: 'Interviewees', // Usar el alias correcto definido en las asociaciones
                            },
                            {
                                model: User,
                                as: 'Responsibles', // Usar el alias correcto definido en las asociaciones
                            },
                        ],
                    },
                ],
                group: ['Vacancy.id'],
                order: [[Vacancy, 'id']],
            }
        ],
    });
});
exports.getDao = getDao;
const getIdDao = (data) => __awaiter(void 0, void 0, void 0, function* () {
    return yield RoadMap.findAll({
        where: {
            id: data // Filtrar por id
        },
        include: [
            {
                model: Vacancy,
                include: [
                    {
                        model: Interview,
                        include: [
                            {
                                model: User,
                                as: 'Interviewees', // Usar el alias correcto definido en las asociaciones
                            },
                            {
                                model: User,
                                as: 'Responsibles', // Usar el alias correcto definido en las asociaciones
                            },
                        ],
                    },
                ],
                group: ['Vacancy.id'],
                order: [[Vacancy, 'id']],
            }
        ],
    });
});
exports.getIdDao = getIdDao;
const postDao = (data) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield RoadMap.create(data);
    }
    catch (error) {
        console.log("🚀 ~ file: SectionDao.ts:57 ~ postDao ~ error:", error);
    }
});
exports.postDao = postDao;
const updateDao = (data, id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield RoadMap.update(data, { where: { id: id } });
    }
    catch (error) {
        console.log("🚀 ~ file: userDao.ts:52 ~ updateDao ~ error:", error);
    }
});
exports.updateDao = updateDao;
const deletesDao = (data, id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield RoadMap.update(data, { where: { id: id } });
    }
    catch (error) {
        console.log("🚀 ~ file: userDao.ts:52 ~ updateDao ~ error:", error);
    }
});
exports.deletesDao = deletesDao;
