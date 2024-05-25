
const { Op } = require('sequelize');
import dotenv from "dotenv";
dotenv.config();



import { Sequelize, QueryTypes } from 'sequelize';

// Configura tu instancia de Sequelize
const sequelize = new Sequelize(
  `${process.env.database}`,//db
  `${process.env.username}`,//username
  `${process.env.password}`,//password
  {
    host: `${process.env.host}`,
    dialect: 'postgres',
  });










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

export const getAllColumns = async () => {




  try {
    // Define tu consulta SQL
    // const consultaSQL = 'SELECT * FROM tabla WHERE Users = :condicion';
    const consultaSQL = `
    SELECT 
      t.table_name,
      c.column_name,
      c.data_type,
      c.character_maximum_length 
    FROM 
      information_schema.tables AS t 
    JOIN 
      information_schema.columns AS c 
    ON 
      t.table_schema = c.table_schema 
      AND t.table_name = c.table_name 
    WHERE 
      t.table_schema = 'public' 
    ORDER BY 
      t.table_name, 
      c.ordinal_position;
  `;
    // Ejecuta la consulta
    const resultados = await sequelize.query(consultaSQL, {
      // replacements: { condicion: 'valor' }, // Puedes pasar parámetros usando replacements
      // type: QueryTypes.SELECT, // Especifica el tipo de consulta
    });
    return resultados

  } catch (error) {
    console.log("🚀 ~ postDao ~ error:", error)

  }
}