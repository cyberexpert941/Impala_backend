declare class Handler {
    create(req: any, res: any, next: any): Promise<void>;
    createByData(data: any): Promise<(import("mongoose").Document<unknown, {}, {
        createdAt: NativeDate;
        updatedAt: NativeDate;
    } & {
        device_type: "web" | "android" | "iso";
        id?: number | null | undefined;
        user_id?: number | null | undefined;
        user?: {
            prototype?: import("mongoose").Types.ObjectId | null | undefined;
            cacheHexString?: unknown;
            generate?: {} | null | undefined;
            createFromTime?: {} | null | undefined;
            createFromHexString?: {} | null | undefined;
            createFromBase64?: {} | null | undefined;
            isValid?: {} | null | undefined;
        } | null | undefined;
        device_id?: string | null | undefined;
        token?: string | null | undefined;
        valid_upto?: string | null | undefined;
    }, {}> & {
        createdAt: NativeDate;
        updatedAt: NativeDate;
    } & {
        device_type: "web" | "android" | "iso";
        id?: number | null | undefined;
        user_id?: number | null | undefined;
        user?: {
            prototype?: import("mongoose").Types.ObjectId | null | undefined;
            cacheHexString?: unknown;
            generate?: {} | null | undefined;
            createFromTime?: {} | null | undefined;
            createFromHexString?: {} | null | undefined;
            createFromBase64?: {} | null | undefined;
            isValid?: {} | null | undefined;
        } | null | undefined;
        device_id?: string | null | undefined;
        token?: string | null | undefined;
        valid_upto?: string | null | undefined;
    } & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }) | undefined>;
    update(req: any, res: any, next: any): Promise<void>;
    delete(req: any, res: any, next: any): Promise<void>;
    get(req: any, res: any, next: any): Promise<void>;
    list(req: any, res: any, next: any): Promise<void>;
    validateUserByToken(decoded: any): Promise<"token is not valid" | "invalid token. check email or mobile" | "invalid token. check user type" | "token expire. please login again" | "OK" | "token issue">;
}
export default Handler;
