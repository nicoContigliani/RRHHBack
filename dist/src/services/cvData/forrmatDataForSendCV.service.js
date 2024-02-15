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
exports.forrmatDataForSendCV = void 0;
const today_services_1 = require("../today.services");
const forrmatDataForSendCV = (dataObject, dataFilter, sectionNumber) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("🚀 ~ dataObject:", dataObject);
    const isArrays = Array.isArray(dataObject);
    const dataRetunr = [];
    const currentTime = yield (0, today_services_1.today)();
    const dataResult = yield dataFilter.filter((data) => {
        return (data === null || data === void 0 ? void 0 : data.SectionId) === sectionNumber;
    });
    if (isArrays) {
        const { ItemId, title_atribute, SectionId } = dataResult[0];
        for (let index = 0; index < dataObject.length; index++) {
            const element = dataObject[index];
            const objetReturn = {
                ItemId: (ItemId + index),
                SectionId: SectionId,
                position: (element === null || element === void 0 ? void 0 : element.position) || 1,
                title_atribute: title_atribute,
                atribute: (element === null || element === void 0 ? void 0 : element.company) || (element === null || element === void 0 ? void 0 : element.title) || "" || (element === null || element === void 0 ? void 0 : element.hard_skill) || (element === null || element === void 0 ? void 0 : element.soft_skill) || (element === null || element === void 0 ? void 0 : element.lenguaje) || (element === null || element === void 0 ? void 0 : element.disponibility) || (element === null || element === void 0 ? void 0 : element.descriptionPerson),
                detail_atribute: (element === null || element === void 0 ? void 0 : element.job) || (element === null || element === void 0 ? void 0 : element.institute) || "",
                information: (element === null || element === void 0 ? void 0 : element.detail_atribute) || "",
                status_item_section: true,
                startDate: (element === null || element === void 0 ? void 0 : element.start) || currentTime,
                endDate: (element === null || element === void 0 ? void 0 : element.finish) || currentTime,
                createdAt: (element === null || element === void 0 ? void 0 : element.createdAt) || currentTime,
                updatedAt: (element === null || element === void 0 ? void 0 : element.updatedAt) || currentTime,
            };
            dataRetunr.push(objetReturn);
        }
    }
    const dataR = yield (dataResult === null || dataResult === void 0 ? void 0 : dataResult.flatMap((item) => {
        const { ItemId, title_atribute, SectionId } = item;
        let value, detail, information, start, finish;
        if (!isArrays) {
            switch (title_atribute) {
                case 'fullname':
                case 'email':
                case 'phone':
                case 'birthday':
                case 'linkedin':
                case 'repository':
                case 'folderprofile':
                case 'titleCV':
                    value = dataObject[title_atribute];
                    break;
                case 'education':
                    // Handles single education object as before
                    value = dataObject.title || "";
                    detail = dataObject.institute || "";
                    information = dataObject.information || "";
                    start = dataObject.start || currentTime;
                    finish = dataObject.finish || currentTime;
                    break;
                case 'experience_work':
                    // Handles single education object as before
                    value = dataObject.company || "";
                    detail = dataObject.job || "";
                    information = dataObject.detail_atribute;
                    start = dataObject.start || currentTime;
                    finish = dataObject.finish || currentTime;
                    break;
                // Add cases for other attributes as needed
                default:
                    value = "";
                    detail = "";
                    information = "";
                    start = currentTime;
                    finish = currentTime;
            }
            return {
                ItemId: item.ItemId,
                SectionId: SectionId,
                position: item.position || 1,
                title_atribute: title_atribute,
                atribute: value || "",
                detail_atribute: detail || "",
                information: item.information || "",
                status_item_section: true,
                startDate: start || currentTime,
                endDate: finish || currentTime,
                createdAt: currentTime,
                updatedAt: currentTime,
            };
        }
    }));
    if (dataR[0] !== undefined)
        return dataR;
    if (dataR[0] === undefined)
        return dataRetunr;
});
exports.forrmatDataForSendCV = forrmatDataForSendCV;
