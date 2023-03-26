import { zodResolver } from "@hookform/resolvers/zod";
import { useContext } from "react";
import { useForm } from "react-hook-form";

import { ContactContext } from "../../../contexts/ContactContext";
import { IContact } from "../../../interfaces/contact.interface";
import { createContactSerializer } from "../../../serializers/ContactSerializers";
import { TypeContext } from "../../../contexts/TypeContext";

import { AiOutlineCloseCircle } from "react-icons/ai";
import { FiPhone, FiImage, FiUser, FiMail, FiFilter } from "react-icons/fi";

export const AddContactModal = () => {
  const { createContact, setShowAddContact } = useContext(ContactContext);
  const { type } = useContext(TypeContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IContact>({
    resolver: zodResolver(createContactSerializer),
  });

  return (
    <section>
      <div>
        <h2> Adicionar novo contato </h2>
        <button type="button" onClick={() => setShowAddContact(false)}>
          <AiOutlineCloseCircle />
        </button>
      </div>

      <form onSubmit={handleSubmit(createContact)}>
        <div>
          <label htmlFor="firstName">Nome</label>
          <FiUser />
          <input
            id="firstName"
            type="text"
            placeholder="Nome"
            {...register("firstName")}
          />
        </div>
        <span>{errors.firstName?.message}</span>

        <div>
          <label htmlFor="lastName">Sobrenome</label>
          <FiUser />
          <input
            id="lastName"
            type="text"
            placeholder="Sobrenome"
            {...register("lastName")}
          />
        </div>
        <span>{errors.lastName?.message}</span>

        <div>
          <label htmlFor="email">E-mail</label>
          <FiMail />
          <input
            id="email"
            type="email"
            placeholder="E-mail"
            {...register("email")}
          />
        </div>
        <span>{errors.email?.message}</span>

        <div>
          <label htmlFor="cellPhone">Celular</label>
          <FiPhone />
          <input
            id="cellPhone"
            type="tel"
            placeholder="Celular"
            {...register("cellPhone")}
          />
        </div>
        <span>{errors.cellPhone?.message}</span>

        <div>
          <label htmlFor="type">Tipo de contato</label>
          <FiFilter />
          <select id="type" {...register("type")}>
            <optgroup label="Selecione o tipo">
              {type?.map((type) => (
                <option key={type.id} value={type.id}>
                  {type.name}
                </option>
              ))}
            </optgroup>
          </select>
        </div>
        <span>{errors.type?.message}</span>

        <div>
          <label htmlFor="image">Imagem</label>
          <FiImage />
          <input
            id="image"
            type="text"
            placeholder="Imagem do Perfil"
            {...register("image")}
          />
        </div>
        <span>{errors.image?.message}</span>

        <button>Adicionar</button>
      </form>
    </section>
  );
};
