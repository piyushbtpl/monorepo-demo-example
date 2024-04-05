import { ApiProperty } from '@nestjs/swagger';
import { Types } from 'mongoose';

export class EnrollmentDTO {
  @ApiProperty()
  user: Types.ObjectId;

  @ApiProperty()
  course: Types.ObjectId;

  @ApiProperty()
  startDate: Date;

  @ApiProperty()
  endDate: Date;

  @ApiProperty()
  hasEnrolled: boolean;

  @ApiProperty()
  hasPaid: boolean;
}
