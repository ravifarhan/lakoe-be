import { BadRequestException, Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async signIn(name: string, pass: string): Promise<{ access_token: string }> {
    const user = await this.usersService.findOneByName(name);

    const isMatch = await bcrypt.compare(pass, user.password);

    if (!isMatch) {
      throw new BadRequestException('Email or password is not correct');
    }

    const payload = { sub: user.id, username: user.name };

    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
