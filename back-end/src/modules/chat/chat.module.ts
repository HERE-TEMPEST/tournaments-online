import { Module } from "@nestjs/common";
import { WsAuthGuard } from "@tournaments/auth";
import { JwtModule } from "@nestjs/jwt";
import { JwtConfigService } from "@tournaments/config";

import { ChatGateway } from "./presentation";

@Module({
  imports: [JwtModule.registerAsync({ useClass: JwtConfigService })],
  providers: [ChatGateway, WsAuthGuard],
})
export class ChatModule {}
