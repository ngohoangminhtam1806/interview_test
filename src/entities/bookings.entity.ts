// bookings.entity.ts
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Services } from './services.entity';
import { Staffs } from './staffs.entity';
import { Clinics } from './clinics.entity';
import { Customers } from './customers.entity';

@Entity()
export class Bookings {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  created_at: Date;

  @Column()
  service_id: number;

  @Column()
  quantity: number;

  @Column()
  seller_id: number;

  @Column({ nullable: true })
  notes: string;

  @Column()
  customer_paid: number;

  @Column()
  clinic_id: number;

  @Column()
  customer_id: number;

  @ManyToOne(() => Services)
  @JoinColumn({ name: 'service_id' })
  service: Services;

  @ManyToOne(() => Staffs)
  @JoinColumn({ name: 'seller_id' })
  seller: Staffs;

  @ManyToOne(() => Clinics)
  @JoinColumn({ name: 'clinic_id' })
  clinic: Clinics;

  @ManyToOne(() => Customers)
  @JoinColumn({ name: 'customer_id' })
  customer: Customers;
}
