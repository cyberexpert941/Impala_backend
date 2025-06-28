declare class JsonWebToken {
    constructor(options: any);
    sign(token: any): Promise<unknown>;
    verify(jwtToken: any): Promise<unknown>;
}
export default JsonWebToken;
