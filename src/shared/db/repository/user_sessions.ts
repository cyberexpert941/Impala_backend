// @ts-nocheck

import model from '../models/user_sessions';

const create = async (data) => {
    return await model.create(data);
};

const update = async (query, data) => {
    return await model.findOneAndUpdate(query, data);
};

const _delete = async (query) => {
    return await model.deleteOne(query);
};

const updateAll = async (query, data) => {
    return await model.updateMany(query, data);
};

const get = async (query) => {
    return await model.findOne(query).lean().populate('user');
};

const list = async (query, per_page, page_no, sort, projection) => {
    if (per_page === -1) {
        return await model.find(query).populate('user')
            .select(projection)
            .sort(sort)
            .lean();
    }
    return await model.find(query).populate('user')
        .select(projection) 
        .sort(sort)
        .skip((page_no - 1) * per_page)
        .limit(per_page)
        .lean();
};

const upsert = async (query, data) => {
    return await model.findOneAndUpdate(query, data, { upsert: true });
}

const getPagination = async (query, per_page, page_no, sort) => {
    if (per_page === -1) {
        let total_record = await model.countDocuments(query);

        let pagination = {
            "per_page": per_page,
            "page_no": page_no,
            "total_rows": total_record,
            "total_pages": 1
        }
        return pagination
    } else {
        let total_record = await model.countDocuments(query);

        let total_pages = Math.ceil(total_record / per_page)
        let pagination = {
            "per_page": per_page,
            "page_no": page_no,
            "total_rows": total_record,
            "total_pages": total_pages
        }
        return pagination
    }
};

const getCount = async (query) => {
    let total_record = await model.countDocuments(query);
    return total_record
};

export {
    create,
    update,
    _delete,
    get,
    list,
    upsert,
    getPagination,
    getCount,
    updateAll
};
