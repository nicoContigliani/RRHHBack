
import { NextFunction, Request, Response } from 'express';

import {getDao, getIdDao, postDao, updateDao,deletesDao, postBulkDao } from './PermissionDao';

import { statusActive } from '../../services/statusActive.services';
import { AlertServices } from '../../services/alert.services';
import PermissionValidationSchema from '../../ValidationSchema/PermissionValidationSchema';
import { today } from '../../services/today.services';
import { changeActive } from '../../services/chanegeOfActives.services';

const errorResponse = { data: [], message: AlertServices("Error", "Error create"), status: 500 };


export const get = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const data = ""
        const dataReturn: any[] | undefined = await getDao(data)
        let returnExist = await statusActive(dataReturn)

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

    if (Array.isArray(req.body)) {
        try {
            for (let item of req.body) {
                const { error } = PermissionValidationSchema.validate(item);
                if (error) {
                    console.error(error.details);
                    return res.status(400).json({ message: "Validation Error", details: error.details });
                }
            }

            const currentTime = await today();
            const values = req.body.map(item => ({
                ...item,
                createdAt: currentTime,
                updatedAt: currentTime,
            }));
            const dataReturnS = await postBulkDao(values)
            if (!dataReturnS) return res.status(500).json({ message: "Error while saving data" });

            let returnExist = await getAllAlways();
            if (!returnExist) return res.status(500).json({ message: "Error fetching data" });

            return res.status(200).json({ data: returnExist, message: AlertServices("Success", "Created"), status: 200 });

        } catch (error) {
            return res.status(500).json({ data: [], message: AlertServices("Error", "Internal Server Error"), status: 500 });

        }


    }

    if (!Array.isArray(req.body)) {
        let { error, value } = PermissionValidationSchema.validate(req.body);
        try {
            const currentTime = await today()
            value.createdAt = currentTime
            value.updatedAt = currentTime
            if (error) console.error(error.details)
            if (error) return res.status(500).json(errorResponse)
            const dataReturnS = await postDao(value)
            if (!dataReturnS) return res.status(500).json(errorResponse)
            let returnExist = await getAllAlways()
            if (!returnExist) return res.status(500).json(errorResponse)
            return res.status(200).json({ data: returnExist, message: AlertServices("Success", "Created"), status: 200 });
        } catch (error) {
            console.log("Error in createTypeTest:", error);
            return res.status(500).json({ data: [], message: AlertServices("Error", "Internal Server Error"), status: 500 });
        }
    }

    // let { error, value } = PermissionValidationSchema.validate(req.body);
    // try {
    //     const currentTime = await today()
    //     value.createdAt = currentTime
    //     value.updatedAt = currentTime

    //     if (error) console.error(error.details)
    //     if (error) return res.status(500).json(errorResponse);
    //     const dataReturnS = await postDao(value)
    //     if (!dataReturnS) return res.status(500).json(errorResponse);

    //     let returnExist = await getAllAlways()
    //     if (!returnExist) return res.status(500).json(errorResponse);

    //     return res.status(200).json({ data: returnExist, message: AlertServices("Success", "Created"), status: 200 });
    // } catch (error) {
    //     console.log("Error in createTypeTest:", error);
    //     return res.status(500).json({ data: [], message: AlertServices("Error", "Internal Server Error"), status: 500 });
    // }
}

export const update = async (req: Request, res: Response, next: NextFunction) => {

    try {
        const { id } = req.params

        const { createdAt, ...updateCreate } = req.body
        if (!createdAt) return res.status(500).json(errorResponse);

        let { error, value } = PermissionValidationSchema.validate(updateCreate);
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
    return await statusActive(dataReturn)
}