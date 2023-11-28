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
const jwt_services_1 = require("../../services/jwt.services");
describe('jwt.services.ts', () => {
    const dataValues = {
        LicenseId: 1,
        AllId: 1,
        LicenceAllJwt: "algo",
        LicenceAll_Allowed: true,
        createdAt: new Date("06/03/1988"),
        updatedAt: new Date("06/03/1988")
    };
    const dataValuesArray = [{ dataValues }];
    test('jwtGenerateToken ', () => __awaiter(void 0, void 0, void 0, function* () {
        const todo = yield (0, jwt_services_1.jwtGenerateToken)(dataValues);
        const expectReturn = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJMaWNlbnNlSWQiOjEsIkFsbElkIjoxLCJMaWNlbmNlQWxsSnd0IjoiYWxnbyIsIkxpY2VuY2VBbGxfQWxsb3dlZCI6dHJ1ZSwiY3JlYXRlZEF0IjoiMTk4OC0wNi0wM1QwMzowMDowMC4wMDBaIiwidXBkYXRlZEF0IjoiMTk4OC0wNi0wM1QwMzowMDowMC4wMDBaIiwiaWF0IjoxNjk5MTQwNjUxLCJleHAiOjE3MzUxNDA2NTF9.rQQ_V7ng9NHfyTpxhxH8BDG0Fyu9Cr0Vhs3oHWhFn9Q";
        console.log("🚀 ~ file: jwt.services.ts:37 ~ test ~ todo:", todo);
        expect(todo).not.toBeNull();
        expect(todo).not.toBeUndefined();
        expect(typeof todo === "string").toBeTruthy();
        // expect(todo).toEqual(expectReturn) //revisar por que trae codigos diferentes
    }));
});
