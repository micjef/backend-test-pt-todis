import { Controller, Get, Post, Body, HttpCode, Param } from '@nestjs/common';
import { Tugas } from './tugas.entity';
import { TugasService } from './tugas.service';

@Controller('tugas')
export class TugasController {
  constructor(private readonly tugasService: TugasService) {}

  @Get('')
  findAll(): Promise<Tugas[]> {
    return this.tugasService.findAll();
  }

  @Post('create')
  @HttpCode(201)
  createKaryawan(@Body() newTugas: any) {
    this.tugasService.create(newTugas);

    console.log(newTugas);
  }

  @Post('update/:id')
  @HttpCode(201)
  update(@Body() newTugas, @Param('id') id) {
    this.tugasService.update(id, newTugas);
  }

  @Post('delete/:id')
  @HttpCode(201)
  delete(@Param('id') id) {
    this.tugasService.delete(id);
  }
}
