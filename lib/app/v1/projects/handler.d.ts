declare class Controller {
    create(req: any, res: any, next: any): Promise<void>;
    upsert(req: any, res: any, next: any): Promise<void>;
    update(req: any, res: any, next: any): Promise<void>;
    delete(req: any, res: any, next: any): Promise<void>;
    get(req: any, res: any, next: any): Promise<void>;
    list(req: any, res: any, next: any): Promise<void>;
    list_web(req: any, res: any, next: any): Promise<void>;
    get_count_by_regions(req: any, res: any, next: any): Promise<void>;
    get_count_by_types(req: any, res: any, next: any): Promise<void>;
}
export default Controller;
