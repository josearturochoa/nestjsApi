import { AppService } from './app.service';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getHello(): string;
    home(): string;
    getProduct(productId: string): string;
    getProducts(products: any): string;
}
