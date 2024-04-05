import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type CourseDocument = HydratedDocument<Course>;

@Schema()
export class Course {
  @Prop({
    type: String,
  })
  name: string;

  @Prop({
    type: String,
  })
  description: string;

  @Prop({
    type: Number,
  })
  price: number;

  @Prop({
    type: Boolean,
  })
  hasCertification: boolean;
}

export const CourseSchema = SchemaFactory.createForClass(Course);
