import { Controller, Get } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @MessagePattern('test-KAFKA_1')
  getHello(body: any): string {
    console.log(body);

    return this.appService.getHello();
  }
}
