import { Injectable } from '@nestjs/common';
import { User } from './user.entity';

@Injectable()
export class UserService {
    constructor(
        private readonly userModel: typeof User
    ) {}

      async create(user: object) {
            return await this.userModel.create(user)
    }
}

