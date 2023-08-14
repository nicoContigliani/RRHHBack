
const { Op } = require('sequelize');



const { BrachUser, Branch, Company, CompanyVacances, CV, CVSection, CVUser, Interview, InterviewResponsible, InterviewUser, InterviewVacance, Item, itemSection, Permission, PermissionRoll, Result, ResultTest, Role, RollUser, Section, SectionType, TestInterview, Test, TypeInterview, TypeTest, TypeVacancy, User, Vacancy } = require('../../../models')


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
        model: Role,  // Reemplaza "Role" con el modelo de tus roles
        as: 'Roles',  // Reemplaza "Roles" con el alias de tu relación en el modelo User
        include: [
          {
            model: Permission,  // Reemplaza "Permission" con el modelo de tus permisos
            as: 'Permissions'   // Reemplaza "Permissions" con el alias de tu relación en el modelo Role
          }
        ]
      }
    ]
  });

  return Alls
}

