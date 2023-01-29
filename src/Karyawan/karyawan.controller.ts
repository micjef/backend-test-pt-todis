import { Controller, Get, Post, Body, HttpCode, Param } from '@nestjs/common';
import { Karyawan } from './karyawan.entity';
import { KaryawanService } from './karyawan.service';

@Controller('karyawan')
export class KaryawanController {
  constructor(private readonly karyawanService: KaryawanService) {}

  @Get('')
  findAll(): Promise<Karyawan[]> {
    return this.karyawanService.findAll();
  }

  @Post('create')
  @HttpCode(201)
  createKaryawan(@Body() newKaryawan: any) {
    this.karyawanService.create(newKaryawan);

    console.log(newKaryawan);
  }

  @Post('update/:id')
  @HttpCode(201)
  update(@Body() newKaryawan, @Param('id') id) {
    this.karyawanService.update(id, newKaryawan);
  }

  @Post('delete/:id')
  @HttpCode(201)
  delete(@Param('id') id) {
    this.karyawanService.delete(id);
  }
}
