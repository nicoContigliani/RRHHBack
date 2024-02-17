export const dtoArray = (data: any) => {
    return data.sort((a: any, b: any) => {
        return a.dataValues.id - b.dataValues.id;
    });

}


