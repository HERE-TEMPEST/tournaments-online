import {
  BadRequestException,
  Body,
  Controller,
  Get,
  Param,
  Post,
  Req,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from "@nestjs/common";
import {
  ApiBearerAuth,
  ApiBody,
  ApiConsumes,
  ApiOkResponse,
  ApiTags,
} from "@nestjs/swagger";

import { AuthGuard } from "@tournaments/auth";

import { CreateTournamentInput } from "./inputs";
import { TournamentsService } from "../application";
import {
  CreateTournamentResult,
  GetAllTournamentsResult,
  GetProfileResult,
  GetTournamentWinnerResult,
  UploadProfileResult,
} from "./results";
import { FileInterceptor } from "@nestjs/platform-express";
import { Request } from "express";

@ApiTags("Tournaments")
@UseGuards(AuthGuard)
@Controller("tournaments")
export class TournamentsController {
  constructor(private readonly tournamentService: TournamentsService) {}

  @ApiOkResponse({ type: GetAllTournamentsResult })
  @ApiBearerAuth()
  @Get("/:region")
  async getAllByRegion(
    @Param("region") region: string
  ): Promise<GetAllTournamentsResult> {
    const { tournaments } = await this.tournamentService.allByRegion({
      region,
    });

    return { data: tournaments };
  }

  @ApiOkResponse({ type: GetAllTournamentsResult })
  @ApiBearerAuth()
  @Get()
  async getAll(): Promise<GetAllTournamentsResult> {
    const { tournaments } = await this.tournamentService.all();

    return { data: tournaments };
  }

  @ApiOkResponse({ type: GetTournamentWinnerResult })
  @ApiBearerAuth()
  @Get("/:id/winner")
  async getTournamentWinner(
    @Param("id") id: string
  ): Promise<GetTournamentWinnerResult> {
    const winner = await this.tournamentService.getTournamentWinner({
      tournamentId: +id,
    });

    return { data: winner };
  }

  @ApiOkResponse({ type: CreateTournamentResult })
  @ApiBearerAuth()
  @Post()
  async create(
    @Body() input: CreateTournamentInput
  ): Promise<CreateTournamentResult> {
    const { tournament } = await this.tournamentService.createTournament(input);

    return {
      data: tournament,
    };
  }

  @ApiConsumes("multipart/form-data")
  @ApiOkResponse({ type: UploadProfileResult })
  @ApiBearerAuth()
  @ApiBody({
    schema: {
      type: "object",
      properties: {
        profile: {
          type: "string",
          format: "binary",
        },
      },
    },
  })
  @Post("/:id/uploadprofile")
  @UseInterceptors(FileInterceptor("profile"))
  async uploadProfile(
    @Param("id") tournamentId: string,
    @UploadedFile() file?: Express.Multer.File
  ): Promise<UploadProfileResult> {
    if (!file) {
      throw new BadRequestException("filed profile not defined");
    }

    const { key, uri } = await this.tournamentService.updateProfile({
      tournamentId: +tournamentId,
      profile: file,
    });

    return {
      data: {
        key,
        uri,
      },
    };
  }

  @ApiOkResponse({ type: GetProfileResult })
  @ApiBearerAuth()
  @Get("/:id/getprofile")
  async getProfile(
    @Param("id") tournamentId: string
  ): Promise<GetProfileResult> {
    const { key, uri } = await this.tournamentService.getTournamentProfile({
      tournamentId: +tournamentId,
    });

    return {
      data: {
        key,
        uri,
      },
    };
  }
}
