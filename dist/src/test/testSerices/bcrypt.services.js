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
const bcrypt_services_1 = require("../../services/bcrypt.services");
describe('Bcrypt of the group', () => {
    const passwords = "123456789";
    test('password is string ', () => {
        expect(typeof (passwords) === "string").toBeTruthy();
    });
    test('bcryptCreatePassword', () => __awaiter(void 0, void 0, void 0, function* () {
        const dataR = yield (0, bcrypt_services_1.bcryptCreatePassword)(passwords);
        expect(dataR.startsWith("$")).toBeTruthy();
    }));
});
// describe('bcryptComparePassword', () => {
//     const passwords = "123456789"
//     test('password is string ', () => {
//         expect(typeof (passwords) === "string").toBeTruthy()
//     });
//     test('bcryptCreatePassword', async () => {
//         const passwordU="$2b$10$umegK6IIqnv7fvc5BcadruWS2uwz5ywg7lhzBPadJ4g9v0X0JnNK"
//         const dataR = await bcryptComparePassword(passwords,passwords)
//         console.log("🚀 ~ file: bcrypt.services.ts:26 ~ test ~ dataR:", dataR)
//     })
// });
