import { Controller, Get, SetMetadata } from '@nestjs/common';
import { AppService } from './app.service';
import { RequireLogin, RequirePermission } from './custom.decorator';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @SetMetadata('require-login', true)
  @SetMetadata('require-permission', ['ddd'])
  @Get('aaa')
  aaaa() {
    return 'aaa';
  }

  @Get('bbb')
  @RequireLogin()
  @RequirePermission('ddd')
  bbb() {
    return 'bbb';
  }
}
