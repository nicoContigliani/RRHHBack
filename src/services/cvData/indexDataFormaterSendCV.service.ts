import { objerctBeforeFormaterThing } from "../objerctBeforeFormaterThing.services"
import { cvGetDataItemFormatServices } from "./cvGetDataItemFormat.services"
import { cvTitleJoinServices } from "./cvTitleJoin.services"
import { forrmatDataForSendCV } from "./forrmatDataForSendCV.service"

export const indexDataFormaterSendCV = async (data: any | any[], dataGeneral: any) => {


try {
    
} catch (error) {
    console.log("🚀 ~ indexDataFormaterSendCV ~ error:", error)
    
}
    const {
        PersonalInformation,
        PersonTitle,
        PersonalDescription,
        Education,
        Experience,
        HardSkill,
        SoffSkill,
        Lenguage,
        Disponibility
    } = dataGeneral


    const getItem: any = await cvGetDataItemFormatServices(data)




    const dataReturnCVTitle = await cvTitleJoinServices(PersonTitle)

    let dataPersonObject = PersonalInformation[0]
    dataPersonObject.titleCV = dataReturnCVTitle


    const dataFormaterPersonForSend = await forrmatDataForSendCV(dataPersonObject, getItem, 1)
    console.log("🚀 ~ indexDataFormaterSendCV ~ dataFormaterPersonForSend:", dataFormaterPersonForSend)

    const PersonalDescriptionObject = await objerctBeforeFormaterThing(PersonalDescription, "descriptionPerson")
    const dataFormaterPersonalDescriptionForSend = await forrmatDataForSendCV(PersonalDescriptionObject, getItem, 2)

    const EducationObject = Education
    const dataFormaterEducationForSend = await forrmatDataForSendCV(EducationObject, getItem, 7)

    const ExperienceObject = Experience
    const dataFormaterExperienceForSend = await forrmatDataForSendCV(ExperienceObject, getItem, 3)


    const HardSkillObject = await objerctBeforeFormaterThing(HardSkill, "hard_skill")
    const dataFormaterHardSkillForSend = await forrmatDataForSendCV(HardSkillObject, getItem, 6)


    const SoftSkillObject = await objerctBeforeFormaterThing(SoffSkill, "soft_skill")
    const dataFormaterSoffSkillForSend = await forrmatDataForSendCV(SoftSkillObject, getItem, 5)

    const LenguageObject = await objerctBeforeFormaterThing(Lenguage, "lenguaje")
    const dataFormaterLenguageForSend = await forrmatDataForSendCV(LenguageObject, getItem, 8)

    const DisponibilityObject = await objerctBeforeFormaterThing(Disponibility, "disponibility")
    const dataFormaterDisponibilityForSend = await forrmatDataForSendCV(DisponibilityObject, getItem, 9)


    const todo = await [
        ...dataFormaterPersonForSend,
        ...dataFormaterPersonalDescriptionForSend,
        ...dataFormaterEducationForSend,
        ...dataFormaterExperienceForSend,
        ...dataFormaterHardSkillForSend,
        ...dataFormaterSoffSkillForSend,
        ...dataFormaterLenguageForSend,
        ...dataFormaterDisponibilityForSend
    ]
    return todo
}