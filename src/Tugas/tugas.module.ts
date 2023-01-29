import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { TugasController } from './tugas.controller';
import { Tugas } from './tugas.entity';
import { TugasService } from './tugas.service';

@Module({
  imports: [TypeOrmModule.forFeature([Tugas])],
  providers: [TugasService],
  controllers: [TugasController],
})
export class TugasModule {}
