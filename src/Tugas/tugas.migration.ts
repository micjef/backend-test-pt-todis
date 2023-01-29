import { MigrationInterface, QueryRunner } from 'typeorm';

export class tugasMigration1622020000000 implements MigrationInterface {
  name = 'tugasMigration1622020000000';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "tugas" ("id" SERIAL NOT NULL, "assigne" integer NOT NULL, "title" character varying NOT NULL, "description" character varying NOT NULL, CONSTRAINT "PK_0b8f5d5f1c0d5e0f9d9e9d5e2b2" PRIMARY KEY ("id"))`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "tugas"`);
  }
}
