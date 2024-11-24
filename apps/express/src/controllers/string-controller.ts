import { Request, Response } from 'express';
import { withQuery } from '../decorators/express/with-query';
import { ReverseStringService } from '../services/reverse-string-service';

const isString = (data: unknown): data is string => typeof data === 'string';

const isTruthy = (data: unknown) => !!data;

export class StringController {
  @withQuery('data', (data: unknown) => isString(data) && isTruthy(data))
  public static reverse(req: Request, res: Response) {
    const string = req.query.data as string;
    const result = ReverseStringService.reverseString(string);

    res.send(result);
  }
}
