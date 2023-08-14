import bcrypt from 'bcrypt';


export const bcryptCreatePassword = async (passwords: string | any) => {
    return await bcrypt.hash(passwords, 10)

}
export const bcryptComparePassword = async (password: string, passwordU: string) => {
    return await bcrypt.compare(password, passwordU)
}
