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
