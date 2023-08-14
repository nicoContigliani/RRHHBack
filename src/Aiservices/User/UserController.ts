
import { NextFunction, Request, Response } from 'express';

import { getDao, getIdDao, postDao, updateDao, deletesDao } from './UserDao';


import { today } from '../../services/today.services';
import { AlertServices } from '../../services/alert.services';
import { jwtGenerateToken } from '../../services/jwt.services';
import { cleanPasswordArray, deletePasswordArray } from './UserDto'
import { existAll } from '../../services/exist.services';
import { IAll } from '../../Interfaces/IAll';
import { bcryptCreatePassword } from '../../services/bcrypt.services';
import { allowed } from '../../services/Allowed.services';
import { IUser } from '../../Interfaces/IUser';
import { cleanPassword } from '../../services/clean.password.services';
import { changeActive } from '../../services/chanegeOfActives.services';
import { statusActive } from '../../services/statusActive.services';



// const todos = await jwtGenerateToken(password)


export const get = async (req: Request, res: Response, next: NextFunction) => {

    try {
        const data = ""
        const dataReturn: any[] | undefined = await getDao(data)
        let returnExist = await statusActive(dataReturn)

        const ifExist = await cleanPasswordArray(returnExist)
        if(ifExist?.length===0)   return res.status(200).json({ data: [], message: AlertServices("Success", "Client dosen't find"), status: 200 });
        return res.status(200).json({ data: ifExist, message: AlertServices("Success", "Client find"), status: 200 })
    } catch (error) {
        console.log("🚀 ~ file: UserController.ts:14 ~ get ~ error:", error)

    }
}
export const getId = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params
        const dataReturn: any[] | undefined = await getIdDao(id)
        let returnExist = await statusActive(dataReturn)
        const ifExist = await cleanPasswordArray(returnExist)
        if(ifExist?.length===0)   return res.status(200).json({ data: [], message: AlertServices("Success", "Client dosen't find"), status: 200 });

        return res.status(200).json({ data: ifExist, status: 200 })
    } catch (error) {
        console.log("🚀 ~ file: UserController.ts:37 ~ getId ~ error:", error)

    }

}
export const post = async (req: Request, res: Response, next: NextFunction) => {


    try {
        const todo = req.headers.todo
        const data = ""
        let reqBody: IUser = req?.body
        let { email, password } = reqBody

        console.log("🚀 ~ file: UserController.ts:46 ~ post ~ reqBody:", reqBody)
        const dataReturn: any[] | undefined = await getDao(data)

        if (!(dataReturn?.length === 0)) console.log(dataReturn?.length === 0)
        const bcryptReturn: any = await bcryptCreatePassword(password)
        reqBody.password = bcryptReturn;

        const dataReturnS = await postDao(reqBody)

        let cleanPasswordUser: any = await cleanPassword(dataReturnS)

        if (!cleanPasswordUser) return res.status(500).json({ data: [], message: AlertServices("Error", "Error create"), status: 500 });

        return res.status(200).json({ data: cleanPasswordUser, message: AlertServices("Success", "Client Created"), status: 200 });


    } catch (error) {

    }


}
export const update = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params

        const todo = req.headers.todo
        const data = ""
        let reqBody: IUser = req?.body
        let { email, password } = reqBody
        const bcryptReturn: any = await bcryptCreatePassword(password)
        reqBody.password = bcryptReturn;
        const dataReturnS = await updateDao(reqBody, id)
        if (dataReturnS) {
            const dataReturnGet = await getAllAlways()
            return res.status(200).json({ data: dataReturnGet, message: AlertServices("Success", "Client Update"), status: 200 });
        }


    } catch (error) {
        console.log("🚀 ~ file: UserController.ts:84 ~ update ~ error:", error)

    }



}
export const deletes = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params
        const dataGetId = await getIdDao(id)
        const todos = await changeActive(dataGetId)
        const dataReturnS = await deletesDao(todos, id)
        if (dataReturnS) {
            const dataReturnGet = await getAllAlways()
            return res.status(200).json({ data: dataReturnGet, message: AlertServices("Success", "Client Update"), status: 200 });
        }


    } catch (error) {
        console.log("🚀 ~ file: UserController.ts:84 ~ update ~ error:", error)

    }
}



const getAllAlways = async () => {
    const data = ""
    const dataReturn: any[] | undefined = await getDao(data)
    let returnExist = await statusActive(dataReturn)
    return await cleanPasswordArray(returnExist)
}