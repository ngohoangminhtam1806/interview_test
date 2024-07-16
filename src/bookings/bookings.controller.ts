import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { BookingsService } from './bookings.service';
import { Bookings } from '../entities/bookings.entity';

@Controller('bookings')
export class BookingsController {
  constructor(private readonly bookingsService: BookingsService) {}

  @Get()
  async findAll(): Promise<Bookings[]> {
    return this.bookingsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Bookings> {
    return this.bookingsService.findOne(id);
  }

  @Post()
  async create(@Body() booking: Bookings): Promise<Bookings> {
    return this.bookingsService.create(booking);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() updateData: Partial<Bookings>): Promise<Bookings> {
    return this.bookingsService.update(id, updateData);
  }

  @Delete(':id')
  async remove(@Param('id') id: number): Promise<void> {
    return this.bookingsService.remove(id);
  }
}
