
export const deletePasswordArray = async (data: any[]) => {
    return data.filter(itemObject => {
        let {
            dataValues
        } = itemObject
        return (dataValues?.status_All !== "desactive") ? delete dataValues?.password : ""
    })
}

export const cleanPasswordArray = async (data: any[] | undefined) => {
    const returnCleanPassword = data?.map(item => {
        let {
            dataValues
        } = item
        delete dataValues?.password
        return item
    })
    return returnCleanPassword
}