import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
} from "typeorm";
import { Client } from "./client.entity";
import { Type } from "./type.entity";

@Entity("contacts")
export class Contacts {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ length: 25 })
  firstName: string;

  @Column({ length: 50 })
  lastName: string;

  @Column({ length: 50, unique: true })
  email: string;

  @Column({ length: 20, unique: true })
  cellPhone: string;

  @Column({
    type: "varchar",
    default:
      "https://semeandoafeto.imadel.org.br/packages/trustir/exclusiva/img/user_placeholder.png",
    nullable: true,
  })
  image?: string | null;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @ManyToOne(() => Client, (client) => client.contacts)
  client: Client;

  @ManyToOne(() => Type, (type) => type.contacts)
  type: Type;
}
