import { User, UserDocument } from "src/schemas/user.schema";
import { UserService } from "../user/user.service";
import { Body, Injectable } from "@nestjs/common";
import { CreateUserDto } from "src/user/dto/create.user.dto";
import { JwtService } from "@nestjs/jwt";
import { UserAuth } from "./interfaces/user.auth";
import { JwtPayload } from "./interfaces/jwt.payload";

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async signin(payload: UserAuth) {
    return this.jwtService.sign(payload);
  }
  async signup(@Body() user: CreateUserDto): Promise<UserDocument> {
    return this.userService.createUser(user);
  }

  async validateUser(payload: UserAuth): Promise<User | null> {
    const user = await this.userService.findOne(payload.email);
    if (user) {
      return user;
    }
    return null;
  }

  async createToken(payload: JwtPayload) {
    console.log("payload", payload);
    return this.jwtService.sign(payload);
  }
}
