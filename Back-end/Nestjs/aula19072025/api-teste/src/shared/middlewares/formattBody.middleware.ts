import { Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

@Injectable()
export class FormatBodyMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {


    if (req.body && (req.method === 'POST' || req.method === 'PATCH')) {

      for (const key in req.body) {

        if (typeof req.body[key] === 'string' && req.body[key] === '') {

          req.body[key] = null;
        }
      }
    }


    next();
  }
}