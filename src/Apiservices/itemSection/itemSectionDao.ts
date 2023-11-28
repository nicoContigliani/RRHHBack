
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
      return await itemSection.findAll({
            include: [
                  {
                        model: Item
                  },
                  {
                        model: Section
                  }
            ]
      })
}

export const getIdDao = async (data: any) => {
      console.log("🚀 ~ file: itemSectionDao.ts:53 ~ getIdDao ~ data:", data)

      try {

            return await itemSection.findAll({
                  include: [
                        {
                              model: Item
                        },
                        {
                              model: Section
                        }
                  ],
                  where: {
                        id: data       // Filtrar por id
                  }
            });
      } catch (error) {
            console.log("🚀 ~ file: itemSectionDao.ts:71 ~ getIdDao ~ error:", error)

      }


}
export const postDao = async (data: any) => {
      try {
            return await itemSection.create(data)
      } catch (error) {
            console.log("🚀 ~ file: itemSectionDao.ts:57 ~ postDao ~ error:", error)

      }
}

export const updateDao = async (data: any, id: any) => {
      try {
            return await itemSection.update(data, { where: { id: id } })
      } catch (error) {
            console.log("🚀 ~ file: userDao.ts:52 ~ updateDao ~ error:", error)
      }
}
export const deletesDao = async (data: any, id: any) => {
      try {
            return await itemSection.update(data, { where: { id: id } })
      } catch (error) {
            console.log("🚀 ~ file: userDao.ts:52 ~ updateDao ~ error:", error)
      }
}
