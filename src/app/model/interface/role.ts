export interface IRole{
    id : number,
    firstName:string,
    lastName:string,
    bloodGroup:string
}
export interface IDesignation{
    email:string,
    phone:string
}
export interface APIResponseModel{
    total:number,
    skip:number,
    users:any,
    data:any,
    message:string,
    result:boolean,
    id:Number;
    name:string

}