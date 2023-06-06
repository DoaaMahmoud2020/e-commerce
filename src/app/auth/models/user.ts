export interface userModel {
userName:string;
password:string;
roleId:roles;
}

export enum roles {
  user=1,
  admin=2
}

export interface userPermission {
  roleId: number,
  permissions: string[]
}
