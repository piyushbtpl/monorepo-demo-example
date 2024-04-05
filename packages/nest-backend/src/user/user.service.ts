import { Injectable } from '@nestjs/common';
import { User } from './schemas/user.schema';
import { UserDTO } from './dtos/user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async create(createDto: UserDTO): Promise<User> {
    const created = new this.userModel(createDto);
    return created.save();
  }

  async findAll(): Promise<User[]> {
    return this.userModel.find().exec();
  }
}
