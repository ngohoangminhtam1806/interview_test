import { Controller, Get } from '@nestjs/common';
import { BranchService } from './branch.service';

@Controller('branch')
export class BranchController {
  constructor(private readonly branchService: BranchService) {}

  @Get('statistics')
  async getStatistics() {
    return this.branchService.getBranchStatistics();
  }

  @Get('top-services')
  async getTopServices() {
    return this.branchService.getTop5Services();
  }

  @Get('top-customers')
  async getTopCustomers() {
    return this.branchService.getTop5Customers();
  }

  @Get('top-sales')
  async getTopSales() {
    return this.branchService.getTop5Sales();
  }
}
