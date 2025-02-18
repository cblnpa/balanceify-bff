import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { ErrorResponse, SuccessResponse } from '../../common/index.js';
import { Category } from './category.schema.js';
import { CategoryService } from './category.service.js';

@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Post()
  async createCategory(
    @Body() createCategoryDto: { name: string; type: string },
  ): Promise<SuccessResponse<Category> | ErrorResponse> {
    return this.categoryService.createCategory(createCategoryDto.name, createCategoryDto.type);
  }

  @Get()
  async getAllCategories(): Promise<SuccessResponse<Category[]> | ErrorResponse> {
    return this.categoryService.findAll();
  }

  @Get(':id')
  async getCategoryById(
    @Param('id') id: string,
  ): Promise<SuccessResponse<Category> | ErrorResponse> {
    return this.categoryService.findById(id);
  }

  @Get(':type')
  async getCategoriesByType(
    @Param('type') type: string,
  ): Promise<SuccessResponse<Category[]> | ErrorResponse> {
    return this.categoryService.findByType(type);
  }

  @Get()
  async getCategoryByName(
    @Query('name') name: string,
  ): Promise<SuccessResponse<Category> | ErrorResponse> {
    return this.categoryService.findByName(name);
  }
}
