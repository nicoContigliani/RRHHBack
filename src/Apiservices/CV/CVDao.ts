
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




// export const getDao = async (data: any) => {
//       return await CV.findAll({
//             include: [
//                   {
//                         model: User
//                   },
//                   {
//                         model: Section,
//                         include: [
//                               {
//                                     model: Item,
//                               }
//                         ]
//                   }
//             ]
//       })
// }



// export const getDao = async (data: any) => {
//       return await CV.findAll({
//             include: [
//                 {
//                     model: User,
//                 },
//                 {
//                     model: Section,
//                     include: [
//                         {
//                             model: Item,
//                         },
//                     ],
//                 },
//             ],
//             orderBy: [
//                   {
//                         name: 'section.name',
//                         order: 'asc',
//                   },
//             ],
//         });
// }
export const getDao = async (data: any) => {
      return await CV.findAll({
        include: [
          {
            model: User,
          },
          {
            model: Section,
            include: [
              {
                model: Item,
              },
            ],
          },
        ],
        orderBy: [
          {
            name: 'section.name',
            order: 'asc',
          },
        ],
      });
    };


export const getIdDao = async (data: any) => {
      console.log("🚀 ~ file: CVDao.ts:87 ~ getIdDao ~ data:", data)
      return await CV.findAll({
            include: [
                  {
                        model: User,
                  },
                  {
                        model: Section,
                        include: [
                              {
                                    model: Item,

                              }
                        ]
                  }
            ],
            exclude: ['createdAt', 'updatedAt'],
            orderBy: [
                  {
                        name: 'section.name',
                        order: 'asc',
                  },
            ],
            where: {
                  id: data       // Filtrar por id
            }
      });
}
export const postDao = async (data: any) => {
      try {
            return await CV.create(data)
      } catch (error) {
            console.log("🚀 ~ file: CVDao.ts:57 ~ postDao ~ error:", error)

      }
}

export const updateDao = async (data: any, id: any) => {
      try {
            return await CV.update(data, { where: { id: id } })
      } catch (error) {
            console.log("🚀 ~ file: CVDao.ts:52 ~ updateDao ~ error:", error)
      }
}
export const deletesDao = async (data: any, id: any) => {
      try {
            return await CV.update(data, { where: { id: id } })
      } catch (error) {
            console.log("🚀 ~ file: CVDao.ts:52 ~ CVDao ~ error:", error)
      }
}
