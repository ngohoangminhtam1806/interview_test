import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Bookings } from './entities/bookings.entity';
import { Services } from './entities/services.entity';
import { Staffs } from './entities/staffs.entity';
import { Clinics } from './entities/clinics.entity';
import { Customers } from './entities/customers.entity';
import { BookingsService } from './bookings/bookings.service';
import { BookingsController } from './bookings/bookings.controller';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'aws-0-ap-southeast-1.pooler.supabase.com',
      port: 5432,
      username: 'user_readonly.apcziaevgmpuvgyjqrwv',
      password: 'postgresql',
      database: 'postgres',
      entities: [Bookings, Services, Staffs, Clinics, Customers],
      synchronize: false,
    }),
    TypeOrmModule.forFeature([Bookings, Services, Staffs, Clinics, Customers]),
  ],
  controllers: [BookingsController],
  providers: [BookingsService],
})
export class AppModule {}
