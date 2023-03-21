export interface IClientRequest {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  cellPhone: string;
  image: string;
}

export interface IClientResponse {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  cellPhone: string;
  image: string;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface IClientLogin {
  email: string;
  password: string;
}

export interface IClientUpdate {
  firstName?: string;
  lastName?: string;
  email?: string;
  password?: string;
  cellPhone?: string;
  image?: string;
}
