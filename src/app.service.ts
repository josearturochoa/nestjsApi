import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World! funciona solo!';
  }
  getHome():string{
    return "Home";
  }
}
