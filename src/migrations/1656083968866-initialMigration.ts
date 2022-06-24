import { MigrationInterface, QueryRunner } from "typeorm";

export class initialMigration1656083968866 implements MigrationInterface {
    name = 'initialMigration1656083968866'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "image" ADD "mimetype" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "image" ADD "size" integer NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "image" DROP COLUMN "size"`);
        await queryRunner.query(`ALTER TABLE "image" DROP COLUMN "mimetype"`);
    }

}
