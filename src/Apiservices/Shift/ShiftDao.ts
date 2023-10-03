
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
      return await Shift.findAll({})
}

export const getIdDao = async (data: any) => {
      return await Shift.findAll({
            where: {
                  id: data       // Filtrar por id
            }
      });
}
export const postDao = async (data: any) => {
      try {
            return await Shift.create(data)
      } catch (error) {
            console.log("🚀 ~ file: SectionTypeDao.ts:57 ~ postDao ~ error:", error)

      }
}

export const updateDao = async (data: any, id: any) => {
      try {
            return await Shift.update(data, { where: { id: id } })
      } catch (error) {
            console.log("🚀 ~ file: userDao.ts:52 ~ updateDao ~ error:", error)
      }
}
export const deletesDao = async (data: any, id: any) => {
      try {
            return await Shift.update(data, { where: { id: id } })
      } catch (error) {
            console.log("🚀 ~ file: userDao.ts:52 ~ updateDao ~ error:", error)
      }
}
