import { Logger, NestMiddleware } from "@nestjs/common";
import { Injectable } from "@nestjs/common";
import { Request, Response } from "express";

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  private readonly logger: Logger;

  constructor() {
    this.logger = new Logger("REQUEST");
  }

  use(request: Request, response: Response, next: (error?: any) => void) {
    const startTime = Date.now();

    response.on("close", () => {
      const timestamp = Date.now() - startTime;

      if (response.statusCode < 400) {
        this.logger.log(
          `${request.method} - ${request.originalUrl} > ${response.statusCode} time: ${timestamp}`
        );
      } else {
        this.logger.error(
          `${request.method} - ${request.originalUrl} > ${response.statusCode} time: ${timestamp}`
        );
      }
    });

    next();
  }
}
