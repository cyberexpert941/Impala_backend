//@ts-nocheck

import { FALIURE_RESP } from "../utils/response_format"
import JsonWebToken from "../utils/helpers/jwt_token"
import UserSession from "../../app/v1/user_sessions/controller"

const jwt_token = new JsonWebToken()
const userSession = new UserSession();

async function authentication(req, res, next) {
    const authToken = req.headers.authorization;
    try {
        // console.log("Authentication", authToken);

        if (typeof authToken === 'undefined' || authToken == "") {
            FALIURE_RESP.meta.message = "Invalid authorization"
            FALIURE_RESP.error.name = "Invalid authorization"
            FALIURE_RESP.error.message = "No authorization provided"
            res.status(401).json(FALIURE_RESP)
        }
        else {
            let token_arr = authToken.split(" ")
            // console.log("===========", token_arr)
            if (token_arr.length != 2) {
                FALIURE_RESP.meta.message = "Invalid authorization"
                FALIURE_RESP.error.name = "Invalid authorization"
                FALIURE_RESP.error.message = "No authorization provided"
                res.status(401).json(FALIURE_RESP)
            }
            else {
                let decoded = await jwt_token.verify(token_arr[1])

                if (!(decoded)) {
                    FALIURE_RESP.meta.message = "Invalid authorization"
                    FALIURE_RESP.error.name = "Invalid authorization"
                    FALIURE_RESP.error.message = "Invalid authorization"
                    res.status(401).json(FALIURE_RESP)
                } 
                else {
                    let user_session_resp = await userSession.validateUserByToken(decoded);
                    if(user_session_resp!="OK"){
                        FALIURE_RESP.meta.message = user_session_resp
                        FALIURE_RESP.error.name = user_session_resp
                        FALIURE_RESP.error.message = user_session_resp
                        res.status(401).json(FALIURE_RESP)
                    }
                    else {
                        next();
                    }
                }

            }
        }

    }
    catch (err) {
        console.log("Error ====>>>> ", err)
        throw err
    }
};

export default authentication;