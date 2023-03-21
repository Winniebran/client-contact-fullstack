import { hash } from "bcryptjs";
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  BeforeInsert,
  BeforeUpdate,
  OneToMany,
} from "typeorm";
import { Contacts } from "./contacts.entity";

@Entity("client")
export class Client {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ length: 25 })
  firstName: string;

  @Column({ length: 50 })
  lastName: string;

  @Column({ length: 50, unique: true })
  email: string;

  @Column({ length: 150 })
  password: string;

  @Column({ length: 20, unique: true })
  cellPhone: string;

  @Column({
    default:
      "https://semeandoafeto.imadel.org.br/packages/trustir/exclusiva/img/user_placeholder.png",
  })
  image: string;

  @Column({ default: true })
  isActive: boolean;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;

  @BeforeUpdate()
  @BeforeInsert()
  async hashPassword() {
    if (this.password) {
      this.password = await hash(this.password, 10);
    }
  }

  @OneToMany(() => Contacts, (contacts) => contacts.client)
  contacts: Contacts[];
}
