import { Injectable } from '@nestjs/common';
import { InjectConnection } from '@nestjs/typeorm';
import { Connection } from 'typeorm';

@Injectable()
export class BranchService {
  constructor(@InjectConnection() private readonly connection: Connection) {}

  async getBranchStatistics() {
    return this.connection.query(`
      SELECT branch_id, 
             SUM(price * quantity) AS revenue, 
             SUM(payment_amount) AS actual_revenue, 
             SUM(price * quantity - payment_amount) AS debt
      FROM sales
      GROUP BY branch_id
    `);
  }

  async getTop5Services() {
    return this.connection.query(`
      SELECT service_id, 
             COUNT(*) AS order_count, 
             (COUNT(*) / SUM(COUNT(*)) OVER ()) * 100 AS percentage
      FROM sales
      GROUP BY service_id
      ORDER BY order_count DESC
      LIMIT 5
    `);
  }

  async getTop5Customers() {
    return this.connection.query(`
      SELECT customer_id, 
             SUM(price * quantity) AS revenue
      FROM sales
      GROUP BY customer_id
      ORDER BY revenue DESC
      LIMIT 5
    `);
  }

  async getTop5Sales() {
    return this.connection.query(`
      SELECT sale_id, 
             COUNT(*) AS order_count
      FROM sales
      GROUP BY sale_id
      ORDER BY order_count DESC
      LIMIT 5
    `);
  }
}
