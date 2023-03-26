export interface IType {
  id: string;
  name: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface ICreateType {
  name: string;
}

export interface IUpdateType {
  name?: string;
}
