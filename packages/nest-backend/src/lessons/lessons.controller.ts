import { Body, Controller, Get, Post } from '@nestjs/common';
import { LessonsService } from './lessons.service';
import { ApiTags } from '@nestjs/swagger';
import { LessonsDTO } from './dtos/lessons.dto';
import { Types } from 'mongoose';
@ApiTags('Lessons')
@Controller('lessons')
export class LessonsController {
  constructor(private readonly lessonsService: LessonsService) {}

  @Get()
  async getAll() {
    return await this.lessonsService.findAll();
  }

  @Post()
  async create(@Body() data: LessonsDTO) {
    data.createdBy = new Types.ObjectId(data.createdBy);
    data.course = new Types.ObjectId(data.course);
    return await this.lessonsService.create(data);
  }
}
