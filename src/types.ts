export interface IUser {
  Id: number,
  FirstName: string,
  LastName: string,
  Email: string,
  AuthToken?: string,
  CreatedAt: Date
}
