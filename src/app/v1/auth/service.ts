// @ts-nocheck

import { SUCCESS_RESP, SUCCESS_RESP_WITH_PAGINATION, FALIURE_RESP } from "../../../shared/utils/response_format";
import { v4 as uuidv4 } from "uuid";
import {
    create_core_user,
    update_core_user,
    delete_core_user,
    get_core_user,
    list_core_user,
    upsert_core_user,
    get_pagination_for_core_user,
    get_count_for_core_user,
    count
} from '../../../shared/db/repository/core_user'; 

class Service {

    //=========================== core user ====================================================================
    async createCoreUser(data) {
        try {
            let user = await create_core_user(data) 
            return user
        } catch (err) {
            console.error("Service Error ======================", err)
            throw err;
        }
    }
    async updateCoreUser(params, body) {
        try {
            return await update_core_user(params,body)
        } catch (err) {
            console.error("Service Error ======================", err)
            throw err;
        }
    }
    async deleteCoreUser(params) {
        try {
            return await delete_core_user(params)
        } catch (err) {
            console.error("Service Error ======================", err)
            throw err;
        }
    }
    async getCoreUser(filterQuery) {
        try {
            let resp=await get_core_user(filterQuery)
            return resp
        } catch (err) {
            console.error("Service Error ======================", err)
            throw err;
        }
    }
    async listCoreUser(filterQuery = {}, sort = {}, page_no, per_page) {
        try {
            let pagination = await get_pagination_for_core_user(filterQuery, per_page, page_no)
            let projection = "-__v -_id -description -updatedAt -is_enabled -password -otp"
            let resp= await list_core_user(filterQuery,per_page,page_no,sort,projection)
        
            return { resp, pagination }
        } catch (err) {
            console.error("Service Error ======================", err)
            throw err;
        }
    }
    async login(filterQuery,data) {
        try {
            let user=await this.getCoreUser(filterQuery)
             
            if(user != null){
                 user.new_user=false
            }else{
                user={}
                user.new_user=true
            }
           
            return user
        } catch (err) {
            console.error("Service Error ======================", err)
            throw err;
        }
    }
    async upsertCoreUser(params, body) {
        try {
            return await upsert_core_user(params,body)
        } catch (err) {
            console.error("Service Error ======================", err)
            throw err;
        }
    }
    async get_user_types(query, per_page, page_no, sort){
        try {
            let pagination = await get_pagination_for_core_user(query, per_page, page_no)
            let projection = "-__v -_id -description -updatedAt -is_enabled -name -company_id -mobile_number -email -is_lsp -is_lsp_client_admin -address -subscriber_id -is_sso -createdAt -access_template_ids -is_active -otp -id -profile_image -gst_number"
            let resp = await list_core_user(query, per_page, page_no, sort, projection)
            return {resp, pagination};
        } catch (error) {
            console.log("Error ====>>>", error);
            throw error;
        }
    }
    async count(query){
        try{
            return await count(query)
        }catch (err) {
            console.error("Service Error ======================", err)
            throw err;
        }
    }
}

export default Service