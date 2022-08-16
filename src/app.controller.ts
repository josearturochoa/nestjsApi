import { Controller, Get, Post, Param, Body } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Get("/home")
  home():string{
    return this.appService.getHome();
  }

  @Post("product")
  getProduct(@Body('productId') productId:string){
    return `producto ${productId}`;
  }
  @Post("products")
  getProducts(@Body() products:any){

    return `producto ${products.products[0]}, tipo==> ${typeof(products)}`;
  }


}
