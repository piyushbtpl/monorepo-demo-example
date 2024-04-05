import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Enrollment } from './schemas/enrollment.schema';
import { EnrollmentDTO } from './dtos/enrollment.dto';

@Injectable()
export class EnrollmentService {
  constructor(
    @InjectModel(Enrollment.name) private enrollmentModel: Model<Enrollment>,
  ) {}

  async create(createDto: EnrollmentDTO): Promise<Enrollment> {
    const created = new this.enrollmentModel(createDto);
    return created.save();
  }

  async findAll(): Promise<Enrollment[]> {
    return this.enrollmentModel.find().exec();
  }
}
