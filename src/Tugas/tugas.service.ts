import { Tugas } from './tugas.entity';
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class TugasService {
  constructor(@InjectRepository(Tugas) private tugasRepo: Repository<Tugas>) {}

  findAll(): Promise<Tugas[]> {
    return this.tugasRepo.find();
  }

  create(newTugas) {
    this.tugasRepo.insert(newTugas);
  }

  update(newTugas, id) {
    this.tugasRepo.update(id, newTugas);
  }

  delete(id) {
    this.tugasRepo.delete(id);
  }
}
