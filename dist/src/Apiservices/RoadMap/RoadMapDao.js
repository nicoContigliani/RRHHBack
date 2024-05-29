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
                    },
                    {
                        model: Vacancy, // Corregido 'modul' a 'model'
                    },
                ],
            },
        ],
    });
});
exports.getIdDao = getIdDao;
const postDao = (data) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        //debe crear los datos en la tabla intermedia
        let { InterviewId, VacancyId, after_steps, all_Steps, before_steps, description, duration, image, location, nextActionDateTime, order_Steps, outcome, required, responsibilityDescription, scheduledDateTime, start_DateTime, finish_DateTime, completionDateTime, status_roadmap, undefined, createdAt, updatedAt } = data;
        // InterviewRoadMap --------
        //id                     
        //InterviewId            
        //RoadMapId              
        //status_InterviewRoadMap
        //comments               
        //statusProgres          
        //sequence               
        //interviewee            
        //position               
        //notes                  
        //createdAt              
        //updatedAt            
        // const dataRoadMapVacance = {
        //     VacancyId,
        //     RoadMapId,
        //     status_RoadMapVacance,
        //     comments,
        //     statusProg,
        //     createdAt,
        //     updatedAt,
        // }
        // const returnRoadMap = await RoadMapVacance.create(data)
        //interviewId
        //VacancyId
        const ultimoId = yield RoadMap.max('id');
        console.log("Roadmap***********************");
        const todoRoadmap = yield RoadMap.create(data);
        console.log("Roadmap***********************");
        const { dataValues: { id } } = todoRoadmap;
        const RoadMapId = id;
        try {
            const dataRoadMapVacance = {
                VacancyId,
                RoadMapId,
                status_RoadMapVacance: true,
                comments: "",
                statusProg: "",
                createdAt,
                updatedAt,
            };
            console.log("RoadMapVacance***********************");
            const returnRoadMap = yield RoadMapVacance.create(dataRoadMapVacance);
            console.log("RoadMapVacance***********************");
        }
        catch (error) {
            console.log("🚀 ~ postDao ~ error:", error);
        }
        try {
            const dataInterviewRoadMap = {
                InterviewId,
                RoadMapId,
                status_InterviewRoadMap: true,
                comments: "",
                statusProgres: "",
                sequence: null,
                interviewee: "",
                position: "",
                notes: "",
                createdAt,
                updatedAt
            };
            console.log("InterviewRoadMap***********************");
            const returnRoadMap = yield InterviewRoadMap.create(dataInterviewRoadMap);
            console.log("InterviewRoadMap***********************");
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
        return yield todoRoadmap;
        // return await RoadMap.create(data)
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
