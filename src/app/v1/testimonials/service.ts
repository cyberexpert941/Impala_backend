//@ts-nocheck
import {
    create_testimonials,
    upsert_testimonials,
    update_testimonials,
    delete_testimonials,
    get_testimonials,
    get_pagination_for_testimonials,
    list_testimonials
} from "../../../shared/db/repository/testimonials";


class Service {
    //======================================== usage allocation ==========================================================
    async create(data) {
        try {
            let resp = await create_testimonials(data);
            return resp
        } catch (err) {
            console.log("Error ====>>>", err);
            throw err
        }
    }
    async upsert(query, data) {
        try {
            let resp = await upsert_testimonials(query, data);
            return resp
        } catch (err) {
            console.log("Error ====>>>", err);
            throw err
        }
    }
    async update(query, data) {
        try {
            let resp = await update_testimonials(query, data);
            return resp
        } catch (err) {
            console.log("Error ====>>>", err);
            throw err
        }
    }
    async delete(query) {
        try {
            let resp = await delete_testimonials(query);
            return resp
        } catch (err) {
            console.log("Error ====>>>", err);
            throw err
        }
    }
    async get(query) {
        try {
            let resp = await get_testimonials(query);
            return resp
        } catch (err) {
            console.log("Error ====>>>", err);
            throw err
        }
    }
    async list(query, per_page, page_no, sort) {
        try {

            let pagination = await get_pagination_for_testimonials(query, per_page, page_no)
            let projection = "-__v -_id -createdAt -updatedAt"
            let resp = await list_testimonials(query, per_page, page_no, sort, projection);
            return { resp, pagination }
        } catch (err) {
            console.log("Error ====>>>", err);
            throw err
        }
    }
}

export default Service