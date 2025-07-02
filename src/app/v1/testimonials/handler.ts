// @ts-nocheck
import Service from './service';
import { SUCCESS_RESP, SUCCESS_RESP_WITH_PAGINATION, FALIURE_RESP } from "../../../shared/utils/response_format";
import JsonWebToken from "../../../shared/utils/helpers/jwt_token";

const jsonWebToken = new JsonWebToken();
const newService = new Service();

class Controller {
    //========================================= usage allocation =======================================================================
    async create(req, res, next) {
        try {
            let { body } = req
            let resp = await newService.create(body)
            SUCCESS_RESP.meta.message = "created successfully"
            SUCCESS_RESP.data = resp || {}
            res.status(200).json(SUCCESS_RESP)
        } catch (err) {
            next(err);
        }
    }
    async upsert(req, res, next) {
        try {
            let { body,params } = req
            let query = {
                "id": parseInt(params?.id)
            }
            let resp = await newService.upsert(query, body)

            SUCCESS_RESP.meta.message = "upserted successfully"
            SUCCESS_RESP.data = resp || {}

            res.status(200).json(SUCCESS_RESP)
        } catch (err) {
            next(err);
        }
    }
    async update(req, res, next) {
        try {
            let { body, params } = req
            let query = {
                "id": parseInt(params?.id)
            }
            let resp = await newService.update(query, body)

            SUCCESS_RESP.meta.message = "updated successfully"
            SUCCESS_RESP.data = resp || {}

            res.status(200).json(SUCCESS_RESP)
        } catch (err) {
            next(err);
        }
    }
    async delete(req, res, next) {
        try {
            let { params } = req
            let query = {
                "id": parseInt(params?.id)
            }
            let resp = await newService.delete(query)
            SUCCESS_RESP.meta.message = "deleted successfully"
            SUCCESS_RESP.data = resp || {}

            res.status(200).json(SUCCESS_RESP)
        } catch (err) {
            next(err);
        }
    }
    async get(req, res, next) {
        try {
            let { params } = req
            let query = {
                "id": parseInt(params?.id)
            }
            let resp = await newService.get(query)
            SUCCESS_RESP.meta.message = "retrieved successfully"
            SUCCESS_RESP.data = resp || {}

            res.status(200).json(SUCCESS_RESP)
        } catch (err) {
            next(err);
        }
    }
    async list(req, res, next) {
        try {
            let { query, params, headers } = req
            let filterQuery = {}

            let decoded = await jsonWebToken.verify((headers.authorization).split(" ")[1])
            // console.log("decoded677",JSON.stringify(decoded))
            let user_type = decoded?.user_types?.[0]?.name;
            if(user_type != "SUPER_ADMIN"){
                filterQuery["country"] = decoded?.country;
            }  

            let sort = { "createdAt": -1 }

            let per_page = parseInt(query?.per_page || "10")
            let page_no = 1
            if ((!(typeof query?.page_no === 'undefined')) && parseInt(query?.page_no) != "0") {
                page_no = parseInt(query?.page_no)
            } 

            let search_or_conditions = []
            let and_conditions = []
            //======================= search filter=======================================================================
            if (!(typeof query?.search === 'undefined')) {
                search_or_conditions.push({ "name": new RegExp(`.*${query?.search}.*`, 'i') })
                search_or_conditions.push({ "designation": new RegExp(`.*${query?.search}.*`, 'i') })
                search_or_conditions.push({ "company": new RegExp(`.*${query?.search}.*`, 'i') })
                search_or_conditions.push({ "country": new RegExp(`.*${query?.search}.*`, 'i') })
                search_or_conditions.push({ "category": new RegExp(`.*${query?.search}.*`, 'i') })
            } 

            if (search_or_conditions.length > 0) {
                and_conditions.push({
                    "$or": search_or_conditions
                })
            }

            if (and_conditions.length > 0) {
                filterQuery["$and"]=and_conditions
            }

            let resp = await newService.list(filterQuery, per_page, page_no, sort)

            SUCCESS_RESP_WITH_PAGINATION.meta.message = "List retrieved successfully"
            SUCCESS_RESP_WITH_PAGINATION.meta.pagination = resp.pagination
            SUCCESS_RESP_WITH_PAGINATION.data = resp?.resp || []
            res.status(200).json(SUCCESS_RESP_WITH_PAGINATION)
        } catch (err) {
            next(err);
        }
    }
    async list_frontend(req, res, next) {
        try {
            let { query, params, headers } = req 
            let filterQuery = {}

            let sort = { "sort_order": 1, "createdAt": -1 }

            let per_page = parseInt(query?.per_page || "10")
            let page_no = 1
            if ((!(typeof query?.page_no === 'undefined')) && parseInt(query?.page_no) != "0") {
                page_no = parseInt(query?.page_no)
            } 

            let search_or_conditions = []
            let and_conditions = [{"is_active": true}]
            //======================= search filter=======================================================================
            if (!(typeof query?.search === 'undefined')) {
                search_or_conditions.push({ "name": new RegExp(`.*${query?.search}.*`, 'i') })
                search_or_conditions.push({ "designation": new RegExp(`.*${query?.search}.*`, 'i') })
                search_or_conditions.push({ "company": new RegExp(`.*${query?.search}.*`, 'i') }) 
                search_or_conditions.push({ "category": new RegExp(`.*${query?.search}.*`, 'i') })
            }  

            if (search_or_conditions.length > 0) {
                and_conditions.push({
                    "$or": search_or_conditions
                })
            }

            if (and_conditions.length > 0) {
                filterQuery["$and"]=and_conditions
            }

            let resp = await newService.list(filterQuery, per_page, page_no, sort)

            SUCCESS_RESP_WITH_PAGINATION.meta.message = "List retrieved successfully"
            SUCCESS_RESP_WITH_PAGINATION.meta.pagination = resp.pagination
            SUCCESS_RESP_WITH_PAGINATION.data = resp?.resp || []
            res.status(200).json(SUCCESS_RESP_WITH_PAGINATION)
        } catch (err) {
            next(err);
        }
    }
}

export default Controller