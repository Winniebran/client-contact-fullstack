export interface IClient {
  id: string;
  email: string;
  password: string;
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
