import { today } from "../today.services";

export const forrmatDataForSendCV = async (
    dataObject: any | any[],
    dataFilter: any[],
    sectionNumber: number
) => {
    console.log("🚀 ~ dataObject:", dataObject)
    const isArrays = Array.isArray(dataObject)
    const dataRetunr: any | any[] = []
    const currentTime = await today();

    const dataResult = await dataFilter.filter((data: any) => {
        return data?.SectionId === sectionNumber;
    });

    if (isArrays) {

        const { ItemId, title_atribute, SectionId } = dataResult[0]

        for (let index = 0; index < dataObject.length; index++) {
            const element = dataObject[index];


            const objetReturn = {
                ItemId: (ItemId + index),
                SectionId: SectionId,
                position: element?.position || 1,
                title_atribute: title_atribute,
                atribute: element?.company || element?.title || ""|| element?.hard_skill||element?.soft_skill||element?.lenguaje||element?.disponibility||element?.descriptionPerson,
                detail_atribute: element?.job || element?.institute || "",
                information: element?.detail_atribute || "",
                status_item_section: true,
                startDate: element?.start || currentTime,
                endDate: element?.finish || currentTime,
                createdAt: element?.createdAt || currentTime,
                updatedAt: element?.updatedAt || currentTime,
            }

            dataRetunr.push(objetReturn)
        }

    }


    const dataR = await dataResult?.flatMap((item) => {

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

    });

    if (dataR[0] !== undefined) return dataR
    if (dataR[0] === undefined) return dataRetunr

};


