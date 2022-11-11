export interface UserToken{
  //  success:boolean;
    token: string;
  //  refreshToken: string;
  //  role: string;
}
export class UserLogin{
    username!: string;
    password!: string;
}
export interface UserValid {
    id: string;
    email: string;
    name: string;
    username: string;
    password: string;
    roles: [
        {id: string},
        {name: string}
    ];
    isActive: boolean;
    createdOn: string;
    updatedOn: string;
}
