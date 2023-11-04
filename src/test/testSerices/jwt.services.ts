import { jwtGenerateToken } from '../../services/jwt.services'
describe('jwt.services.ts', () => {

    type ILicenceUser = {
        LicenseId?: number | string,
        AllId?: number | string,
        LicenceAllJwt?: string,
        LicenceAll_Allowed?: boolean,
        createdAt?: Date,
        updatedAt?: Date
    }

    type ILicenceUserArray = [
        { dataValues: ILicenceUser }
    ]

    const dataValues: ILicenceUser = {
        LicenseId: 1,
        AllId: 1,
        LicenceAllJwt: "algo",
        LicenceAll_Allowed: true,
        createdAt: new Date("06/03/1988"),
        updatedAt: new Date("06/03/1988")
    }
    const dataValuesArray = [{ dataValues }]









    test('jwtGenerateToken ', async () => {
        const todo: any = await jwtGenerateToken(dataValues)
        const expectReturn = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJMaWNlbnNlSWQiOjEsIkFsbElkIjoxLCJMaWNlbmNlQWxsSnd0IjoiYWxnbyIsIkxpY2VuY2VBbGxfQWxsb3dlZCI6dHJ1ZSwiY3JlYXRlZEF0IjoiMTk4OC0wNi0wM1QwMzowMDowMC4wMDBaIiwidXBkYXRlZEF0IjoiMTk4OC0wNi0wM1QwMzowMDowMC4wMDBaIiwiaWF0IjoxNjk5MTQwNjUxLCJleHAiOjE3MzUxNDA2NTF9.rQQ_V7ng9NHfyTpxhxH8BDG0Fyu9Cr0Vhs3oHWhFn9Q"
        console.log("🚀 ~ file: jwt.services.ts:37 ~ test ~ todo:", todo)

        expect(todo).not.toBeNull()
        expect(todo).not.toBeUndefined()
        expect(typeof todo === "string").toBeTruthy()
        // expect(todo).toEqual(expectReturn) //revisar por que trae codigos diferentes
    })


})
