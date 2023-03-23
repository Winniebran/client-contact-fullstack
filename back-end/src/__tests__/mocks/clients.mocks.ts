import { IClientLogin, IClientRequest } from "../../interfaces";

export const mockClient: IClientRequest = {
  firstName: "Cliente",
  lastName: "One",
  email: "cliente1@mail.com",
  password: "12345Aa@",
  cellPhone: "(71) 99999-9999",
  image:
    "http://s2.glbimg.com/jsaPuF7nO23vRxQkuJ_V3WgouKA=/e.glbimg.com/og/ed/f/original/2014/06/10/461777879.jpg",
};

export const mockClientLogin: IClientLogin = {
  email: "cliente1@mail.com",
  password: "12345Aa@",
};
