export const cvGetIdCVUSerObject = async (data: any) => {
    const { dataValues: { UserId } } = data
    return UserId
}