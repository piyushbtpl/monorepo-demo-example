import { User } from './../../user/schemas/user.schema';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { Course } from 'src/course/schemas/course.schema';

export type LessonsDocument = HydratedDocument<Lessons>;

@Schema()
export class Lessons {
  @Prop({
    type: String,
  })
  name: string;

  @Prop({
    type: String,
  })
  content: string;

  @Prop({
    type: String,
  })
  category: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Course' })
  course: Course;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  createdBy: User;
}

export const LessonsSchema = SchemaFactory.createForClass(Lessons);
