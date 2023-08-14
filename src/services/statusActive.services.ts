export const statusActive = async (data: any) => {
    return data.filter((item: { dataValues: any; }) => {
        let { dataValues } = item;
        return Object.keys(dataValues).some((key) => {
            return key.startsWith("status_") && dataValues[key] === true;
        });
    });
}