import { NextFunction, Request, Response } from 'express';
import { getAllColumns, getDao, getDaoFilter, postDao } from './rootsDao';
import {
    postDao as postDaoRollUser
}
    from '../RollUser/RollUserDao';

import { ILogin } from '../../Interfaces/ILogin';
import { AlertServices } from '../../services/alert.services';
import { bcryptComparePassword, bcryptCreatePassword } from '../../services/bcrypt.services';
import { UserPasswordReturnToCompare } from '../../services/UserPasswordReturnToCompare.services';
import { cleanPassword } from '../../services/clean.password.services';
import { jwtGenerateToken } from '../../services/jwt.services';
import { formaterDataAuth, rootFormateDtoo } from './rootsDto';
import { statusActive } from '../../services/statusActive.services';
import SigInValidationSchema from '../../ValidationSchema/SigInValidationSchema';
import { today } from '../../services/today.services';
import { jwtGenerateTokenCol } from '../../services/jwt.Col.services';
// import { getIdDao } from '../User/userDao';
const errorResponse = { data: [], message: AlertServices("Error", "Error create"), status: 500 };


export const signIn = async (req: Request, res: Response, next: NextFunction) => {
    console.log("toma por miron")


    const {
        email,
        password,
        fullname,
        phone,
        birthday,
        Score,
        status_user
    } = req?.body
    let dataReturn: any | undefined = await getDaoFilter(email)
    if (dataReturn) return res.status(200).json({ data: [], message: AlertServices("Error", "There is Client"), status: 500 });
    let { error, value } = SigInValidationSchema.validate(req.body);
    console.log("🚀 ~ signIn ~ value:", value)

    try {
        const currentTime = await today()
        const bcryptReturn: any = await bcryptCreatePassword(password)

        value.createdAt = currentTime
        value.updatedAt = currentTime
        value.password = bcryptReturn;
        if (error) console.error(error.details)
        if (error) return res.status(500).json(errorResponse);
        const dataReturnS = await postDao(value)
        if (dataReturnS) {
            let { dataValues: { id, status_user } } = dataReturnS
            try {
                const todo = { UserId: id, RoleId: 2, status_role_user: status_user }
                if (id && status_user) await postDaoRollUser(todo)
            } catch (error) {
                console.log("🚀 ~ error:", error)
            }
            let cleanPasswordUser: any = await cleanPassword(dataReturnS)

            if (!cleanPasswordUser) return res.status(500).json({ data: [], message: AlertServices("Error", "Error create"), status: 500 });

            const JTWToken: any = await jwtGenerateToken(cleanPasswordUser)

            if (!JTWToken) return res.status(500).json({ data: [], message: AlertServices("Error", "Error JTWToken "), status: 500 });
            if (JTWToken) return res.status(200).json({ data: [{ token: JTWToken, login: true, User: cleanPasswordUser }], message: AlertServices("Success", "Client True"), status: 200 });

        }

    } catch (error) {
        console.log("Error in createTypeTest:", error);
        return res.status(500).json({ data: [], message: AlertServices("Error", "Internal Server Error"), status: 500 });

    }







}
export const login = async (req: Request, res: Response, next: NextFunction) => {
    try {
        let reqBody: ILogin = req?.body
        let {
            email,
            password
        } = reqBody



        if (!reqBody?.password) return res.status(500).json({ data: [], message: AlertServices("Error", "Error Password dosen't Exist"), status: 500 });
        if (!reqBody?.email) return res.status(500).json({ data: [], message: AlertServices("Error", "Error Password dosen't Exist"), status: 500 });

        let dataReturn: any | undefined = await getDaoFilter(email)

        if (!dataReturn) return res.status(200).json({ data: [], message: AlertServices("Success", "There aren't Clients"), status: 200 });

        const passwordU = await UserPasswordReturnToCompare(dataReturn)
        const passworValidator = await bcryptComparePassword(password, passwordU)

        if (!passworValidator) return res.status(500).json({ data: [], message: AlertServices("Error", "Error Password "), status: 500 });

        const dataCleanPasswordUser: any = await cleanPassword(dataReturn)
        console.log("🚀 ~ file: authController.ts:39 ~ login ~ dataCleanPasswordUser:", dataCleanPasswordUser)
        let dataCleanUser: any | undefined | any[] | {} = formaterDataAuth(dataCleanPasswordUser)
        let JTWToken: any = await jwtGenerateToken(dataCleanPasswordUser)

        if (!JTWToken) return res.status(500).json({ data: [], message: AlertServices("Error", "Error JTWToken "), status: 500 });
        if (JTWToken) return res.status(200).json({ data: [{ token: JTWToken, login: true, User: dataCleanUser, UserE: dataCleanPasswordUser }], message: AlertServices("Success", "Client True"), status: 200 });

    } catch (error) {
        console.log("🚀 ~ file: authController.ts:11 ~ login ~ error:", error)

    }
}
export const get = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const dataReturnAsync = async () => {
            let dataReturn: any | undefined = await getAllColumns()
            delete dataReturn.fields
            delete dataReturn.Result
            let todo = await rootFormateDtoo(dataReturn[0])
            let dataR = await jwtGenerateTokenCol(todo)

            const licentia = {
                start_licencie: "hoy",
                finish_licencie: "mañana",
                volumen_key: "123-123-123",
                mac_asociate: "cafe-cafe-cafe-cafe"
            }

            const JTWToken: any = await jwtGenerateToken({})

            if (dataReturn) return res.status(200).json({ data: [{ token: JTWToken, login: true, col_structure: todo }], message: AlertServices("Success", "Client True"), status: 200 });
            if (!dataReturn) return res.status(500).json({ data: [], message: AlertServices("Error", "Error JTWToken "), status: 500 });

        }
        dataReturnAsync()

    } catch (error) {

    }
}