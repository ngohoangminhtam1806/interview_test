import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Clinics {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  created_at: Date;

  @Column()
  name: string;

  @Column({ nullable: true })
  descriptions: string;

  @Column()
  address: string;
}
