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
exports.deletesDao = exports.updateDao = exports.postBulkDao = exports.postDao = exports.getIdDao = exports.getDao = void 0;
const { Op } = require('sequelize');
const { BrachUser, Branch, Company, CompanyVacances, CV, CVSection, CVUser, Interview, InterviewResponsible, InterviewUser, InterviewVacance, Item, itemSection, Permission, PermissionRoll, Result, ResultTest, Role, RollUser, Section, SectionType, TestInterview, Test, TypeInterview, TypeTest, TypeVacancy, User, Vacancy, RoadMap, InterviewRoadMap, RoadMapVacance } = require('../../../models');
const getDao = (data) => __awaiter(void 0, void 0, void 0, function* () {
    return yield RoadMap.findAll({
        include: [
            {
                model: Interview,
                include: [
                    {
                        model: User,
                        as: 'Interviewees',
                        through: {
                        // Si tienes una tabla intermedia, como 'IntervieweesInterviews',
                        // puedes especificar condiciones adicionales aquí.
                        },
                        order: [['id', 'ASC']], // Ordena por la columna 'id' del modelo User (entrevistados)
                    },
                    {
                        model: User,
                        as: 'Responsibles',
                        through: {
                        // Si tienes una tabla intermedia, como 'IntervieweesInterviews',
                        // puedes especificar condiciones adicionales aquí.
                        },
                        order: [['id', 'ASC']], // Ordena por la columna 'id' del modelo User (entrevistados)
                    },
                    {
                        model: Vacancy,
                    },
                ],
                group: ['Interviewees.id'], // Agrupa por el ID del entrevistado
            },
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
                model: Interview,
                include: [
                    {
                        model: User,
                        as: 'Interviewees',
                        through: {
                        // Si tienes una tabla intermedia, como 'IntervieweesInterviews',
                        // puedes especificar condiciones adicionales aquí.
                        },
                        order: [['id', 'ASC']], // Ordena por la columna 'id' del modelo User (entrevistados)
                    },
                    {
                        model: User,
                        as: 'Responsibles',
                        through: {
                        // Si tienes una tabla intermedia, como 'IntervieweesInterviews',
                        // puedes especificar condiciones adicionales aquí.
                        },
                        order: [['id', 'ASC']], // Ordena por la columna 'id' del modelo User (entrevistados)
                    },
                    {
                        model: Vacancy,
                    },
                ],
                group: ['Interviewees.id'], // Agrupa por el ID del entrevistado
            },
        ],
    });
});
exports.getIdDao = getIdDao;
const postDao = (data) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        //debe crear los datos en la tabla intermedia
        let { 
        // InterviewId,
        VacancyId, after_steps, all_Steps, before_steps, description, duration, image, location, nextActionDateTime, order_Steps, outcome, required, responsibilityDescription, scheduledDateTime, start_DateTime, finish_DateTime, completionDateTime, status_roadmap, undefined, createdAt, updatedAt } = data;
        // const ultimoId = await RoadMap.max('id');
        const todoRoadmap = yield RoadMap.create(data);
        console.log("🚀 ~ postDao ~ todoRoadmap:", todoRoadmap);
        // const { dataValues: { id } } = todoRoadmap
        // const RoadMapId = id
        // try {
        //     const dataRoadMapVacance = {
        //         VacancyId,
        //         RoadMapId,
        //         status_RoadMapVacance: true,
        //         comments: "",
        //         statusProg: "",
        //         createdAt,
        //         updatedAt,
        //     }
        //     const returnRoadMap = await RoadMapVacance.create(dataRoadMapVacance)
        // } catch (error: any) {
        //     console.error("🚀 ~ postDao ~ error:", error.message);
        //     console.error("🚀 ~ postDao ~ error stack:", error.stack);            // If you have other properties on the error object, log them as well
        //     if (error.errors) {
        //         error.errors.forEach((err: any) => {
        //             console.error("🚀 ~ Validation error:", err.message);
        //             console.error("🚀 ~ Validation error type:", err.type);
        //             console.error("🚀 ~ Validation error path:", err.path);
        //             console.error("🚀 ~ Validation error value:", err.value);
        //         });
        //     }
        // }
        // try {
        //     const dataInterviewRoadMap = {
        //         // InterviewId,
        //         RoadMapId,
        //         status_InterviewRoadMap: true,
        //         comments: "",
        //         statusProgres: "",
        //         sequence: null,
        //         interviewee: "",
        //         position: "",
        //         notes: "",
        //         createdAt,
        //         updatedAt
        //     }
        //     const returnRoadMap = await InterviewRoadMap.create(dataInterviewRoadMap)
        // } catch (error: any) {
        //     console.error("🚀 ~ postDao ~ error:", error.message);
        //     console.error("🚀 ~ postDao ~ error stack:", error.stack);            // If you have other properties on the error object, log them as well
        //     if (error.errors) {
        //         error.errors.forEach((err: any) => {
        //             console.error("🚀 ~ Validation error:", err.message);
        //             console.error("🚀 ~ Validation error type:", err.type);
        //             console.error("🚀 ~ Validation error path:", err.path);
        //             console.error("🚀 ~ Validation error value:", err.value);
        //         });
        //     }
        // }
        return yield todoRoadmap;
        // return await RoadMap.create(data)
    }
    catch (error) {
        console.error("🚀 ~ postDao ~ error:", error.message);
        console.error("🚀 ~ postDao ~ error stack:", error.stack); // If you have other properties on the error object, log them as well
        if (error.errors) {
            error.errors.forEach((err) => {
                console.error("🚀 ~ Validation error:", err.message);
                console.error("🚀 ~ Validation error type:", err.type);
                console.error("🚀 ~ Validation error path:", err.path);
                console.error("🚀 ~ Validation error value:", err.value);
            });
        }
    }
});
exports.postDao = postDao;
const postBulkDao = (data) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const dataReturn = yield InterviewResponsible.bulkCreate(data);
        console.log("🚀 ~ postBulkDao ~ dataReturn:", dataReturn);
        // return await InterviewResponsible.bulkCreate(data);
        return yield dataReturn;
    }
    catch (error) {
        console.log("🚀 ~ file: InterviewResponsibleDao.ts:57 ~ postDao ~ error:", error);
    }
});
exports.postBulkDao = postBulkDao;
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
