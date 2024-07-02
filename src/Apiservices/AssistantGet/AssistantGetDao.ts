import dotenv from "dotenv";
import { Sequelize, QueryTypes } from 'sequelize';
const { Op } = require('sequelize');

dotenv.config();


// Configura tu instancia de Sequelize
const sequelize = new Sequelize(
      `${process.env.database}`,//db
      `${process.env.username}`,//username
      `${process.env.password}`,//password
      {
            host: `${process.env.host}`,
            dialect: 'postgres',
      });

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
      InterviewRoadMap,
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

      try {
            // Define tu consulta SQL
            const consultaSQL = `
            SELECT 
            rm."id" AS "RoadMapId",
            json_agg(json_build_object(
                'interviewOrder', i."order",  
                'interview', i."id" || '-' || i."summary",
                'InterviewUsers', (
                    SELECT json_agg(DISTINCT u."id" || '-' || u."fullname")
                    FROM "InterviewUsers" iu
                    JOIN "Users" u ON iu."UserId" = u."id"
                    WHERE iu."InterviewId" = i."id"
                ),
                'InterviewResponsibles', (
                    SELECT json_agg(DISTINCT u."id" || '-' || u."fullname")
                    FROM "InterviewResponsibles" ir
                    JOIN "Users" u ON ir."UserId" = u."id"
                    WHERE ir."InterviewId" = i."id"
                )
            )) AS "Interviews"
        FROM 
            "RoadMaps" rm 
        JOIN 
            "InterviewRoadMaps" irm ON rm."id" = irm."RoadMapId"
        JOIN 
            "Interviews" i ON i."id" = irm."InterviewId"
        GROUP BY 
            rm."id"
        ORDER BY 
            rm."id";
      `;
            // Ejecuta la consulta
            const resultados = await sequelize.query(consultaSQL, {
                  // replacements: { condicion: 'valor' }, // Puedes pasar parámetros usando replacements
                  // type: QueryTypes.SELECT, // Especifica el tipo de consulta
            });


            return resultados;

      } catch (error) {
            console.log("🚀 ~ postDao ~ error:", error);
      }



      // return await InterviewRoadMap.findAll({})

}

export const getIdDao = async (data: any) => {
      const dataFormater = parseInt(data)

      if (data.startsWith('0')) {
            try {
                  // Define tu consulta SQL
                  const consultaSQL = `
                  SELECT 
                  rm."id" AS "RoadMapId",
                  json_agg(json_build_object(
                      'interviewOrder', i."order",
                      'interview', i."id" || '-' || i."summary",
                      'InterviewUsers', (
                          SELECT json_agg(DISTINCT u."id" || '-' || u."fullname")
                          FROM "InterviewUsers" iu
                          JOIN "Users" u ON iu."UserId" = u."id"
                          WHERE iu."InterviewId" = i."id"
                      ),
                      'InterviewResponsibles', (
                          SELECT json_agg(DISTINCT u."id" || '-' || u."fullname")
                          FROM "InterviewResponsibles" ir
                          JOIN "Users" u ON ir."UserId" = u."id"
                          WHERE ir."InterviewId" = i."id"
                      )
                  )) AS "Interviews"
              FROM 
                  "RoadMaps" rm 
              JOIN 
                  "InterviewRoadMaps" irm ON rm."id" = irm."RoadMapId"
              JOIN 
                  "Interviews" i ON i."id" = irm."InterviewId"
              WHERE 
                  rm."id" = ${data}
              GROUP BY 
                  rm."id"
              ORDER BY 
                  rm."id";
      `;
                  // Ejecuta la consulta
                  const resultados = await sequelize.query(consultaSQL, {
                        // replacements: { condicion: 'valor' }, // Puedes pasar parámetros usando replacements
                        // type: QueryTypes.SELECT, // Especifica el tipo de consulta
                  });


                  return resultados;

            } catch (error) {
                  console.log("🚀 ~ postDao ~ error:", error);
            }
      }

      if (!data?.startsWith('0')) {

            try {
                  // Define tu consulta SQL
                  const consultaSQL = await `
                  SELECT 
                  rm."id" AS "RoadMapId",
                  json_agg(json_build_object(
                      'interviewOrder', i."order",
                      'interview', i."id" || '-' || i."summary",
                      'InterviewUsers', (
                          SELECT json_agg(DISTINCT u."id" || '-' || u."fullname")
                          FROM "InterviewUsers" iu
                          JOIN "Users" u ON iu."UserId" = u."id"
                          WHERE iu."InterviewId" = i."id"
                      ),
                      'InterviewResponsibles', (
                          SELECT json_agg(DISTINCT u."id" || '-' || u."fullname")
                          FROM "InterviewResponsibles" ir
                          JOIN "Users" u ON ir."UserId" = u."id"
                          WHERE ir."InterviewId" = i."id"
                      )
                  )) AS "Interviews"
              FROM 
                  "RoadMaps" rm 
              JOIN 
                  "InterviewRoadMaps" irm ON rm."id" = irm."RoadMapId"
              JOIN 
                  "Interviews" i ON i."id" = irm."InterviewId"
              WHERE 
                  rm."id" = ${data}
              GROUP BY 
                  rm."id"
              ORDER BY 
                  rm."id"; 
            `;
                  // Ejecuta la consulta
                  const resultados = await sequelize.query(consultaSQL, {
                        // replacements: { condicion: 'valor' }, // Puedes pasar parámetros usando replacements
                        // type: QueryTypes.SELECT, // Especifica el tipo de consulta
                  });

                  return await resultados;

            } catch (error) {
                  console.log("🚀 ~ postDao ~ error:", error);
            }

      }







      // return await InterviewRoadMap.findAll({})

}
export const postDao = async (data: any) => {
      try {
            return await InterviewRoadMap.create(data)
      } catch (error) {
            console.log("🚀 ~ file: InterviewRoadMapDao.ts:57 ~ postDao ~ error:", error)

      }
}

export const postBulkDao = async (data: any) => {
      try {
            return await InterviewRoadMap.bulkCreate(data);
      } catch (error) {
            console.log("🚀 ~ file: InterviewRoadMapDao.ts:57 ~ postDao ~ error:", error)

      }
}




export const updateDao = async (data: any, id: any) => {
      try {
            return await InterviewRoadMap.update(data, { where: { id: id } })
      } catch (error) {
            console.log("🚀 ~ file: userDao.ts:52 ~ updateDao ~ error:", error)
      }
}
export const deletesDao = async (data: any, id: any) => {
      try {
            return await InterviewRoadMap.update(data, { where: { id: id } })
      } catch (error) {
            console.log("🚀 ~ file: userDao.ts:52 ~ updateDao ~ error:", error)
      }
}
