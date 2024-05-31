
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
export const getDao = async (data: any) => {
      return await Vacancy.findAll({
            include:  [
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
};


export const getIdDao = async (data: any) => {
      return await Vacancy.findAll({
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
                  id: data       // Filtrar por id
            }
      });
}


export const postDao = async (data: any) => {
      try {
            return await Vacancy.create(data)
      } catch (error) {
            console.log("🚀 ~ file: VacancyDao.ts:57 ~ postDao ~ error:", error)

      }
}
export const postBulkDao = async (data: any) => {
      try {
            return await InterviewResponsible.bulkCreate(data);
      } catch (error) {
            console.log("🚀 ~ file: InterviewResponsibleDao.ts:57 ~ postDao ~ error:", error)

      }
}

export const updateDao = async (data: any, id: any) => {
      try {
            return await Vacancy.update(data, { where: { id: id } })
      } catch (error) {
            console.log("🚀 ~ file: userDao.ts:52 ~ updateDao ~ error:", error)
      }
}
export const deletesDao = async (data: any, id: any) => {
      try {
            return await Vacancy.update(data, { where: { id: id } })
      } catch (error) {
            console.log("🚀 ~ file: userDao.ts:52 ~ updateDao ~ error:", error)
      }
}
