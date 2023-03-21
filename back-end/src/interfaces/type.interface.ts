export interface ITypeRequest {
  name: string;
}

export interface ITypeResponse {
  id: string;
  name: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface ITypeUpdate {
  name?: string;
}
