import { Injectable } from '@nestjs/common';
import { Lessons } from './schemas/lessons.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { LessonsDTO } from './dtos/lessons.dto';

@Injectable()
export class LessonsService {
  constructor(@InjectModel(Lessons.name) private lessonModel: Model<Lessons>) {}

  async create(createDto: LessonsDTO): Promise<Lessons> {
    const created = new this.lessonModel(createDto);
    return created.save();
  }

  async findAll(): Promise<Lessons[]> {
    return this.lessonModel.find().exec();
  }
}
