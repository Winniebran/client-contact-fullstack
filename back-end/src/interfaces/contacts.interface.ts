export interface IContactRequest {
  firstName: string;
  lastName: string;
  email: string;
  cellPhone: string;
  image: string;
}

export interface IContactResponse {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  cellPhone: string;
  image: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface IContactUpdate {
  firstName?: string;
  lastName?: string;
  email?: string;
  cellPhone?: string;
  image?: string;
}
