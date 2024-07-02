
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
      return await Interview.findAll({
            include: [
                  {
                        model: Test
                  },
                  {
                        model: Vacancy,
                        include: [
                              {
                                    model: Company
                              }
                        ]
                  },
            ]
      })
}

export const getIdDao = async (data: any) => {
      return await Interview.findAll({
            where: {
                  id: data       // Filtrar por id
            },
            include: [
                  {
                        model: Test
                  },
                  {
                        model: Vacancy,
                        include: [
                              {
                                    model: Company
                              }
                        ]
                  },
            ]
      });
}
// export const postDao = async (data: any) => {
//       try {
//             const dataForSent: any = { ...data };
//             dataForSent['interviewDateTime'] = new Date(data?.interviewDateTime);
//             return await Interview.create(dataForSent)
//       } catch (error) {
//             console.log("🚀 ~ file: InterviewDao.ts:57 ~ postDao ~ error:", error)

//       }
// }


export const postDao = async (data: any) => {
      try {
            // Create a copy of the data object
            const dataForSent = { ...data };

            // Convert interviewDateTime to a Date object
            dataForSent.interviewDateTime = new Date(data.interviewDateTime);

            // Check if nextActionDateTime is valid (optional, replace with actual validation)
            if (dataForSent.nextActionDateTime && !isNaN(new Date(dataForSent.nextActionDateTime).getTime())) {
                  // Valid date/time, proceed
            } else {
                  // Invalid date/time, handle it (e.g., set to null)
                  dataForSent.nextActionDateTime = null;
            }

            // Create the interview record
            const newInterview = await Interview.create(dataForSent);
            return newInterview; // Return the created interview object for potential use
      } catch (error) {
            console.error(" ~ file: InterviewDao.ts:line-number ~ postDao ~ error:", error);
      }
};



export const updateDao = async (data: any, id: any) => {
      try {
            return await Interview.update(data, { where: { id: id } })
      } catch (error) {
            console.log("🚀 ~ file: userDao.ts:52 ~ updateDao ~ error:", error)
      }
}
export const deletesDao = async (data: any, id: any) => {
      try {
            return await Interview.update(data, { where: { id: id } })
      } catch (error) {
            console.log("🚀 ~ file: userDao.ts:52 ~ updateDao ~ error:", error)
      }
}
