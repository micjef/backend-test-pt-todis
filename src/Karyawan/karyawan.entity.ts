import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Karyawan {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
}
