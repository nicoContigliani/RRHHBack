import { today } from "./today.services"

export const changeActive = async (data: any) => {

    // let {
    //     dataValues
    // } = data[0]
    // dataValues.status_user = false
    // dataValues.updatedAt = today()
    // return dataValues


    if (!data[0] || !data[0].dataValues) {
        throw new Error("Invalid data provided.");
    }

    const statusField = Object.keys(data[0].dataValues).find(key => key.startsWith("status_"));
    console.log("🚀 ~ file: chanegeOfActives.services.ts:18 ~ changeActive ~ statusField:", statusField,"******************")

    if (!statusField) {
        throw new Error("No status_ field found in data.");
    }

    const newDataValues = { ...data[0].dataValues };
    newDataValues[statusField] = false;
    newDataValues.updatedAt = await today();

    return newDataValues;

}