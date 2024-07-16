import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Customers {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  created_at: Date;

  @Column()
  full_name: string;

  @Column()
  phone: string;

  @Column()
  email: string;

  @Column({ nullable: true })
  avatar: string;
}
