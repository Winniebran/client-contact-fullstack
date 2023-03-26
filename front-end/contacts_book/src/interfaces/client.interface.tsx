export interface IClient {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword?: string;
  cellPhone: string;
  image?: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
}

export interface IClientLogin {
  email: string;
  password: string;
}

export interface IClientRegister {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword?: string;
  cellPhone: string;
  image?: string;
}

