import { MiddlewareConsumer, Module, NestModule } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { MongooseModule } from "@nestjs/mongoose";
import { TypeOrmModule } from "@nestjs/typeorm";
import { JwtModule } from "@nestjs/jwt";

import { AuthMiddleware } from "@tournaments/auth";
import {
  MongooseConfigService,
  PostgresConfigService,
  ENTITY_TOKEN,
  validateConfig,
  configLoad,
  JwtConfigService,
} from "@tournaments/config";

import { AwsS3Module } from "@tournaments/aws/s3";
import { AwsS3ConfigService } from "@tournaments/config";

import { UsersModule } from "./users";
import { AuthModule } from "./auth";
import {
  TournamentsModule,
  TOURNAMENT_RELATIONS_CONNECTION,
  TournamentEntity,
  TournamentMemberEntity,
  TournamentsProfile,
} from "./tournaments";

import { LoggerMiddleware } from "@tournaments/utils";
import { ChatModule } from "./chat/chat.module";

@Module({
  imports: [
    AwsS3Module.forRootAsync({
      useClass: AwsS3ConfigService,
    }),
    ConfigModule.forRoot({
      isGlobal: true,
      load: configLoad,
      validate: validateConfig,
    }),
    JwtModule.registerAsync({ useClass: JwtConfigService }),
    MongooseModule.forRootAsync({
      useClass: MongooseConfigService,
    }),
    TypeOrmModule.forRootAsync({
      useClass: PostgresConfigService,
      name: TOURNAMENT_RELATIONS_CONNECTION,
      extraProviders: [
        {
          provide: ENTITY_TOKEN,
          useValue: [
            TournamentEntity,
            TournamentMemberEntity,
            TournamentsProfile,
          ],
        },
      ],
      inject: [ENTITY_TOKEN],
    }),
    ChatModule,
    UsersModule,
    AuthModule,
    TournamentsModule,
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware, AuthMiddleware).forRoutes("/");
  }
}
