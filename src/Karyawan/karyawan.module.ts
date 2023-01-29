import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { KaryawanController } from './karyawan.controller';
import { Karyawan } from './karyawan.entity';
import { KaryawanService } from './karyawan.service';

@Module({
  imports: [TypeOrmModule.forFeature([Karyawan])],
  providers: [KaryawanService],
  controllers: [KaryawanController],
})
export class KaryawanModule {}
