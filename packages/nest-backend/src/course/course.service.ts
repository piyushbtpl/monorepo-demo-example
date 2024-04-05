import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Course } from './schemas/course.schema';
import { CourseDTO } from './dtos/course.dto';

@Injectable()
export class CourseService {
  constructor(@InjectModel(Course.name) private courseModel: Model<Course>) {}

  async create(createDto: CourseDTO): Promise<Course> {
    const created = new this.courseModel(createDto);
    return created.save();
  }

  async findAll(): Promise<Course[]> {
    return this.courseModel.find().exec();
  }
}
