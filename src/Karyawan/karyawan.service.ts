import { Karyawan } from './karyawan.entity';
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class KaryawanService {
  constructor(
    @InjectRepository(Karyawan) private karyawanRepo: Repository<Karyawan>,
  ) {}

  findAll(): Promise<Karyawan[]> {
    return this.karyawanRepo.find();
  }

  create(newKaryawan) {
    this.karyawanRepo.insert(newKaryawan);
  }

  update(newKaryawan, id) {
    this.karyawanRepo.update(id, newKaryawan);
  }

  delete(id) {
    this.karyawanRepo.delete(id);
  }
}
