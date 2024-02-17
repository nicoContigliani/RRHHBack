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
exports.indexDataFormaterSendCV = void 0;
const objerctBeforeFormaterThing_services_1 = require("../objerctBeforeFormaterThing.services");
const cvGetDataItemFormat_services_1 = require("./cvGetDataItemFormat.services");
const cvTitleJoin_services_1 = require("./cvTitleJoin.services");
const forrmatDataForSendCV_service_1 = require("./forrmatDataForSendCV.service");
const indexDataFormaterSendCV = (data, dataGeneral) => __awaiter(void 0, void 0, void 0, function* () {
    try {
    }
    catch (error) {
        console.log("🚀 ~ indexDataFormaterSendCV ~ error:", error);
    }
    const { PersonalInformation, PersonTitle, PersonalDescription, Education, Experience, HardSkill, SoffSkill, Lenguage, Disponibility } = dataGeneral;
    const getItem = yield (0, cvGetDataItemFormat_services_1.cvGetDataItemFormatServices)(data);
    const dataReturnCVTitle = yield (0, cvTitleJoin_services_1.cvTitleJoinServices)(PersonTitle);
    let dataPersonObject = PersonalInformation[0];
    dataPersonObject.titleCV = dataReturnCVTitle;
    const dataFormaterPersonForSend = yield (0, forrmatDataForSendCV_service_1.forrmatDataForSendCV)(dataPersonObject, getItem, 1);
    console.log("🚀 ~ indexDataFormaterSendCV ~ dataFormaterPersonForSend:", dataFormaterPersonForSend);
    const PersonalDescriptionObject = yield (0, objerctBeforeFormaterThing_services_1.objerctBeforeFormaterThing)(PersonalDescription, "descriptionPerson");
    const dataFormaterPersonalDescriptionForSend = yield (0, forrmatDataForSendCV_service_1.forrmatDataForSendCV)(PersonalDescriptionObject, getItem, 2);
    const EducationObject = Education;
    const dataFormaterEducationForSend = yield (0, forrmatDataForSendCV_service_1.forrmatDataForSendCV)(EducationObject, getItem, 7);
    const ExperienceObject = Experience;
    const dataFormaterExperienceForSend = yield (0, forrmatDataForSendCV_service_1.forrmatDataForSendCV)(ExperienceObject, getItem, 3);
    const HardSkillObject = yield (0, objerctBeforeFormaterThing_services_1.objerctBeforeFormaterThing)(HardSkill, "hard_skill");
    const dataFormaterHardSkillForSend = yield (0, forrmatDataForSendCV_service_1.forrmatDataForSendCV)(HardSkillObject, getItem, 6);
    const SoftSkillObject = yield (0, objerctBeforeFormaterThing_services_1.objerctBeforeFormaterThing)(SoffSkill, "soft_skill");
    const dataFormaterSoffSkillForSend = yield (0, forrmatDataForSendCV_service_1.forrmatDataForSendCV)(SoftSkillObject, getItem, 5);
    const LenguageObject = yield (0, objerctBeforeFormaterThing_services_1.objerctBeforeFormaterThing)(Lenguage, "lenguaje");
    const dataFormaterLenguageForSend = yield (0, forrmatDataForSendCV_service_1.forrmatDataForSendCV)(LenguageObject, getItem, 8);
    const DisponibilityObject = yield (0, objerctBeforeFormaterThing_services_1.objerctBeforeFormaterThing)(Disponibility, "disponibility");
    const dataFormaterDisponibilityForSend = yield (0, forrmatDataForSendCV_service_1.forrmatDataForSendCV)(DisponibilityObject, getItem, 9);
    const todo = yield [
        ...dataFormaterPersonForSend,
        ...dataFormaterPersonalDescriptionForSend,
        ...dataFormaterEducationForSend,
        ...dataFormaterExperienceForSend,
        ...dataFormaterHardSkillForSend,
        ...dataFormaterSoffSkillForSend,
        ...dataFormaterLenguageForSend,
        ...dataFormaterDisponibilityForSend
    ];
    return todo;
});
exports.indexDataFormaterSendCV = indexDataFormaterSendCV;
