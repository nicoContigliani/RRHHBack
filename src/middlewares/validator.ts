import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { formaterDataAuthServices } from '../services/formaterDataAuth.services';


export const Validator = (req: {
    [x: string]: any;
    originalUrl: any;
    url(arg0: string, url: any): unknown;
    path(arg0: string, path: any): unknown;
    method: string; body: { token: any; }; query: { token: any; }; header: (arg0: string) => any; headers: { authorization: string; };
}, res: any, next: any) => {
    const token: any = req?.body?.token || req?.query?.token || req.header('auth-token') || req.headers?.authorization?.split(" ")[1];
    const tokenProcess: any | string = process.env.JWT_SIGNATURE_GENERAL
    if (!token) {
        return res.status(403).send("Error 403 -  A token is required for authentication ");
    }

    try {
        const tokenValido: any | undefined | string = jwt.verify(token, process.env.JWT_SIGNATURE_GENERAL || 'pepito123');
        console.log("🚀 ~ tokenValido:19**************************", tokenValido)
        const {id,
            email,
            fullname,
            phone,
            birthday,
            Score,
            status_user,
            name_role,
            name_permission,
            conditions,
            code,
            creates,
            reads,
            updates,
            deletes,
            admins,
            exports,
            imports,
            approve,
            generate_reports,
            configure,
            restrict,
            manage_users,
            manage_roles,
            audit,
            name_branch,
            branch_long,
            branch_lat,
            branch_score,
            company,
            companyPhone,
            companyEmail,
            urlCompany,
            status_company,
            shift_name,
            start_time,
            end_time,
            status_shift,} = formaterDataAuthServices(tokenValido)



        const rutaActual: string | undefined = req.originalUrl;
        console.log("🚀 ~ file: validator.ts:22 ~ rutaActual:", rutaActual)



        if (req.method === 'GET') {
            // La solicitud viene de POST
            console.log("get")
            console.log(req.params)


        } else {
            // La solicitud viene de otro método
            console.log("****************************toma por mirón*******************************")
        }

        next();
    } catch (error) {
        res.status(400).json({
            error: 'token no valido'
        })
    }


    return true
}