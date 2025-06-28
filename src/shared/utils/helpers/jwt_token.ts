//@ts-nocheck

import jwt from 'jsonwebtoken'
import { global_env } from '../../../shared/config/env';
class JsonWebToken {
    constructor(options) {
        this.options = options;
    }

    sign(token) {
        return new Promise((resolve, reject) => {
            console.log(token.exp)
            jwt.sign(token.payload, global_env.JWT_SECRET, { expiresIn: token.exp }, function (err, token) {
                if (err) {
                    reject(err);
                } else {
                    resolve(token);
                }
            });
        })
    }
    
    verify(jwtToken) {
        return new Promise((resolve, reject) => {
            jwt.verify(jwtToken, global_env.JWT_SECRET, function (err, decoded) {
                if (err) {
                    resolve(false)
                } else {
                    resolve(decoded)
                }
            });
        })
    }
}

export default JsonWebToken;