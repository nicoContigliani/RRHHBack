export const personDataCVExist = async (data: any[] | any, datafilter: any) => {
    const dataR = data.find((item: any) => {
        const { dataValues: { title } } = item
        return title === datafilter; 
    }
    )
}