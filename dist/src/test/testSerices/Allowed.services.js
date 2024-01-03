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
const Allowed_services_1 = require("../../services/Allowed.services");
const dataValues = {
    LicenseId: 1,
    AllId: 1,
    LicenceAllJwt: "algo",
    LicenceAll_Allowed: true,
    createdAt: new Date("06/03/1988"),
    updatedAt: new Date("06/03/1988")
};
const dataValuesArray = [{ dataValues }];
describe('allowed', () => {
    test('allowedObject', () => {
        expect(typeof dataValues === "object").toBeTruthy();
        expect(Object.keys(dataValues).some(item => item.endsWith("_Allowed"))).toBeTruthy();
    });
    test('The object has element _Allowed', () => {
        expect(Object.keys(dataValues).some(item => item.endsWith("_Allowed"))).toBeTruthy();
    });
    test('allowedArray ', () => {
        expect(Array.isArray(dataValuesArray)).toBeTruthy();
    });
    test('The object has element _Allowed in funtion ', () => __awaiter(void 0, void 0, void 0, function* () {
        const dataReturn = yield (0, Allowed_services_1.allowed)(dataValuesArray);
        expect(dataReturn).not.toBeNull();
        expect(Array.isArray(dataReturn)).toEqual(true);
    }));
});
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
