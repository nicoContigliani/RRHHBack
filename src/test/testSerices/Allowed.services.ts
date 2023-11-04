import { allowed } from '../../services/Allowed.services'

// import {ILicenceUser} from '../../Interfaces/ILicenceUser'

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


describe('allowed', () => {
    test('allowedObject', () => {
        expect(typeof dataValues === "object").toBeTruthy()
        expect(Object.keys(dataValues).some(item => item.endsWith("_Allowed"))).toBeTruthy()
    });
    test('The object has element _Allowed', () => {
        expect(Object.keys(dataValues).some(item => item.endsWith("_Allowed"))).toBeTruthy()

    })

    test('allowedArray ', () => {
        expect(Array.isArray(dataValuesArray)).toBeTruthy()
    });

    test('The object has element _Allowed in funtion ', async () => {
        const dataReturn: any = await allowed(dataValuesArray)
        expect(dataReturn).not.toBeNull()
        expect(Array.isArray(dataReturn)).toEqual(true)

    });




})




// {
//     LicenceId?: number|string,
//     AllId?: number|string,
//     LicenceAllJwt?: string,
//     LicenceAll_Allowed?: boolean,
//     createdAt?: Date,
//     updatedAt?: Date
// }


//isObject 
// dataValues:{
//     LicenceId?: number|string,
//     AllId?: number|string,
//     LicenceAllJwt?: string,
//     LicenceAll_Allowed?: boolean,
//     createdAt?: Date,
//     updatedAt?: Date
// }