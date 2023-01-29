import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Tugas {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  assigne: number;

  @Column()
  title: string;

  @Column()
  description: string;
}
