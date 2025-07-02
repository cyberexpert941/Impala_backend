//@ts-nocheck
import testimonials from "../models/testimonials";

const create_testimonials = async (data) => {
  return await testimonials.create(data);
};

const update_testimonials = async (query, data) => {
  return await testimonials.findOneAndUpdate(query, data);
};

const delete_testimonials = async (query) => {
  return await testimonials.deleteOne(query);
};

const get_testimonials = async (query) => {
  return await testimonials.findOne(query).lean();
};

const list_testimonials = async (query, per_page, page_no, sort, projection) => {
  if (per_page == -1) {
    return await testimonials.find(query).select(projection).sort(sort).lean();
  }
  return await testimonials
    .find(query)
    .select(projection)
    .sort(sort)
    .skip((page_no - 1) * per_page)
    .limit(per_page)
    .lean();
};

const get_pagination_for_testimonials = async (query, per_page, page_no, sort) => {
  if (per_page == -1) {
    let total_record = await testimonials.countDocuments(query);
    let pagination = {
      per_page: per_page,
      page_no: page_no,
      total_rows: total_record,
      total_pages: 1,
    };
    return pagination;
  } else {
    let total_record = await testimonials.countDocuments(query);
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

const get_count_for_testimonials = async (query) => {
  let total_record = await testimonials.countDocuments(query);
  return total_record;
};

const upsert_testimonials = async (query, data) => {
  return await testimonials.findOneAndUpdate(query, data, { upsert: true });
};

const delete_Alltestimonials = async (query) => {
  return await testimonials.deleteMany(query);
};


export {
  create_testimonials,
  update_testimonials,
  delete_testimonials,
  get_testimonials,
  list_testimonials,
  upsert_testimonials,
  get_pagination_for_testimonials,
  get_count_for_testimonials,
  delete_Alltestimonials
};
