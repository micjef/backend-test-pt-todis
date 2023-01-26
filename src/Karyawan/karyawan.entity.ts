import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
 
@Entity()
export class Karyawan {
  @PrimaryColumn()
  id: number;
 
  @Column()
  name: string;
}