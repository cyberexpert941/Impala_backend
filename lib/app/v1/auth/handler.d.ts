declare class CoreHandler {
    createCoreUser(req: any, res: any, next: any): Promise<any>;
    updateCoreUser(req: any, res: any, next: any): Promise<void>;
    deleteCoreUser(req: any, res: any, next: any): Promise<any>;
    getCoreUser(req: any, res: any, next: any): Promise<void>;
    listCoreUser(req: any, res: any, next: any): Promise<void>;
    get_user_types(req: any, res: any, next: any): Promise<void>;
    Login(req: any, res: any, next: any): Promise<any>;
    loginWithPassword(req: any, res: any, next: any): Promise<any>;
    Verify(req: any, res: any, next: any): Promise<void>;
    FileUpload(req: any, res: any, next: any): Promise<any>;
    changePassword(req: any, res: any, next: any): Promise<any>;
    customerSignUp(req: any, res: any, next: any): Promise<any>;
    customerSignIn(req: any, res: any, next: any): Promise<any>;
    customerSignInWithPassword(req: any, res: any, next: any): Promise<any>;
    customerUpdate(req: any, res: any, next: any): Promise<any>;
    customerVerifyOTP(req: any, res: any, next: any): Promise<any>;
}
export default CoreHandler;
