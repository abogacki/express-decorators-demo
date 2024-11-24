import { Decorator } from './types';

export const reverse: Decorator = (_target, _propertyKey, descriptor) => {
  console.log({ _target, _propertyKey, descriptor });
  const originalMethod = descriptor.value;
  descriptor.value = function (...args: [Array<unknown>, ...unknown[]]) {
    const [arr, ...restArgs] = args;
    const reverse = arr.reverse();
    const result = originalMethod.apply(this, [reverse, ...restArgs]);
    return result;
  };
};
