import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { KaryawanModule } from './Karyawan/karyawan.module';
import { Karyawan } from './Karyawan/karyawan.entity';
import { Tugas } from './Tugas/tugas.entity';
import { TugasModule } from './Tugas/tugas.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      port: 5433,
      username: 'postgres',
      password: 'root',
      database: 'pt_todis',
      synchronize: true,
      entities: [Karyawan, Tugas],
      migrations: [
        './Karyawan/karyawan.migration.ts',
        './Tugas/tugas.migration.ts',
      ],
      migrationsRun: true,
      logging: true,
      logger: 'file',
    }),
    KaryawanModule,
    TugasModule,
  ],
})
export class AppModule {}
