
const { Op } = require('sequelize');



const {
    BrachUser,
    Branch,
    Company,
    CompanyVacances,
    CV,
    CVSection,
    CVUser,
    Interview,
    InterviewResponsible,
    InterviewUser,
    InterviewVacance,
    Item,
    itemSection,
    Permission,
    PermissionRoll,
    Result,
    ResultTest,
    Role,
    RollUser,
    Section,
    SectionType,
    TestInterview,
    Test,
    TypeInterview,
    TypeTest,
    TypeVacancy,
    User,
    Vacancy,
    RoadMap,
    InterviewRoadMap,
    RoadMapVacance
} = require('../../../models')




export const getDao = async (data: any) => {
    return await RoadMap.findAll({
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
};

export const getIdDao = async (data: any) => {
    return await RoadMap.findAll({
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
};

export const postDao = async (data: any) => {
    try {

        //debe crear los datos en la tabla intermedia

        let { InterviewId,
            VacancyId,
            after_steps,
            all_Steps,
            before_steps,
            description,
            duration,
            image,
            location,
            nextActionDateTime,
            order_Steps,
            outcome,
            required,
            responsibilityDescription,
            scheduledDateTime,
            start_DateTime,
            finish_DateTime,
            completionDateTime,
            status_roadmap,
            undefined,
            createdAt,
            updatedAt } = data

        // const ultimoId = await RoadMap.max('id');
        const todoRoadmap = await RoadMap.create(data)

        const { dataValues: { id } } = todoRoadmap

        const RoadMapId = id

        try {
            const dataRoadMapVacance = {
                VacancyId,
                RoadMapId,
                status_RoadMapVacance: true,
                comments: "",
                statusProg: "",
                createdAt,
                updatedAt,
            }
            const returnRoadMap = await RoadMapVacance.create(dataRoadMapVacance)

        } catch (error: any) {
            console.error("🚀 ~ postDao ~ error:", error.message);
            console.error("🚀 ~ postDao ~ error stack:", error.stack);            // If you have other properties on the error object, log them as well
            if (error.errors) {
                error.errors.forEach((err: any) => {
                    console.error("🚀 ~ Validation error:", err.message);
                    console.error("🚀 ~ Validation error type:", err.type);
                    console.error("🚀 ~ Validation error path:", err.path);
                    console.error("🚀 ~ Validation error value:", err.value);
                });
            }

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
            }
            const returnRoadMap = await InterviewRoadMap.create(dataInterviewRoadMap)

        } catch (error: any) {
            console.error("🚀 ~ postDao ~ error:", error.message);
            console.error("🚀 ~ postDao ~ error stack:", error.stack);            // If you have other properties on the error object, log them as well
            if (error.errors) {
                error.errors.forEach((err: any) => {
                    console.error("🚀 ~ Validation error:", err.message);
                    console.error("🚀 ~ Validation error type:", err.type);
                    console.error("🚀 ~ Validation error path:", err.path);
                    console.error("🚀 ~ Validation error value:", err.value);
                });
            }

        }

        return await todoRoadmap

        // return await RoadMap.create(data)
    } catch (error: any) {
        console.error("🚀 ~ postDao ~ error:", error.message);
        console.error("🚀 ~ postDao ~ error stack:", error.stack);            // If you have other properties on the error object, log them as well
        if (error.errors) {
            error.errors.forEach((err: any) => {
                console.error("🚀 ~ Validation error:", err.message);
                console.error("🚀 ~ Validation error type:", err.type);
                console.error("🚀 ~ Validation error path:", err.path);
                console.error("🚀 ~ Validation error value:", err.value);
            });
        }

    }
}

export const updateDao = async (data: any, id: any) => {
    try {
        return await RoadMap.update(data, { where: { id: id } })
    } catch (error) {
        console.log("🚀 ~ file: userDao.ts:52 ~ updateDao ~ error:", error)
    }
}
export const deletesDao = async (data: any, id: any) => {
    try {
        return await RoadMap.update(data, { where: { id: id } })
    } catch (error) {
        console.log("🚀 ~ file: userDao.ts:52 ~ updateDao ~ error:", error)
    }
}