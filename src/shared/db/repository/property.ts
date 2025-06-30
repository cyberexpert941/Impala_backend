//@ts-nocheck
import property from "../models/property";

const create_property = async (data) => {
  return await property.create(data);
};

const update_property = async (query, data) => {
  return await property.findOneAndUpdate(query, data);
};

const delete_property = async (query) => {
  return await property.deleteOne(query);
};

const get_property = async (query) => {
  return await property.findOne(query).lean();
};

const list_property = async (query, per_page, page_no, sort, projection) => {
  if (per_page == -1) {
    return await property.find(query).select(projection).sort(sort).lean();
  }
  return await property
    .find(query)
    .select(projection)
    .sort(sort)
    .skip((page_no - 1) * per_page)
    .limit(per_page)
    .lean();
};

const get_pagination_for_property = async (query, per_page, page_no, sort) => {
  if (per_page == -1) {
    let total_record = await property.countDocuments(query);
    let pagination = {
      per_page: per_page,
      page_no: page_no,
      total_rows: total_record,
      total_pages: 1,
    };
    return pagination;
  } else {
    let total_record = await property.countDocuments(query);
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

const get_count_for_property = async (query) => {
  let total_record = await property.countDocuments(query);
  return total_record;
};

const get_count_by_regions = async (query = {}) => {
  return await property.aggregate([
    { $match: query },
    { $unwind: "$location.regions" },
    {
      $group: {
        _id: "$location.regions",
        count: { $sum: 1 },
      },
    },
    { $sort: { count: -1 } },
  ]);
};


const upsert_property = async (query, data) => {
  return await property.findOneAndUpdate(query, data, { upsert: true });
};

const delete_Allproperty = async (query) => {
  return await property.deleteMany(query);
};


export {
  create_property,
  update_property,
  delete_property,
  get_property,
  list_property,
  upsert_property,
  get_pagination_for_property,
  get_count_for_property,
  delete_Allproperty,
  get_count_by_regions
};
