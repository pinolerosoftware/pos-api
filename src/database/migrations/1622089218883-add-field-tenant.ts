import {MigrationInterface, QueryRunner} from "typeorm";

export class addFieldTenant1622089218883 implements MigrationInterface {
    name = 'addFieldTenant1622089218883'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "categories" ADD "tenants_id" integer`);
        await queryRunner.query(`ALTER TABLE "products" ADD "tenants_id" integer`);
        await queryRunner.query(`ALTER TABLE "categories" ADD CONSTRAINT "FK_b9ec7ad38c72792235dfdb02366" FOREIGN KEY ("tenants_id") REFERENCES "tenants"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "products" ADD CONSTRAINT "FK_5f6e377f37d897c66cd2df7815d" FOREIGN KEY ("tenants_id") REFERENCES "tenants"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "products" DROP CONSTRAINT "FK_5f6e377f37d897c66cd2df7815d"`);
        await queryRunner.query(`ALTER TABLE "categories" DROP CONSTRAINT "FK_b9ec7ad38c72792235dfdb02366"`);
        await queryRunner.query(`ALTER TABLE "products" DROP COLUMN "tenants_id"`);
        await queryRunner.query(`ALTER TABLE "categories" DROP COLUMN "tenants_id"`);
    }

}
