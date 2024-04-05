import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Course } from './schemas/course.schema';
import { CourseDTO } from './dtos/course.dto';
import { User } from 'src/user/schemas/user.schema';

@Injectable()
export class CourseService {
  constructor(@InjectModel(Course.name) private courseModel: Model<Course>) {}

  async create(createDto: CourseDTO): Promise<Course> {
    const created = new this.courseModel(createDto);
    const newRes = await created.save();

    const res = await newRes.populate([
      {
        path: 'createdBy',
        model: User.name,
        select: '_id name',
        strictPopulate: false,
      },
    ]);

    return res;
  }

  async findAll(): Promise<Course[]> {
    return this.courseModel
      .find()
      .populate([
        {
          path: 'createdBy',
          model: User.name,
          select: '_id name',
          strictPopulate: false,
        },
      ])
      .exec();
  }
}
