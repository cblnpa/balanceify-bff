import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { Account } from './account.schema.js';
import { AccountService } from './account.service.js';

@Controller('account')
export class AccountController {
  constructor(private readonly accountService: AccountService) {}

  @Post()
  async createAccount(
    @Body() createAccountDto: { name: string; type: string; balance: string },
  ): Promise<Account> {
    return this.accountService.createAccount(
      createAccountDto.name,
      createAccountDto.type,
      createAccountDto.balance,
    );
  }

  @Get()
  async getAllAccounts(): Promise<Account[]> {
    return this.accountService.findAll();
  }

  @Get(':id')
  async getAccountById(@Param('id') id: string): Promise<Account | null> {
    return this.accountService.findById(id);
  }
}
