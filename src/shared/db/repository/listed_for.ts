//@ts-nocheck
import listedFor from "../models/listed_for";

const create_listedFor = async (data) => {
  return await listedFor.create(data);
};

const update_listedFor = async (query, data) => {
  return await listedFor.findOneAndUpdate(query, data);
};

const delete_listedFor = async (query) => {
  return await listedFor.deleteOne(query);
};

const get_listedFor = async (query) => {
  return await listedFor.findOne(query).lean();
};

const list_listedFor = async (query, per_page, page_no, sort, projection) => {
  if (per_page == -1) {
    return await listedFor.find(query).select(projection).sort(sort).lean();
  }
  return await listedFor
    .find(query)
    .select(projection)
    .sort(sort)
    .skip((page_no - 1) * per_page)
    .limit(per_page)
    .lean();
};

const get_pagination_for_listedFor = async (query, per_page, page_no, sort) => {
  if (per_page == -1) {
    let total_record = await listedFor.countDocuments(query);
    let pagination = {
      per_page: per_page,
      page_no: page_no,
      total_rows: total_record,
      total_pages: 1,
    };
    return pagination;
  } else {
    let total_record = await listedFor.countDocuments(query);
    let total_pages = Math.ceil(total_record / per_page);
    let pagination = {
      per_page: per_page,
      page_no: page_no,
      total_rows: total_record,
      total_pages: total_pages,
    };
    return pagination;
  }
};

const get_count_for_listedFor = async (query) => {
  let total_record = await listedFor.countDocuments(query);
  return total_record;
};

const upsert_listedFor = async (query, data) => {
  return await listedFor.findOneAndUpdate(query, data, { upsert: true });
};

const delete_AlllistedFor = async (query) => {
  return await listedFor.deleteMany(query);
};


export {
  create_listedFor,
  update_listedFor,
  delete_listedFor,
  get_listedFor,
  list_listedFor,
  upsert_listedFor,
  get_pagination_for_listedFor,
  get_count_for_listedFor,
  delete_AlllistedFor
};
