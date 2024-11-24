import { Decorator } from '@express-demo/decorators';
import { RequestHandler } from '../../controllers/type';

export type RequestDescriptor = Omit<PropertyDescriptor, 'value'> & {
  value?: RequestHandler;
};

export type RequestHandlerDecorator = Decorator<RequestDescriptor>;
