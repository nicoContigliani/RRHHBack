export const objerctBeforeFormaterThing = ((data: any, key: any) => {
    return data.map((item: any) => {
        return { [key]: item }
    })
})