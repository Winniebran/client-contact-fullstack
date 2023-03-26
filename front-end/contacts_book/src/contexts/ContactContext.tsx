import { Children, createContext, useState } from "react";
import { IContact } from "../interfaces/contact.interface";
import { IChildren, IContactContext } from "../interfaces/contexts.interface";

export const ContactContext = createContext({} as IContactContext);

export const ContactProvider = ({ children }: IChildren) => {
    const [contact, setContact] = useState<IContact | null>(null);

    

    return (
        <ContactContext.Provider value={{ contact, setContact}}>
            {children}
        </ContactContext.Provider>
      );
}