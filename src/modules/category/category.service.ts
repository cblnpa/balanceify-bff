import { Model, Types } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { ErrorResponse, SuccessResponse } from '../../common/index.js';
import { Category } from './category.schema.js';

@Injectable()
export class CategoryService {
  constructor(@InjectModel(Category.name) private categoryModel: Model<Category>) {}

  async createCategory(
    name: string,
    type: string,
  ): Promise<SuccessResponse<Category> | ErrorResponse> {
    try {
      const newCategory = new this.categoryModel({ name, type });
      const savedCategory = await newCategory.save();

      return new SuccessResponse(savedCategory);
    } catch (error) {
      console.error(error);

      return new ErrorResponse('Error creating category', 'DB_ERROR');
    }
  }

  async findAll(): Promise<SuccessResponse<Category[]> | ErrorResponse> {
    try {
      const categoryList = await this.categoryModel.find().exec();

      if (categoryList.length === 0) {
        return new ErrorResponse('No categories found', 'NOT_FOUND');
      }

      return new SuccessResponse(categoryList);
    } catch (error) {
      console.error(error);

      return new ErrorResponse('Error fetching category', 'DB_ERROR');
    }
  }

  async findById(id: string): Promise<SuccessResponse<Category> | ErrorResponse> {
    try {
      if (!Types.ObjectId.isValid(id)) {
        return new ErrorResponse('Category does not exist', 'INVALID_ID');
      }

      const category = await this.categoryModel.findById(id).exec();

      if (!category) {
        return new ErrorResponse('Category not found', 'CATEGORY_NOT_FOUND');
      }

      return new SuccessResponse(category);
    } catch (error) {
      console.error(error);

      return new ErrorResponse('Error fetching category', 'DB_ERROR');
    }
  }

  async findByType(type: string): Promise<SuccessResponse<Category[]> | ErrorResponse> {
    try {
      const category = await this.categoryModel.find({ type: type }).exec();

      if (!Types.ObjectId.isValid(type)) {
        return new ErrorResponse('Category does not exist', 'INVALID_ID');
      }

      return new SuccessResponse(category);
    } catch (error) {
      console.error(error);

      return new ErrorResponse('Error fetching category', 'DB_ERROR');
    }
  }

  async findByName(name: string): Promise<SuccessResponse<Category> | ErrorResponse> {
    try {
      if (!Types.ObjectId.isValid(name)) {
        return new ErrorResponse('Category does not exist', 'INVALID_ID');
      }

      const category = await this.categoryModel.findById({ name: name }).exec();

      if (!category) {
        return new ErrorResponse('Category not found', 'CATEGORY_NOT_FOUND');
      }

      return new SuccessResponse(category);
    } catch (error) {
      console.error(error);

      return new ErrorResponse('Error fetching category', 'DB_ERROR');
    }
  }
}
