//@ts-nocheck
import country_master from "../models/country_master";

const create_country_master = async (data) => {
  return await country_master.create(data);
};

const update_country_master = async (query, data) => {
  return await country_master.findOneAndUpdate(query, data);
};

const delete_country_master = async (query) => {
  return await country_master.deleteOne(query);
};

const get_country_master = async (query) => {
  return await country_master.findOne(query).lean();
};

const list_country_master = async (query, per_page, page_no, sort, projection) => {
  if (per_page == -1) {
    return await country_master.find(query).select(projection).sort(sort).lean();
  }
  return await country_master
    .find(query)
    .select(projection)
    .sort(sort)
    .skip((page_no - 1) * per_page)
    .limit(per_page)
    .lean();
};

const get_pagination_for_country_master = async (query, per_page, page_no, sort) => {
  if (per_page == -1) {
    let total_record = await country_master.countDocuments(query);
    let pagination = {
      per_page: per_page,
      page_no: page_no,
      total_rows: total_record,
      total_pages: 1,
    };
    return pagination;
  } else {
    let total_record = await country_master.countDocuments(query);
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

const get_count_for_country_master = async (query) => {
  let total_record = await country_master.countDocuments(query);
  return total_record;
};

const upsert_country_master = async (query, data) => {
  return await country_master.findOneAndUpdate(query, data, { upsert: true });
};

const delete_Allcountry_master = async (query) => {
  return await country_master.deleteMany(query);
};


export {
  create_country_master,
  update_country_master,
  delete_country_master,
  get_country_master,
  list_country_master,
  upsert_country_master,
  get_pagination_for_country_master,
  get_count_for_country_master,
  delete_Allcountry_master
};
