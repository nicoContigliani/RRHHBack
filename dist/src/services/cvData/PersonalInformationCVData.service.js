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
exports.PersonalInformationCVDataService = void 0;
const today_services_1 = require("../today.services");
const PersonalInformationCVDataService = (dataObject, dataFilter, sectionNumber) => __awaiter(void 0, void 0, void 0, function* () {
    const currentTime = yield (0, today_services_1.today)();
    const dataResult = yield dataFilter.filter((data) => {
        return (data === null || data === void 0 ? void 0 : data.SectionId) === sectionNumber;
    });
    return yield dataResult.map((item) => {
        const isArrays = Array.isArray(dataObject);
        const { ItemId, title_atribute, SectionId } = item;
        const dataR = [];
        let value, detail, start, finish;
        if (isArrays) {
            console.log("es array");
            switch (title_atribute) {
                case 'education':
                    return dataObject === null || dataObject === void 0 ? void 0 : dataObject.map((element) => {
                        const dataS = {
                            ItemId: item.ItemId,
                            SectionId: SectionId,
                            position: item.position || null,
                            title_atribute: title_atribute,
                            atribute: (element === null || element === void 0 ? void 0 : element.title) || "",
                            detail_atribute: (element === null || element === void 0 ? void 0 : element.institute) || "",
                            status_item_section: true,
                            startDate: element.start || currentTime,
                            endDate: element.finish || currentTime,
                            createdAt: currentTime,
                            updatedAt: currentTime,
                        };
                    });
            }
        }
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
                    start = dataObject.start || currentTime;
                    finish = dataObject.finish || currentTime;
                    break;
                // Add cases for other attributes as needed
                default:
                    value = "";
                    detail = "";
                    start = currentTime;
                    finish = currentTime;
            }
            return {
                ItemId: item.ItemId,
                SectionId: SectionId,
                position: item.position || null,
                title_atribute: title_atribute,
                atribute: value || "",
                detail_atribute: detail || "",
                status_item_section: true,
                startDate: start || currentTime,
                endDate: finish || currentTime,
                createdAt: currentTime,
                updatedAt: currentTime,
            };
        }
    });
});
exports.PersonalInformationCVDataService = PersonalInformationCVDataService;
