
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
      return await Result.findAll({})
}

export const getIdDao = async (data: any) => {
      return await Result.findAll({
            where: {
                  id: data       // Filtrar por id
            }
      });
}
export const postDao = async (data: any) => {
      try {
            return await Result.create(data)
      } catch (error) {
            console.log("🚀 ~ file: ResultDao.ts:57 ~ postDao ~ error:", error)

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
            return await Result.update(data, { where: { id: id } })
      } catch (error) {
            console.log("🚀 ~ file: userDao.ts:52 ~ updateDao ~ error:", error)
      }
}
export const deletesDao = async (data: any, id: any) => {
      try {
            return await Result.update(data, { where: { id: id } })
      } catch (error) {
            console.log("🚀 ~ file: userDao.ts:52 ~ updateDao ~ error:", error)
      }
}
