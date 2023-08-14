export interface IUser {
    id?:string|number,
    email?:string,
    password?:string,
    fullname?:string,
    phone?:string,
    birthday?:Date,
    Score?:number,
    status_user?:boolean,
    createdAt?:Date,
    updatedAt?:Date
}