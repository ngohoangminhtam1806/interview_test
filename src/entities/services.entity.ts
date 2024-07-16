import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Services {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  created_at: Date;

  @Column()
  name: string;

  @Column()
  price: number;

  @Column({ nullable: true })
  descriptions: string;
}
