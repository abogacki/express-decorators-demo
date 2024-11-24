export type Decorator<D extends PropertyDescriptor = PropertyDescriptor> = (
  target: unknown,
  propertyKey: string,
  descriptor: D
) => void;

export type DecoratorFactory<
  A extends unknown[],
  D extends PropertyDescriptor = PropertyDescriptor
> = (...args: A) => Decorator<D>;
