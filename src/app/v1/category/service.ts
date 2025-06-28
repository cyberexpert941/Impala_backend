//@ts-nocheck
import {
    create_category,
    upsert_category,
    update_category,
    delete_category,
    get_category,
    get_pagination_for_category,
    list_category
} from "../../../shared/db/repository/category";


class Service {
    //======================================== usage allocation ==========================================================
    async create(data) {
        try {
            let resp = await create_category(data);
            return resp
        } catch (err) {
            console.log("Error ====>>>", err);
            throw err
        }
    }
    async upsert(query, data) {
        try {
            let resp = await upsert_category(query, data);
            return resp
        } catch (err) {
            console.log("Error ====>>>", err);
            throw err
        }
    }
    async update(query, data) {
        try {
            let resp = await update_category(query, data);
            return resp
        } catch (err) {
            console.log("Error ====>>>", err);
            throw err
        }
    }
    async delete(query) {
        try {
            let resp = await delete_category(query);
            return resp
        } catch (err) {
            console.log("Error ====>>>", err);
            throw err
        }
    }
    async get(query) {
        try {
            let resp = await get_category(query);
            return resp
        } catch (err) {
            console.log("Error ====>>>", err);
            throw err
        }
    }
    async list(query, per_page, page_no, sort) {
        try {

            let pagination = await get_pagination_for_category(query, per_page, page_no)
            let projection = "-__v -_id -description -createdAt -updatedAt -is_enabled"
            let resp = await list_category(query, per_page, page_no, sort, projection);
            return { resp, pagination }
        } catch (err) {
            console.log("Error ====>>>", err);
            throw err
        }
    }
}

export default Service