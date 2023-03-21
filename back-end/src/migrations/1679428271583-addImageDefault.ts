import { MigrationInterface, QueryRunner } from "typeorm";

export class addImageDefault1679428271583 implements MigrationInterface {
    name = 'addImageDefault1679428271583'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "contacts" ALTER COLUMN "image" SET DEFAULT 'https://semeandoafeto.imadel.org.br/packages/trustir/exclusiva/img/user_placeholder.png'`);
        await queryRunner.query(`ALTER TABLE "client" ALTER COLUMN "image" SET DEFAULT 'https://semeandoafeto.imadel.org.br/packages/trustir/exclusiva/img/user_placeholder.png'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "client" ALTER COLUMN "image" SET DEFAULT false`);
        await queryRunner.query(`ALTER TABLE "contacts" ALTER COLUMN "image" SET DEFAULT false`);
    }

}
