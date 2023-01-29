import { MigrationInterface, QueryRunner } from 'typeorm';

export class createKaryawanTable1588210000000 implements MigrationInterface {
  name = 'createKaryawanTable1588210000000';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "karyawan" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, CONSTRAINT "PK_8e1a6b1c4b0d1b9e6e0c0f2b2f5" PRIMARY KEY ("id"))`,
      undefined,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "karyawan"`, undefined);
  }
}
