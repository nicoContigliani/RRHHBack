export const cvGetIdOfNewCV = async (data: any) => {
    const { dataValues: { id } } = data
    console.log("🚀 ~ cvGetIdOfNewCV ~ id:", id)
    return id
}