//@ts-nocheck
import {
    create_listedFor,
    upsert_listedFor,
    update_listedFor,
    delete_listedFor,
    get_listedFor,
    get_pagination_for_listedFor,
    list_listedFor
} from "../../../shared/db/repository/listed_for";


class Service {
    //======================================== usage allocation ==========================================================
    async create(data) {
        try {
            let resp = await create_listedFor(data);
            return resp
        } catch (err) {
            console.log("Error ====>>>", err);
            throw err
        }
    }
    async upsert(query, data) {
        try {
            let resp = await upsert_listedFor(query, data);
            return resp
        } catch (err) {
            console.log("Error ====>>>", err);
            throw err
        }
    }
    async update(query, data) {
        try {
            let resp = await update_listedFor(query, data);
            return resp
        } catch (err) {
            console.log("Error ====>>>", err);
            throw err
        }
    }
    async delete(query) {
        try {
            let resp = await delete_listedFor(query);
            return resp
        } catch (err) {
            console.log("Error ====>>>", err);
            throw err
        }
    }
    async get(query) {
        try {
            let resp = await get_listedFor(query);
            return resp
        } catch (err) {
            console.log("Error ====>>>", err);
            throw err
        }
    }
    async list(query, per_page, page_no, sort) {
        try {

            let pagination = await get_pagination_for_listedFor(query, per_page, page_no)
            let projection = "-__v -_id -createdAt -updatedAt -is_enabled"
            let resp = await list_listedFor(query, per_page, page_no, sort, projection);
            return { resp, pagination }
        } catch (err) {
            console.log("Error ====>>>", err);
            throw err
        }
    }
}

export default Service