import { bcryptComparePassword, bcryptCreatePassword } from "../../services/bcrypt.services";

describe('Bcrypt of the group', () => {
    const passwords = "123456789"
    test('password is string ', () => {
        expect(typeof (passwords) === "string").toBeTruthy()
    });

    test('bcryptCreatePassword', async () => {
        const dataR = await bcryptCreatePassword(passwords)
        expect(dataR.startsWith("$")).toBeTruthy()
    })

});


// describe('bcryptComparePassword', () => {
//     const passwords = "123456789"
//     test('password is string ', () => {
//         expect(typeof (passwords) === "string").toBeTruthy()
//     });

//     test('bcryptCreatePassword', async () => {
//         const passwordU="$2b$10$umegK6IIqnv7fvc5BcadruWS2uwz5ywg7lhzBPadJ4g9v0X0JnNK"
//         const dataR = await bcryptComparePassword(passwords,passwords)
//         console.log("🚀 ~ file: bcrypt.services.ts:26 ~ test ~ dataR:", dataR)
//     })

// });