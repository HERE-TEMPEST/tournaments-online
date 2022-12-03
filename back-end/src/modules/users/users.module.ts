import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";

import { UsersController } from "./presentation";
import { UsersService } from "./application";
import { UserDomain } from "./domain";
import {
  UserRepository,
  USER_REPOSITORY_TOKEN,
  UserModelDefinition,
} from "./infrastructure";

@Module({
  imports: [MongooseModule.forFeature([UserModelDefinition])],
  providers: [
    UserDomain,
    UsersService,
    { provide: USER_REPOSITORY_TOKEN, useClass: UserRepository },
  ],
  controllers: [UsersController],
  exports: [UsersService],
})
export class UsersModule {}
