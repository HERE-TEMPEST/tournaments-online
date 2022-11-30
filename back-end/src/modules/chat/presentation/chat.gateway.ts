import {
  WebSocketGateway,
  SubscribeMessage,
  MessageBody,
  WebSocketServer,
  OnGatewayConnection,
  OnGatewayDisconnect,
  ConnectedSocket,
  WsResponse,
  OnGatewayInit,
} from "@nestjs/websockets";
import { Namespace, Socket } from "socket.io";
import { Logger } from "@nestjs/common";

import { WsAuthGuard } from "@tournaments/auth";

import { JoinEvent, Message } from "./events";

@WebSocketGateway({
  namespace: "chat",
  cors: {
    origin: "*",
  },
})
export class ChatGateway
  implements OnGatewayConnection, OnGatewayDisconnect, OnGatewayInit
{
  @WebSocketServer() private readonly chatNamespace: Namespace;
  private readonly logger: Logger;

  constructor(private readonly wsAuthGuard: WsAuthGuard) {
    this.logger = new Logger("Chat");
  }

  @SubscribeMessage("join")
  async joinToChat(
    @ConnectedSocket() client: Socket,
    @MessageBody() message: JoinEvent
  ) {
    const { region, profileUri, username } = message;
    const { userId } = client.user;
    client.join(region);

    client.chat = {
      region,
      profileUri,
      username,
    };

    client.emit("joined", { id: userId });

    this.chatNamespace
      .to(region)
      .emit("user.joined", { region, profileUri, username, userId });
  }

  @SubscribeMessage("leave")
  async leaveFromChat(@ConnectedSocket() client: Socket) {
    const { region } = client.chat;
    const { userId } = client.user;

    client.leave(region);
    client.emit("leaved");

    this.chatNamespace.to(region).emit("user.leaved", { userId });
  }

  @SubscribeMessage("message")
  async result(
    @ConnectedSocket() client: Socket,
    @MessageBody() message: Message
  ) {
    if (client.chat) {
      const { region, profileUri, username } = client.chat;
      const { userId } = client.user;
      const { body } = message;

      this.chatNamespace
        .to(region)
        .emit("message", { userId, body, profileUri, username });
    }
  }

  async handleDisconnect(client: Socket) {
    if (client.chat) {
      await this.leaveFromChat(client);
    }
  }

  async handleConnection(client: Socket) {
    console.log("connection");

    const isAuth = await this.wsAuthGuard.canActivate(client);

    if (!isAuth) {
      client.removeAllListeners();
      client.disconnect();
      return;
    }
  }

  afterInit() {
    this.logger.log("Tournaments namespace is initialized...");
  }
}
