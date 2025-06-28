//@ts-nocheck
import {
    create_country_master,
    upsert_country_master,
    update_country_master,
    delete_country_master,
    get_country_master,
    get_pagination_for_country_master,
    list_country_master
} from "../../../shared/db/repository/country_master";


class Service {
    //======================================== usage allocation ==========================================================
    async create(data) {
        try {
            let resp = await create_country_master(data);
            return resp
        } catch (err) {
            console.log("Error ====>>>", err);
            throw err
        }
    }
    async upsert(query, data) {
        try {
            let resp = await upsert_country_master(query, data);
            return resp
        } catch (err) {
            console.log("Error ====>>>", err);
            throw err
        }
    }
    async update(query, data) {
        try {
            let resp = await update_country_master(query, data);
            return resp
        } catch (err) {
            console.log("Error ====>>>", err);
            throw err
        }
    }
    async delete(query) {
        try {
            let resp = await delete_country_master(query);
            return resp
        } catch (err) {
            console.log("Error ====>>>", err);
            throw err
        }
    }
    async get(query) {
        try {
            let resp = await get_country_master(query);
            return resp
        } catch (err) {
            console.log("Error ====>>>", err);
            throw err
        }
    }
    async list(query, per_page, page_no, sort) {
        try {

            let pagination = await get_pagination_for_country_master(query, per_page, page_no)
            let projection = "-__v -_id -description -createdAt -updatedAt -is_enabled"
            let resp = await list_country_master(query, per_page, page_no, sort, projection);
            return { resp, pagination }
        } catch (err) {
            console.log("Error ====>>>", err);
            throw err
        }
    }
}

export default Service