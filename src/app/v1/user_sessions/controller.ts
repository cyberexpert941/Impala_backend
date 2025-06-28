// @ts-nocheck
import * as db from "../../../shared/db/repository/user_sessions";
import { SUCCESS_RESP, SUCCESS_RESP_WITH_PAGINATION, FALIURE_RESP } from "../../../shared/utils/response_format";
import JsonWebToken from "../../../shared/utils/helpers/jwt_token";
import * as coreUser from "../../../shared/db/repository/core_user";
const { randomUUID } = require('crypto');

const jsonWebToken = new JsonWebToken(); 

class Handler {
    //=========================  type =======================================================
    async create(req, res, next) {
        try {
            let { body, headers } = req
            //let decoded = await jsonWebToken.verify((headers.authorization).split(" ")[1])
            let core_user = await coreUser.get_core_user({id: body.user_id});
            body.user = core_user._id;
            body.token = Buffer.from(randomBytes(length)).toString('hex');
            created_date = new Date();
            let resp = await db.create(body)

            SUCCESS_RESP.meta.message = "created successfully"
            SUCCESS_RESP.data = resp || {}
            res.status(200).json(SUCCESS_RESP)
        } catch (err) {
            console.log("Handler Error ===========>>>> ", err)
            next(err);
        }
    }
    async createByData(data) {
        try { 
            //let decoded = await jsonWebToken.verify((headers.authorization).split(" ")[1])
            let core_user = await coreUser.get_core_user({id: data.user_id});

            data.user = core_user._id;
            //data.token = Buffer.from(randomBytes(length)).toString('hex');
            data.token = randomUUID();
            console.log("data", data)
            let resp = await db.create(data)

            return resp;
        } catch (err) {
            console.log("Handler Error ===========>>>> ", err)
            
        }
    }
    async update(req, res, next) {
        try {
            var { body, params } = req
            let resp = await db.update(params, body)
            let data = await db.get(params)
            SUCCESS_RESP.meta.message = "Updated successfully"
            SUCCESS_RESP.data = data || {}
            res.status(200).json(SUCCESS_RESP)
        } catch (err) {
            console.log("Handler Error ===========>>>> ", err)
            next(err);
        }
    }
    async delete(req, res, next) {
        try {
            var { body, params } = req
            let resp = await db.delete(params)
            SUCCESS_RESP.meta.message = "Deleted successfully"
            SUCCESS_RESP.data = resp || {}
            res.status(200).json(SUCCESS_RESP)
        } catch (err) {
            console.log("Handler Error ===========>>>> ", err)
            next(err);
        }
    }
    async get(req, res, next) {
        try {
            const { params } = req;
            let filterQuery = {
                "id": parseInt(params?.id)
            }
            let resp = await db.get(filterQuery)
            SUCCESS_RESP.meta.message = "Get successfully"
            SUCCESS_RESP.data = resp || {}
            res.status(200).json(SUCCESS_RESP)
        } catch (err) {
            console.log("Handler Error ===========>>>> ", err)
            next(err);
        }
    }
    async list(req, res, next) {
        try {
            let { query, params, headers } = req
            let decoded = await jsonWebToken.verify((headers.authorization).split(" ")[1])

            let filterQuery = {}
            //filterQuery.created_by = decoded?.ID
            let and_conditions = []
            let search_or_conditions = []
            let sort = {}

            let per_page = parseInt(query?.per_page || "10")
            let page_no = 1
            if ((!(typeof query?.page_no === 'undefined')) && parseInt(query?.page_no) != "0") {
                page_no = parseInt(query?.page_no)
            }

            if (and_conditions.length > 0) {
                filterQuery = {
                    "$and": and_conditions,
                }

            }
            console.log(filterQuery, sort, page_no, per_page)
            let resp = await db.list(filterQuery, sort, page_no, per_page)
            console.log(resp)
            SUCCESS_RESP_WITH_PAGINATION.meta.message = "List retrieved successfully"
            SUCCESS_RESP_WITH_PAGINATION.meta.pagination = resp.pagination
            SUCCESS_RESP_WITH_PAGINATION.data = resp || []
            res.status(200).json(SUCCESS_RESP_WITH_PAGINATION)
        } catch (err) {
            console.log("Handler Error ===========>>>> ", err)
            next(err);
        }
    }
    async validateUserByToken(decoded){
        //console.log("validateUserByToken", decoded);
        try{
        let filterQuery = {
            "user_id": parseInt(decoded?.ID),
            "token": decoded?.token, 
        };
        console.log("validateUserByToken filterQuery", filterQuery);
        let resp = await db.get(filterQuery);
        console.log("validateUserByToken resp", resp);
        if(!resp){
            return "token is not valid";
        }
        if(!resp.user){
            return "token is not valid";
        }
        if(resp.user.email != decoded.email || resp.user.mobile_number != decoded.mobile_number){
            return "invalid token. check email or mobile";
        }
        if(decoded.user_types==null || decoded.user_types.length==0 || resp?.user?.user_types.length!=decoded.user_types.length){
            return "invalid token. check user type";
        }

        let valid=true;
        for(var i=0; i<decoded.user_types.length; i++){
            let tt = resp?.user?.user_types.filter(o=>o.name==decoded.user_types[0].name);
            if(tt.length==0){
                valid=false;
                break;
            }
        }

        if(!valid){
            return "invalid token. check user type";
        }

        //console.log("resp", resp);
        //console.log("valid_upto", new Date(resp.valid_upto), new Date())
        if(new Date(resp.valid_upto) < new Date()){
            return "token expire. please login again";
        }

        return "OK";
    }
    catch(ex){
        console.log("token issue", ex)
        return "token issue";
    }
    }
}
export default Handler