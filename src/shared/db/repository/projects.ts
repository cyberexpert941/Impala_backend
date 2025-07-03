//@ts-nocheck
import Project from "../models/projects";

const create_project = async (data) => {
  return await Project.create(data);
};

const update_project = async (query, data) => {
  return await Project.findOneAndUpdate(query, data);
};

const delete_project = async (query) => {
  return await Project.deleteOne(query);
};

const get_project = async (query) => {
  return await Project.findOne(query).lean();
};

const list_project = async (query, per_page, page_no, sort, projection) => {
  if (per_page == -1) {
    return await Project.find(query).select(projection).sort(sort).lean();
  }
  return await Project
    .find(query)
    .select(projection)
    .sort(sort)
    .skip((page_no - 1) * per_page)
    .limit(per_page)
    .lean();
};

const get_pagination_for_project = async (query, per_page, page_no, sort) => {
  if (per_page == -1) {
    let total_record = await Project.countDocuments(query);
    let pagination = {
      per_page: per_page,
      page_no: page_no,
      total_rows: total_record,
      total_pages: 1,
    };
    return pagination;
  } else {
    let total_record = await Project.countDocuments(query);
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

const get_count_for_project = async (query) => {
  let total_record = await Project.countDocuments(query);
  return total_record;
};

const get_count_by_regions = async (query = {}) => {
  return await Project.aggregate([
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

const get_count_by_types = async (query = {}) => {
  return await Project.aggregate([
    { $match: query },
    { $unwind: "$categories" },
    {
      $group: {
        _id: "$categories",
        count: { $sum: 1 },
      },
    },
    { $sort: { count: -1 } },
  ]);
};


const upsert_project = async (query, data) => {
  return await Project.findOneAndUpdate(query, data, { upsert: true });
};

const delete_Allproject = async (query) => {
  return await Project.deleteMany(query);
};


export {
  create_project,
  update_project,
  delete_project,
  get_project,
  list_project,
  upsert_project,
  get_pagination_for_project,
  get_count_for_project,
  delete_Allproject,
  get_count_by_regions,
  get_count_by_types
};
