import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Course } from './schemas/course.schema';

@Injectable()
export class CourseService {
  constructor(@InjectModel(Course.name) private courseModel: Model<Course>) {}

  async create(createCatDto: any): Promise<Course> {
    const createdCat = new this.courseModel(createCatDto);
    return createdCat.save();
  }

  async findAll(): Promise<Course[]> {
    return this.courseModel.find().exec();
  }
}
