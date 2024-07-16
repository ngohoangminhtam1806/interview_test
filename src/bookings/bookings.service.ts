import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Bookings } from '../entities/bookings.entity';

@Injectable()
export class BookingsService {
  constructor(
    @InjectRepository(Bookings)
    private bookingsRepository: Repository<Bookings>,
  ) {}

  async findAll(): Promise<Bookings[]> {
    return this.bookingsRepository.createQueryBuilder('bookings')
      .leftJoinAndSelect('bookings.service', 'service')
      .leftJoinAndSelect('bookings.seller', 'seller')
      .leftJoinAndSelect('bookings.clinic', 'clinic')
      .leftJoinAndSelect('bookings.customer', 'customer')
      .select([
        'bookings',
        'service.id', 'service.name', 'service.price', 'service.descriptions', // Chỉnh sửa ở đây
        'seller.id', 'seller.full_name', 'seller.email', 'seller.avatar',
        'clinic.id', 'clinic.name', 'clinic.address', 'clinic.descriptions',
        'customer.id', 'customer.full_name', 'customer.phone', 'customer.email', 'customer.avatar',
      ])
      .getMany();
  }

  async findOne(id: number): Promise<Bookings> {
    return this.bookingsRepository.createQueryBuilder('bookings')
      .leftJoinAndSelect('bookings.service', 'service')
      .leftJoinAndSelect('bookings.seller', 'seller')
      .leftJoinAndSelect('bookings.clinic', 'clinic')
      .leftJoinAndSelect('bookings.customer', 'customer')
      .select([
        'bookings',
        'service.id', 'service.name', 'service.price', 'service.descriptions',
        'seller.id', 'seller.full_name', 'seller.email', 'seller.avatar',
        'clinic.id', 'clinic.name', 'clinic.address', 'clinic.descriptions',
        'customer.id', 'customer.full_name', 'customer.phone', 'customer.email', 'customer.avatar',
      ])
      .where('bookings.id = :id', { id })
      .getOne();
  }

  async create(booking: Bookings): Promise<Bookings> {
    return this.bookingsRepository.save(booking);
  }

  async update(id: number, updateData: Partial<Bookings>): Promise<Bookings> {
    await this.bookingsRepository.update(id, updateData);
    return this.bookingsRepository.findOne({
      where: { id },
      relations: ['service', 'seller', 'clinic', 'customer'],
    });
  }

  async remove(id: number): Promise<void> {
    await this.bookingsRepository.delete(id);
  }
}
