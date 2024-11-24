import { Decorator } from './types';

export const join: Decorator = (_target, _propertyKey, descriptor) => {
  const originalMethod = descriptor.value;

  descriptor.value = function (...args: [Array<unknown>, ...unknown[]]) {
    const [arr, ...restArgs] = args;
    const joined = arr.join('');
    const result = originalMethod.apply(this, [joined, ...restArgs]);
    return result;
  };
};
