//@ts-nocheck
import {
    create_reviews,
    upsert_reviews,
    update_reviews,
    delete_reviews,
    get_reviews,
    get_pagination_for_reviews,
    list_reviews,
    get_reviews_with_property_and_user
} from "../../../shared/db/repository/reviews";


class Service {
    //======================================== usage allocation ==========================================================
    async create(data) {
        try {
            let resp = await create_reviews(data);
            return resp
        } catch (err) {
            console.log("Error ====>>>", err);
            throw err
        }
    }
    async upsert(query, data) {
        try {
            let resp = await upsert_reviews(query, data);
            return resp
        } catch (err) {
            console.log("Error ====>>>", err);
            throw err
        }
    }
    async update(query, data) {
        try {
            let resp = await update_reviews(query, data);
            return resp
        } catch (err) {
            console.log("Error ====>>>", err);
            throw err
        }
    }
    async delete(query) {
        try {
            let resp = await delete_reviews(query);
            return resp
        } catch (err) {
            console.log("Error ====>>>", err);
            throw err
        }
    }
    async get(query) {
        try {
            let resp = await get_reviews(query);
            return resp
        } catch (err) {
            console.log("Error ====>>>", err);
            throw err
        }
    }
    async get_with_property_and_user(query) {
        try {
            let resp = await get_reviews_with_property_and_user(query);
            return resp
        } catch (err) {
            console.log("Error ====>>>", err);
            throw err
        }
    }
    async list(query, per_page, page_no, sort) {
        try {

            let pagination = await get_pagination_for_reviews(query, per_page, page_no)
            let projection = "-__v -_id -description -createdAt -updatedAt -is_enabled"
            let resp = await list_reviews(query, per_page, page_no, sort, projection);
            return { resp, pagination }
        } catch (err) {
            console.log("Error ====>>>", err);
            throw err
        }
    }
}

export default Service