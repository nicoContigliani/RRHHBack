
import { NextFunction, Request, Response } from 'express';
import Joi from 'joi';


import { getDao, getIdDao, postDao, updateDao, deletesDao } from './CVDao';

import { postDao as postDaoCVUser } from '../CVUser/CVUserDao'
import { getDao as getDaoSection, postDao as postDaoSection } from '../Section/SectionDao'
import { getDao as getDaoCVSection, postDao as postDaoCVSection } from '../CVSection/CVSectionDao'
import { getDao as getDaoItem, postDao as postDaoItem } from '../Item/ItemDao'
import { getDao as getDaoItemSection, postDao as postDaoItemSection } from '../itemSection/itemSectionDao'






import { statusActive } from '../../services/statusActive.services';
import { AlertServices } from '../../services/alert.services';
import CVValidationSchema from '../../ValidationSchema/CVValidationSchema';
import { today } from '../../services/today.services';
import { changeActive } from '../../services/chanegeOfActives.services';
import { personDataCVExist } from '../../services/cvData/personDataCVExist';
import { fullnameTabulatorServices } from '../../services/cvData/fullnameTabulator.services';
import { cvGetIdOfNewCV } from '../../services/cvData/cvGetIdOfNewCV.services';
import { cvGetIdCVUSerObject } from '../../services/cvData/cvGetIdCVUSerObjectServices';
import { cvGetIdMaxArray } from '../../services/cvData/cvGetIdMaxArray.services';
import { cvGetDataItemFormatServices } from '../../services/cvData/cvGetDataItemFormat.services';
import { forrmatDataForSendCV } from '../../services/cvData/forrmatDataForSendCV.service';
import { cvTitleJoinServices } from '../../services/cvData/cvTitleJoin.services';
import { objerctBeforeFormaterThing } from '../../services/objerctBeforeFormaterThing.services';
import { indexDataFormaterSendCV } from '../../services/cvData/indexDataFormaterSendCV.service';
import { dtoArray } from './CVDto';

const errorResponse = { data: [], message: AlertServices("Error", "Error create"), status: 500 };


export const get = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const data = ""
        const dataReturn: any[] | undefined = await getDao(data)
        const dataDto: any[] | any = await dtoArray(dataReturn)

        let returnExist = await statusActive(dataDto)

        if (returnExist?.length === 0) return res.status(200).json({ data: [], message: AlertServices("Success", "TypeTest dosen't find"), status: 200 });
        return res.status(200).json({ data: returnExist, message: AlertServices("Success", "Find"), status: 200 })
    } catch (error) {
        console.log("🚀 ~ file: UserController.ts:14 ~ get ~ error:", error)

    }
}
export const getId = async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params
    const dataReturn: any[] | undefined = await getIdDao(id)
    let returnExist = await statusActive(dataReturn)

    if (returnExist?.length === 0) return res.status(200).json({ data: [], message: AlertServices("Success", "It Dosen't find"), status: 200 });
    return res.status(200).json({ data: returnExist, message: AlertServices("Success", "Find"), status: 200 })
}

