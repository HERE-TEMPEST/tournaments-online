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
import { Logger, UsePipes, ValidationPipe } from "@nestjs/common";

import { WsAuthGuard } from "@tournaments/auth";

import { TournamentsService } from "../application";
import { JoinEvent, ResultEvent } from "./events";
import { Message } from "../../chat/presentation/events";
import { ChatGateway } from "../../chat";

@UsePipes(ValidationPipe)
@WebSocketGateway({ namespace: "tournaments" })
export class TournamentsGateway
  implements OnGatewayConnection, OnGatewayDisconnect, OnGatewayInit
{
  @WebSocketServer() private readonly tournamentsNamespace: Namespace;
  private readonly logger: Logger;

  constructor(
    private readonly tournamentsService: TournamentsService,
    private readonly chatGateway: ChatGateway,
    private readonly wsAuthGuard: WsAuthGuard
  ) {
    this.logger = new Logger("Tournaments");
  }

  @SubscribeMessage("join")
  async joinToTournament(
    @ConnectedSocket() client: Socket,
    @MessageBody() message: JoinEvent
  ): Promise<WsResponse> {
    const { tournamentId, profileUri, username } = message;
    const { userId } = client.user;

    const { isConnected, tournament } =
      await this.tournamentsService.addUserToTournament({
        tournamentId,
        userId,
      });

    if (isConnected) {
      client.currentTournament = {
        profileUri,
        username,
        tournamentId,
      };

      client.join(String(tournamentId));
      client.emit("join");

      this.tournamentsNamespace
        .to(String(tournamentId))
        .emit("user.join", { profileUri, username, userId });

      const { isStartedGame } = await this.tournamentsService.startTournament({
        tournament,
        endedTournamentCallback: async () => {
          this.tournamentsNamespace.to(String(tournamentId)).emit("finish");
        },
      });

      if (isStartedGame) {
        this.tournamentsNamespace.to(String(tournamentId)).emit("start");
      }
      return;
    }

    client.emit("not_join");
  }

  @SubscribeMessage("message")
  async onMessage(
    @ConnectedSocket() client: Socket,
    @MessageBody() message: Message
  ) {
    if (client.currentTournament) {
      const { profileUri, username, tournamentId } = client.currentTournament;
      const { userId } = client.user;
      const { body } = message;

      this.tournamentsNamespace
        .to(String(tournamentId))
        .emit("message", { userId, body, profileUri, username });
    }
  }

  @SubscribeMessage("leave")
  async leaveFromTournament(@ConnectedSocket() client: Socket) {
    if (client.currentTournament) {
      const { userId } = client.user;
      const { tournamentId, profileUri, username } = client.currentTournament;

      const isDeleted = await this.tournamentsService.removeUserFromTournament({
        tournamentId,
        userId,
      });

      this.tournamentsNamespace
        .to(String(tournamentId))
        .emit("user.left", { profileUri, username, userId });

      client.emit("leave");
      client.leave(String(tournamentId));

      if (!isDeleted) {
        await this.result(client, { score: 0 });
      }
      client.currentTournament = null;
    }
  }

  @SubscribeMessage("result")
  async result(
    @ConnectedSocket() client: Socket,
    @MessageBody() message: ResultEvent
  ) {
    if (client.currentTournament) {
      const { tournamentId } = client.currentTournament;
      client.currentTournament = null;
      const { userId } = client.user;
      const { score } = message;

      await this.tournamentsService.addResult({
        score,
        userId,
        tournamentId,
      });

      const { tournament, winner } =
        await this.tournamentsService.checkTournamentEnd({
          tournamentId,
        });

      if (winner) {
        this.chatGateway.sendEvent("winner", { tournament, winner });
      }
    }
  }

  async handleDisconnect(client: Socket) {
    console.log("tournament disconnection");

    if (client.currentTournament) {
      await this.leaveFromTournament(client);
    }
  }

  async handleConnection(client: Socket) {
    const isAuth = await this.wsAuthGuard.canActivate(client);

    if (!isAuth) {
      client.removeAllListeners();
      client.disconnect();
      return;
    }

    console.log("tournament connection");
  }

  afterInit() {
    this.logger.log("Tournaments namespace is initialized...");
  }
}
