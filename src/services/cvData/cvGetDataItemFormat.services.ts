export const cvGetDataItemFormatServices = async (data: any) => {
    return await data?.map((itemElement: any) => {
        const { dataValues: { id: ItemId, itemTitle: title_atribute } } = itemElement

        if (100 <= ItemId && ItemId < 200) return { ItemId, title_atribute, SectionId: 1 }
        if (200 <= ItemId && ItemId < 300) return { ItemId, title_atribute, SectionId: 2 }
        if (300 <= ItemId && ItemId < 400) return { ItemId, title_atribute, SectionId: 3 }
        if (400 <= ItemId && ItemId < 500) return { ItemId, title_atribute, SectionId: 4 }
        if (500 <= ItemId && ItemId < 600) return { ItemId, title_atribute, SectionId: 5 }
        if (600 <= ItemId && ItemId < 700) return { ItemId, title_atribute, SectionId: 6 }
        if (700 <= ItemId && ItemId < 800) return { ItemId, title_atribute, SectionId: 7 }
        if (800 <= ItemId && ItemId < 900) return { ItemId, title_atribute, SectionId: 8 }
        if (900 <= ItemId && ItemId < 1000) return { ItemId, title_atribute, SectionId: 9 }


    })

}