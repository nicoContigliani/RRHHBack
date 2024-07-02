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
exports.formaterGet = void 0;
const formaterGet = (data) => __awaiter(void 0, void 0, void 0, function* () {
    // const cleanedData = data.map((item: any, index: any) => {
    //     if (index === 1) {
    //         const { _parsers, fields, _types, ...rest } = item;
    //         return rest;
    //     }
    //     return item;
    // });
    // const dataFoarmater = cleanedData[0]?.map((item: any) => {
    //     // console.log("🚀 ~ dataFoarmater ~ item:", item)
    //     let { InterviewResponsibles, InterviewUsers } = item
    //     console.log("🚀 ~ dataFoarmater ~ InterviewResponsibles:", typeof InterviewResponsibles, Array.isArray(InterviewResponsibles))
    // })
    const dataR = data.map((item) => {
        return item[0];
    });
    // // console.log("*********", cleanedData[0], "vamos viendo el resultado");
    // return cleanedData[0]
    return data[0];
});
exports.formaterGet = formaterGet;
