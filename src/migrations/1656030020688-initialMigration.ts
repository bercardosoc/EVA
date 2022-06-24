import { MigrationInterface, QueryRunner } from "typeorm";

export class initialMigration1656030020688 implements MigrationInterface {
    name = 'initialMigration1656030020688'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "users" ("userUuid" uuid NOT NULL DEFAULT uuid_generate_v4(), "email" character varying NOT NULL, "name" character varying NOT NULL, "password" character varying NOT NULL, CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE ("email"), CONSTRAINT "PK_4309f0e033d9da5c1f3fd07b7d7" PRIMARY KEY ("userUuid"))`);
        await queryRunner.query(`CREATE TABLE "products" ("productUuid" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "description" character varying NOT NULL, "price" integer NOT NULL, "ownerUserUuid" uuid, CONSTRAINT "PK_40679e22a2344b14bbfda4f5ec8" PRIMARY KEY ("productUuid"))`);
        await queryRunner.query(`CREATE TABLE "images" ("imageUuid" uuid NOT NULL DEFAULT uuid_generate_v4(), "filename" character varying NOT NULL, "filepath" character varying NOT NULL, "productProductUuid" uuid, CONSTRAINT "UQ_3fed0dc195b842723edad36ada9" UNIQUE ("filename"), CONSTRAINT "PK_797d7ba678d8750f24e694ba98e" PRIMARY KEY ("imageUuid"))`);
        await queryRunner.query(`ALTER TABLE "products" ADD CONSTRAINT "FK_a3fa24a6eef05e70c307b06703f" FOREIGN KEY ("ownerUserUuid") REFERENCES "users"("userUuid") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "images" ADD CONSTRAINT "FK_6a61537ceda611b169aa8860320" FOREIGN KEY ("productProductUuid") REFERENCES "products"("productUuid") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "images" DROP CONSTRAINT "FK_6a61537ceda611b169aa8860320"`);
        await queryRunner.query(`ALTER TABLE "products" DROP CONSTRAINT "FK_a3fa24a6eef05e70c307b06703f"`);
        await queryRunner.query(`DROP TABLE "images"`);
        await queryRunner.query(`DROP TABLE "products"`);
        await queryRunner.query(`DROP TABLE "users"`);
    }

}
