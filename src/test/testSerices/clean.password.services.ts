import { cleanPasswordArray } from '../../Apiservices/User/UserDto'
import {cleanPassword} from'../../services/clean.password.services'

describe('', () => {
    type ILicenceUser = {
        LicenseId?: number | string,
        AllId?: number | string,
        password?: string,
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
        password: "$2b$10$umegK6IIqnv7fvc5BcadruWS2uwz5ywg7lhzBPadJ4g9v0X0JnNK",
        LicenceAllJwt: "algo",
        LicenceAll_Allowed: true,
        createdAt: new Date("06/03/1988"),
        updatedAt: new Date("06/03/1988")
    }
    const dataValuesArray = [{ dataValues }]


    test('Exist Password? ', () => {
        expect(dataValues.password).toBeTruthy()
    })
    test('PasswordCleanFuntion', async() => {
        expect(dataValues.password).toBeTruthy()
        const dataClean =await cleanPasswordArray(dataValuesArray)
        expect(dataValues.password).toBeFalsy()
    })

})
