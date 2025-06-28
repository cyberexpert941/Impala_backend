declare class Controller {
    create(req: any, res: any, next: any): Promise<void>;
    upsert(req: any, res: any, next: any): Promise<void>;
    update(req: any, res: any, next: any): Promise<void>;
    delete(req: any, res: any, next: any): Promise<void>;
    get(req: any, res: any, next: any): Promise<void>;
    list(req: any, res: any, next: any): Promise<void>;
    country_wise_list(req: any, res: any, next: any): Promise<void>;
    list_frontend(req: any, res: any, next: any): Promise<void>;
    applyCoupon(req: any, res: any, next: any): Promise<any>;
    getRandomActiveCoupons(req: any, res: any, next: any): Promise<any>;
}
export default Controller;
