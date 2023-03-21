import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from "typeorm";
import { Contacts } from "./contacts.entity";

@Entity("type")
export class Type {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ length: 25 })
  name: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @OneToMany(() => Contacts, (contacts) => contacts.type)
  contacts: Contacts[];
}
