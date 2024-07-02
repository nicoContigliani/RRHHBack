export const formaterGet = async (data: any) => {
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


    const dataR = data.map((item: any) => {
        return item[0]
    })





    // // console.log("*********", cleanedData[0], "vamos viendo el resultado");
    // return cleanedData[0]




    return data[0]


}