export const post = async (req: Request, res: Response, next: NextFunction) => {

    // --- crear usuario general 
    // --- ingresar a crear cv o ver CV 
    // --- Crear CV  (se ha creado usuario y ahora se crea cv... a su vez se agrega CVUser con ambos id)
    // --- luego segun el perfil(X) se inserta  copias section[{}] y 
    // toma el ultimo id el numero ya uqe luego en cvSection va del primer idSectionCopiado hata el ultimo idSectionCopiado  
    // ---- luego se agrega en cvSection el cVID y se le pega (el ultimo id creado en section el numero ya uqe luego en cvSection va del primer
    // idSectionCopiado hata el ultimo idSectionCopiado )
    // luego llega lo mas complejo  
    // en itemSection -> todo lo que viene de los steps iportante (capturar de Section los 9 o mas id  de la seccion que pueden ser los últimos)

    let {
        PersonalInformation,
        PersonTitle,
        PersonalDescription,
        Education,
        Experience,
        HardSkill,
        SoffSkill,
        Lenguage,
        Disponibility
    } = req.body

    const {
        Score, birthday, CreateAt, email, fullname, id, phone, status_user, updateAt, linkedin, repository, folderprofile, birthsday
    } = PersonalInformation[0]

    const dataReturnCVTitle = await cvTitleJoinServices(PersonTitle)

    let dataPersonObject = PersonalInformation[0]
    dataPersonObject.titleCV = dataReturnCVTitle


    //TODO  esto debe estar si o si 
    const fullnameTabulator = await fullnameTabulatorServices(fullname)

    try {
        const data = ""
        const currentTime = await today()

        const dataReturn: any[] | undefined = await getDao(data)
        const cvExist: any = await personDataCVExist(dataReturn, fullnameTabulator)
        // if (cvExist) return res.status(500).json({ data: [], message: AlertServices("Error", "Internal Server Error"), status: 500 });


        const newObjectForCV = {
            title: fullnameTabulator,
            description_cv: fullname,
            status_cv: true,
            createdAt: currentTime,
            updatedAt: currentTime,
        }


        //TODO  crea CV
        const dataReturnCreateCV = await postDao(newObjectForCV)
        //  if(dataReturnCreateCV) return res.status(500).json({ data: [], message: AlertServices("Error", "Internal Server Error"), status: 500 });
        const getIdCV = await cvGetIdOfNewCV(dataReturnCreateCV)

        const newObjectForCVUser = {
            UserId: id,
            CVId: getIdCV,
            status_cv_user: true,
            createdAt: currentTime,
            updatedAt: currentTime,
        }
        //TODO Crea CVUSer
        const dataReturnCreateCVUSer = await postDaoCVUser(newObjectForCVUser)

        //TODO  ------getUserId--------
        const getUserId = await cvGetIdCVUSerObject(dataReturnCreateCVUSer)


        const dataStructureSection = [
            {
                SectionTypeId: 1,
                title: "data Person",
                content: "",
                status_section: true,
                createdAt: currentTime,
                updatedAt: currentTime
            },
            {
                SectionTypeId: 2,
                title: "description Person",
                content: "",
                status_section: true,
                createdAt: currentTime,
                updatedAt: currentTime
            },
            {
                SectionTypeId: 3,
                "title": "experience work",
                content: "",
                status_section: true,
                createdAt: currentTime,
                updatedAt: currentTime
            },
            {
                SectionTypeId: 4,
                "title": "experience freelancer",
                content: "",
                status_section: true,
                createdAt: currentTime,
                updatedAt: currentTime
            },
            {
                SectionTypeId: 5,
                "title": "soft skill",
                content: "",
                status_section: true,
                createdAt: currentTime,
                updatedAt: currentTime
            },
            {
                SectionTypeId: 6,
                "title": "hard skill",
                content: "",
                status_section: true,
                createdAt: currentTime,
                updatedAt: currentTime
            },
            {
                SectionTypeId: 7,
                "title": "education",
                content: "",
                status_section: true,
                createdAt: currentTime,
                updatedAt: currentTime
            },
            {
                SectionTypeId: 8,
                "title": "lenguaje",
                content: "",
                status_section: true,
                createdAt: currentTime,
                updatedAt: currentTime
            },
            {
                SectionTypeId: 9,
                "title": "disponibility",
                content: "",
                status_section: true,
                createdAt: currentTime,
                updatedAt: currentTime
            }
        ]


        try {
            const dataReturnS = [];

            for (const obj of dataStructureSection) {

                obj.createdAt = currentTime;
                obj.updatedAt = currentTime;
                //TODO crea Section
                const dataReturn = await postDaoSection(obj);
                if (!dataReturn) return res.status(500).json(errorResponse);
                dataReturnS.push(dataReturn);
            }


            let returnExist = await getAllAlways();
            if (!returnExist) return res.status(500).json(errorResponse);

        } catch (error) {
            console.log("Error in createTypeTest:", error);
            return res.status(500).json({ data: [], message: AlertServices("Error", "Internal Server Error"), status: 500 });
        }

        const getSectionAll = await getDaoSection(data)
        const dataIdmmax = await cvGetIdMaxArray(getSectionAll)
        const dataInitialId = (dataIdmmax - 9)

        for (let i = dataInitialId; i <= dataIdmmax; i++) {
            const todos = {
                CVId: getIdCV,
                SectionId: i,
                position: "1",
                describle_cv_section: currentTime,
                status_cv_section: true,
                createdAt: currentTime,
                updatedAt: currentTime
            }
            //TODO crea CVSection
            postDaoCVSection(todos)
        }


        const dataAfterPostItem = await getDaoItem(data)


        const todo = await indexDataFormaterSendCV(dataAfterPostItem, req.body)




        const dataReturnS = [];
        for (const obj of todo) {
            obj.createdAt = currentTime;
            obj.updatedAt = currentTime;

            if (100 <= obj.ItemId && obj.ItemId < 200) obj.SectionId = dataInitialId + 1
            if (200 <= obj.ItemId && obj.ItemId < 300) obj.SectionId = dataInitialId + 2
            if (300 <= obj.ItemId && obj.ItemId < 400) obj.SectionId = dataInitialId + 3
            if (400 <= obj.ItemId && obj.ItemId < 500) obj.SectionId = dataInitialId + 4
            if (500 <= obj.ItemId && obj.ItemId < 600) obj.SectionId = dataInitialId + 5
            if (600 <= obj.ItemId && obj.ItemId < 700) obj.SectionId = dataInitialId + 6
            if (700 <= obj.ItemId && obj.ItemId < 800) obj.SectionId = dataInitialId + 7
            if (800 <= obj.ItemId && obj.ItemId < 900) obj.SectionId = dataInitialId + 8
            if (900 <= obj.ItemId && obj.ItemId < 1000) obj.SectionId = dataInitialId + 9

            //TODO crea Section
            const dataReturn = await postDaoItemSection(obj);
            // //  if (!dataReturn) return res.status(500).json(errorResponse);
            dataReturnS.push(dataReturn);
        }


        return res.status(200).json({ data: dataReturnS, message: AlertServices("Success", "Create CV"), status: 200 });


    } catch (error) {
        console.log("🚀 ~ post ~ error:", error)
    }

}

