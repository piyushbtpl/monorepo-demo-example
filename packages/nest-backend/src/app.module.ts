import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CourseModule } from './course/course.module';
import { UserModule } from './user/user.module';
import { LessonsModule } from './lessons/lessons.module';
import { MongooseModule } from '@nestjs/mongoose';
import { EnrollmentModule } from './enrollment/enrollment.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/eLearning'),
    CourseModule,
    UserModule,
    LessonsModule,
    EnrollmentModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
