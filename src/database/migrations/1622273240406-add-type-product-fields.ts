import {MigrationInterface, QueryRunner} from "typeorm";

export class addTypeProductFields1622273240406 implements MigrationInterface {
    name = 'addTypeProductFields1622273240406'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "products" ADD "Type" integer NOT NULL DEFAULT '1'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "products" DROP COLUMN "Type"`);
    }

}
