
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
            return await RoadMap.create(data)
      } catch (error) {
            console.log("🚀 ~ file: SectionDao.ts:57 ~ postDao ~ error:", error)

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