//@ts-nocheck
import reviews from "../models/reviews";

const create_reviews = async (data) => {
  return await reviews.create(data);
};

const update_reviews = async (query, data) => {
  return await reviews.findOneAndUpdate(query, data);
};

const delete_reviews = async (query) => {
  return await reviews.deleteOne(query);
};

const get_reviews = async (query) => {
  return await reviews.findOne(query).lean();
};

const get_reviews_with_property_and_user = async (query) => {
    return await reviews
      .find(query)
      .populate([
        {
          path: "propertyId",
          model: "property",
          select: "title price location",
        },
        {
          path: "userId",
          model: "core_user",
          select: "name email profile_image",
        },
      ])
    //   .sort({ createdAt: -1 }) // newest first
    //   .limit(10) // optional: limit to first 10
      .lean();
  };
  

const list_reviews = async (query, per_page, page_no, sort, projection) => {
  if (per_page == -1) {
    return await reviews.find(query).select(projection).sort(sort).lean();
  }
  return await reviews
    .find(query)
    .select(projection)
    .sort(sort)
    .skip((page_no - 1) * per_page)
    .limit(per_page)
    .lean();
};

const get_pagination_for_reviews = async (query, per_page, page_no, sort) => {
  if (per_page == -1) {
    let total_record = await reviews.countDocuments(query);
    let pagination = {
      per_page: per_page,
      page_no: page_no,
      total_rows: total_record,
      total_pages: 1,
    };
    return pagination;
  } else {
    let total_record = await reviews.countDocuments(query);
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

const get_count_for_reviews = async (query) => {
  let total_record = await reviews.countDocuments(query);
  return total_record;
};

const upsert_reviews = async (query, data) => {
  return await reviews.findOneAndUpdate(query, data, { upsert: true });
};

const delete_Allreviews = async (query) => {
  return await reviews.deleteMany(query);
};


export {
  create_reviews,
  update_reviews,
  delete_reviews,
  get_reviews,
  list_reviews,
  upsert_reviews,
  get_pagination_for_reviews,
  get_count_for_reviews,
  delete_Allreviews,
  get_reviews_with_property_and_user
};
