"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const UserDto_1 = require("../../Apiservices/User/UserDto");
describe('', () => {
    const dataValues = {
        LicenseId: 1,
        AllId: 1,
        password: "$2b$10$umegK6IIqnv7fvc5BcadruWS2uwz5ywg7lhzBPadJ4g9v0X0JnNK",
        LicenceAllJwt: "algo",
        LicenceAll_Allowed: true,
        createdAt: new Date("06/03/1988"),
        updatedAt: new Date("06/03/1988")
    };
    const dataValuesArray = [{ dataValues }];
    test('Exist Password? ', () => {
        expect(dataValues.password).toBeTruthy();
    });
    test('PasswordCleanFuntion', () => __awaiter(void 0, void 0, void 0, function* () {
        expect(dataValues.password).toBeTruthy();
        const dataClean = yield (0, UserDto_1.cleanPasswordArray)(dataValuesArray);
        expect(dataValues.password).toBeFalsy();
    }));
});
