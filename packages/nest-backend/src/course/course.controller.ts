import { Body, Controller, Get, Post } from '@nestjs/common';
import { CourseService } from './course.service';
import { ApiTags } from '@nestjs/swagger';
import { CourseDTO } from './dtos/course.dto';
import { Types } from 'mongoose';
@ApiTags('Course')
@Controller('course')
export class CourseController {
  constructor(private readonly courseService: CourseService) {}

  @Get()
  async getAll() {
    return await this.courseService.findAll();
  }

  @Post()
  async create(@Body() data: CourseDTO) {
    data.createdBy = new Types.ObjectId(data.createdBy);
    return await this.courseService.create(data);
  }
}