export const update = async (req: Request, res: Response, next: NextFunction) => {

    try {
        const { id } = req.params

        const { createdAt, ...updateCreate } = req.body
        if (!createdAt) return res.status(500).json(errorResponse);

        let { error, value } = CVValidationSchema.validate(updateCreate);
        if (error) console.error(error.details)
        if (error) return res.status(500).json(errorResponse);


        const dataReturnS = await updateDao(req.body, id)
        if (dataReturnS) {
            const dataReturnGet = await getAllAlways()
            return res.status(200).json({ data: dataReturnGet, message: AlertServices("Success", "Update"), status: 200 });
        }

    } catch (error) {
        console.log("🚀 ~ file: TypeTestController.ts:71 ~ update ~ error:", error)
        if (error) return res.status(500).json(errorResponse);

    }

}

export const deletes = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params
        const dataGetId = await getIdDao(id)
        if (!dataGetId) if (500) return res.status(500).json(errorResponse);

        const todos = await changeActive(dataGetId)
        if (!todos) if (500) return res.status(500).json(errorResponse);

        const dataReturnS = await deletesDao(todos, id)
        if (dataReturnS) {
            const dataReturnGet = await getAllAlways()
            return res.status(200).json({ data: dataReturnGet, message: AlertServices("Success", " Deletes"), status: 200 });
        }
    } catch (error) {
        if (error) return res.status(500).json(errorResponse);

    }
}



const getAllAlways = async () => {
    const data = ""
    const dataReturn: any[] | undefined = await getDao(data)
    const dataDto: any[] | any = await dtoArray(dataReturn)
    return await statusActive(dataDto)
}