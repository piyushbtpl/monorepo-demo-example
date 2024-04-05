import { ApiProperty } from '@nestjs/swagger';
import { Types } from 'mongoose';

export class LessonsDTO {
  @ApiProperty()
  name: string;
  @ApiProperty()
  content: string;
  @ApiProperty()
  category: string;
  @ApiProperty()
  course: Types.ObjectId;
  @ApiProperty()
  createdBy: Types.ObjectId;
}
