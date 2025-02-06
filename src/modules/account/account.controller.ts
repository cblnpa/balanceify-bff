import { Body, Controller, Get, Inject, Param, Post } from '@nestjs/common';
import { ErrorResponse, SuccessResponse } from '../../common/index.js';
import { Account } from './account.schema.js';
import { AccountService } from './account.service.js';

@Controller('account')
export class AccountController {
  constructor(@Inject(AccountService) private readonly accountService: AccountService) {}

  @Post()
  async createAccount(
    @Body() createAccountDto: { name: string; type: string; balance: string },
  ): Promise<SuccessResponse<Account> | ErrorResponse> {
    return this.accountService.createAccount(
      createAccountDto.name,
      createAccountDto.type,
      createAccountDto.balance,
    );
  }

  @Get()
  async getAllAccounts(): Promise<SuccessResponse<Account[]> | ErrorResponse> {
    return this.accountService.findAll();
  }

  @Get(':id')
  async getAccountById(@Param('id') id: string): Promise<SuccessResponse<Account> | ErrorResponse> {
    return this.accountService.findById(id);
  }
}
