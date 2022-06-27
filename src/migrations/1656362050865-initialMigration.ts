import { MigrationInterface, QueryRunner } from "typeorm";

export class initialMigration1656362050865 implements MigrationInterface {
    name = 'initialMigration1656362050865'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "category" ("categoryId" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "description" character varying NOT NULL, CONSTRAINT "UQ_23c05c292c439d77b0de816b500" UNIQUE ("name"), CONSTRAINT "PK_8a300c5ce0f70ed7945e877a537" PRIMARY KEY ("categoryId"))`);
        await queryRunner.query(`ALTER TABLE "product" ADD "categoryCategoryId" uuid`);
        await queryRunner.query(`ALTER TABLE "product" ADD CONSTRAINT "FK_8b4d0e2be5e945a828f313b4f30" FOREIGN KEY ("categoryCategoryId") REFERENCES "category"("categoryId") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "product" DROP CONSTRAINT "FK_8b4d0e2be5e945a828f313b4f30"`);
        await queryRunner.query(`ALTER TABLE "product" DROP COLUMN "categoryCategoryId"`);
        await queryRunner.query(`DROP TABLE "category"`);
    }

}
