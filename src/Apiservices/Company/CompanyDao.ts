
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
      Vacancy
} = require('../../../models')



export const getDao = async (data: any) => {
      return await Company.findAll({
            include: [
                  {
                        model: Vacancy,
                        include: [
                              {
                                    model: Interview,
                                    include: [
                                          {
                                                model: Test
                                          },
                                          {
                                                model: User
                                          }
                                    ]
                              }
                        ]

                  }
                  // {
                  //   model: CompanyVacances,
                  //   as: 'companyVacancies',
                  //   include: [
                  //     {
                  //       model: Vacancy,
                  //       as: 'vacancies',
                  //       include: [
                  //         {
                  //           model: TypeVacancy,
                  //           as: 'vacancyType',
                  //         },
                  //         {
                  //           model: InterviewVacance,
                  //           as: 'interviewVacancies',
                  //           include: [
                  //             {
                  //               model: Interview,
                  //               as: 'interviews',
                  //               include: [
                  //                 {
                  //                   model: TypeInterview,
                  //                   as: 'interviewType',
                  //                 },
                  //               ],
                  //             },
                  //             {
                  //               model: TestInterview,
                  //               as: 'testInterviews',
                  //               include: [
                  //                 {
                  //                   model: Test,
                  //                   as: 'test',

                  //                 },
                  //               ],
                  //             },
                  //           ],
                  //         },
                  //       ],
                  //     },
                  //   ],
                  // },
            ],
      })
}

export const getIdDao = async (data: any) => {
      return await Company.findAll({
            where: {
                  id: data       // Filtrar por id
            }
      });
}
export const postDao = async (data: any) => {
      try {
            return await Company.create(data)
      } catch (error) {
            console.log("🚀 ~ file: CompanyDao.ts:57 ~ postDao ~ error:", error)

      }
}

export const updateDao = async (data: any, id: any) => {
      try {
            return await Company.update(data, { where: { id: id } })
      } catch (error) {
            console.log("🚀 ~ file: userDao.ts:52 ~ updateDao ~ error:", error)
      }
}
export const deletesDao = async (data: any, id: any) => {
      try {
            return await Company.update(data, { where: { id: id } })
      } catch (error) {
            console.log("🚀 ~ file: userDao.ts:52 ~ updateDao ~ error:", error)
      }
}
