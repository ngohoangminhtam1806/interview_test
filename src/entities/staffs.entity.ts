import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Staffs {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  created_at: Date;

  @Column()
  full_name: string;

  @Column({ nullable: true })
  avatar: string;

  @Column()
  email: string;
}
