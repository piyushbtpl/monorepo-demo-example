import { Injectable } from '@nestjs/common';
import { Lessons } from './schemas/lessons.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { LessonsDTO } from './dtos/lessons.dto';
import { Course } from 'src/course/schemas/course.schema';
import { User } from 'src/user/schemas/user.schema';

@Injectable()
export class LessonsService {
  constructor(@InjectModel(Lessons.name) private lessonModel: Model<Lessons>) {}

  async create(createDto: LessonsDTO): Promise<Lessons> {
    const created = new this.lessonModel(createDto);
    const newRes = await created.save();

    const res = await newRes.populate([
      {
        path: 'createdBy',
        model: User.name,
        select: '_id name',
        strictPopulate: false,
      },
      {
        path: 'course',
        model: Course.name,
        select: '_id name description price hasCertification',
        strictPopulate: false,
      },
    ]);

    return res;
  }

  async findAll(): Promise<Lessons[]> {
    return this.lessonModel
      .find()
      .populate([
        {
          path: 'createdBy',
          model: User.name,
          select: '_id name',
          strictPopulate: false,
        },
        {
          path: 'course',
          model: Course.name,
          select: '_id name description price hasCertification',
          strictPopulate: false,
        },
      ])
      .exec();
  }
}
