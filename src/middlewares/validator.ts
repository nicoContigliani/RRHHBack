import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';


export const Validator = (req: {
    method: string; body: { token: any; }; query: { token: any; }; header: (arg0: string) => any; headers: { authorization: string; };
}, res: any, next: any) => {
    const token: any = req?.body?.token || req?.query?.token || req.header('auth-token') || req.headers?.authorization?.split(" ")[1];
    const tokenProcess: any | string = process.env.JWT_SIGNATURE_GENERAL
    if (!token) {
        return res.status(403).send("Error 403 -  A token is required for authentication ");
    }

    try {
        const tokenValido: any | undefined | string = jwt.verify(token, process.env.JWT_SIGNATURE_GENERAL || 'pepito123');
        
        if (req.method === 'GET') {
            // La solicitud viene de POST
            console.log("🚀 ~ file: validator.ts:16 ~ tokenValido:", tokenValido,"***************************")
            console.log("get")
            

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