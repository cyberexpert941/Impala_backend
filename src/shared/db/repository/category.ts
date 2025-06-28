//@ts-nocheck
import category from "../models/category";

const create_category = async (data) => {
  return await category.create(data);
};

const update_category = async (query, data) => {
  return await category.findOneAndUpdate(query, data);
};

const delete_category = async (query) => {
  return await category.deleteOne(query);
};

const get_category = async (query) => {
  return await category.findOne(query).lean();
};

const list_category = async (query, per_page, page_no, sort, projection) => {
  if (per_page == -1) {
    return await category.find(query).select(projection).sort(sort).lean();
  }
  return await category
    .find(query)
    .select(projection)
    .sort(sort)
    .skip((page_no - 1) * per_page)
    .limit(per_page)
    .lean();
};

const get_pagination_for_category = async (query, per_page, page_no, sort) => {
  if (per_page == -1) {
    let total_record = await category.countDocuments(query);
    let pagination = {
      per_page: per_page,
      page_no: page_no,
      total_rows: total_record,
      total_pages: 1,
    };
    return pagination;
  } else {
    let total_record = await category.countDocuments(query);
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

const get_count_for_category = async (query) => {
  let total_record = await category.countDocuments(query);
  return total_record;
};

const upsert_category = async (query, data) => {
  return await category.findOneAndUpdate(query, data, { upsert: true });
};

const delete_Allcategory = async (query) => {
  return await category.deleteMany(query);
};


export {
  create_category,
  update_category,
  delete_category,
  get_category,
  list_category,
  upsert_category,
  get_pagination_for_category,
  get_count_for_category,
  delete_Allcategory
};
