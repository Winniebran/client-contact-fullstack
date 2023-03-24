import { MigrationInterface, QueryRunner } from "typeorm";

export class addImageNullable1679492258658 implements MigrationInterface {
    name = 'addImageNullable1679492258658'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "client" ALTER COLUMN "image" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "contacts" ALTER COLUMN "image" DROP NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "contacts" ALTER COLUMN "image" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "client" ALTER COLUMN "image" SET NOT NULL`);
    }

}
