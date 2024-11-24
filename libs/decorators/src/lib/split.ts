import { Decorator } from './types';

export const split: Decorator = (_target, _propertyKey, descriptor) => {
  const originalMethod = descriptor.value;
  descriptor.value = function (...args: [string, ...unknown[]]) {
    const [str, ...restArgs] = args;
    const split = str.split('');
    const result = originalMethod.apply(this, [split, ...restArgs]);
    return result;
  };
};
