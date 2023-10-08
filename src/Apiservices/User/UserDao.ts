
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
      Shift,
      TestInterview,
      Test,
      TypeInterview,
      TypeTest,
      TypeVacancy,
      User,
      Vacancy
} = require('../../../models')



export const getDao = async (data: any) => {
      return await User.findAll({
            include: [
                  {
                    model: Role,
                    include: [
                        {
                              model: Permission,
                              through: { model: PermissionRoll },
                           },
                    ],
                  },
                  {
                    model: Branch,
                  //   where: { id: 1 }, // Filtrar por el ID de la sucursal
                    include: [
                      {
                        model: Company,
                      },
                      Shift,
                    ],
                  },
                ],
      })
}
export const getIdDao = async (data: any) => {
      return await User.findAll({
            where: {
                  [Op.or]: [
                        { email: data },  // Filtrar por email
                        { id: data }      // Filtrar por id
                  ]
            }
      });
}
export const postDao = async (data: any) => {
      return await User.create(data)
}
export const updateDao = async (data: any, id: any) => {
      try {
            return await User.update(data, { where: { id: id } })
      } catch (error) {
            console.log("🚀 ~ file: userDao.ts:52 ~ updateDao ~ error:", error)
      }
}

export const deletesDao = async (data: any, id: any) => {
      try {
            return await User.update(data, { where: { id: id } })
      } catch (error) {
            console.log("🚀 ~ file: userDao.ts:52 ~ updateDao ~ error:", error)
      }
}