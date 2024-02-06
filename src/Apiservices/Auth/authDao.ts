
const { Op } = require('sequelize');



const { BrachUser, Branch, Company, CompanyVacances, CV, CVSection, CVUser, Interview, InterviewResponsible, InterviewUser, InterviewVacance, Item, itemSection, Permission, PermissionRoll, Result, ResultTest, Role, RollUser, Section, SectionType, TestInterview, Test, TypeInterview, TypeTest, TypeVacancy, User, Vacancy, Shift } = require('../../../models')


export const getDao = async () => {

  const Alls = await User.findAll({})

  return Alls
}

export const getDaoFilter = async (data: any) => {

  const Alls = await User.findOne({
    where: {
      [Op.or]: [
        { email: data },
        { fullname: data },
      ]
    },
    include: [
      {
        model: Role,
        as: 'Roles',
        include: [
          {
            model: Permission,
            as: 'Permissions'
          },
        ]
      },
      {
        model: Branch,
        as: 'Branches',
        include: [
          {
            model: Company,
            as: 'Company'
          },
          {
            model: Shift,
            as: 'Shifts'
          }
        ]
      }

    ]
  });

  return Alls;

}

export const postDao = async (data: any) => {
  try {
    return await User.create(data)
  } catch (error) {
    console.log("🚀 ~ postDao ~ error:", error)

  }
}