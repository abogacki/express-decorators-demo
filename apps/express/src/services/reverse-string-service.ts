import { split, reverse, join } from '@express-demo/decorators';

export class ReverseStringService {
  @split
  @reverse
  @join
  public static reverseString(str: string): string {
    return str;
  }
}
