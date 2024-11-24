import { DecoratorFactory } from '@express-demo/decorators';
import { RequestDescriptor } from './types';

type Args = [query: string, validate: (...args: unknown[]) => boolean];

type QueryValue = string | string[];

export const withQuery: DecoratorFactory<Args, RequestDescriptor> =
  (query: string, validate: (val: QueryValue) => boolean) =>
  (_target, _propertyKey, descriptor) => {
    console.log({ _target, _propertyKey, descriptor });

    const originalMethod = descriptor.value;

    descriptor.value = function (...args) {
      const [req] = args;
      const queryValue = req.query[query] as QueryValue;

      console.log({ queryValue, req, query });

      if (!validate(queryValue)) {
        throw new Error('Query validation error: missing value for: ' + query);
      }

      return originalMethod.apply(this, args);
    };
  };
