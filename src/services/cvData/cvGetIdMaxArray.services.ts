export const cvGetIdMaxArray = async (data: any) => {
    return await (data.map((item: any) => {
        const {
            dataValues: { id }
        } = item
        return id
    })).slice().sort((a: any, b: any) => a - b).reverse()[0]
}