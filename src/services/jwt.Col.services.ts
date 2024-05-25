import jwt from 'jsonwebtoken';
import 'dotenv/config'

export const jwtGenerateTokenCol = async (data: any) => {
    try {
        let secretKey: any = process.env.JWT_COL || "simon";

        // if (typeof data !== 'object' || data === null || Array.isArray(data)) {
        //     throw new Error('Invalid payload: Expected an object.');
        // }

        const token = jwt.sign({data}, secretKey, { expiresIn: '10000h' });

        return token;
    } catch (error) {
        console.log("🚀 ~ jwtGenerateTokenCol ~ error:", error);
        throw error; // Re-throw the error to ensure it can be handled upstream
    }
};

export const jwtCompareToken = async () => {

}