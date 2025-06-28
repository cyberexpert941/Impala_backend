//@ts-nocheck
import core_user from '../models/core_user';

const create_core_user = async (data) => {
    let user =  await core_user.create(data);
    if (user) {
        delete user.otp; // Exclude the otp field from the result
    }
    return user;
};

const update_core_user = async (query, data) => {
    let user =  await core_user.findOneAndUpdate(query, data);
    if (user) {
        delete user.otp; // Exclude the otp field from the result
    }
    return user;
};

const delete_core_user = async (query) => {
    let user = await core_user.deleteOne(query);
    if (user) {
        delete user.otp; // Exclude the otp field from the result
    }
    return user;
};

const get_core_user = async (query) => {
    const user = await core_user.findOne(query).lean();
    if (user) {
        delete user.otp; // Exclude the otp field from the result
    }
    return user;
};

const list_core_user = async (query, per_page, page_no, sort, projection) => {
    if (per_page == -1) {
        return await core_user.find(query)
            .select("-__v -_id -description -updatedAt -is_enabled -otp")
            .sort(sort)
            .lean();
    }
    return await core_user.find(query)
        .select(projection)
        .sort(sort)
        .skip((page_no - 1) * per_page)
        .limit(per_page)
        .lean();
};

const get_pagination_for_core_user = async (query, per_page, page_no, sort) => {
    if (per_page == -1) {
        let total_record = await core_user.countDocuments(query);

        let pagination = {
            "per_page": per_page,
            "page_no": page_no,
            "total_rows": total_record,
            "total_pages": 1
        }
        return pagination
    }
    else {
        let total_record = await core_user.countDocuments(query);

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

const get_count_for_core_user = async (query) => {
    let total_record = await core_user.countDocuments(query);
    return total_record
};

const upsert_core_user = async (query, data) => {
    let user =  await core_user.findOneAndUpdate(query, data, { upsert: true });
    if (user) {
        delete user.otp; // Exclude the otp field from the result
    }
    return user;
}

const count = async (query) => {
    return await core_user.countDocuments(query)
} 

async function user_type_count(userType, created_by, company_id) { 
    let matchQuery = {};
    
    if (userType !== 'SUPER_ADMIN') {
        matchQuery.company_id = company_id;
    }

    let isadmin = false; 
    if (['SUPER_ADMIN'].includes(userType)) {
        isadmin = true;
    }

    if (!isadmin) {
        if (['CUSTOMER'].includes(userType)) {
            matchQuery.parent_user_id = { $in: [created_by] };
        }
        else{
            matchQuery.id = { $in: [created_by] };
        }
    }
 console.log("###matchQuery#####", matchQuery)
    const result = await core_user.aggregate([
        {
            $unwind: {
              path: "$user_types",
              preserveNullAndEmptyArrays: false
            }
        },
        {
          $match: {
            ...matchQuery,
            "user_types.name": { $in: ['SUPER_ADMIN', 'CUSTOMER'] }
          }
        },
        {
          $group: {
            _id: "$user_types.name",
            count: { $sum: 1 }
          }
        }
      ]); 
 
    const counts = {
        SUPER_ADMIN: 0,
        CUSTOMER: 0, 
    };

    result.forEach((r) => {
        counts[r._id] = r.count;
    });

    return counts;
}


export {
    create_core_user,
    update_core_user,
    delete_core_user,
    get_core_user,
    list_core_user,
    upsert_core_user,
    get_pagination_for_core_user,
    get_count_for_core_user,
    count, 
    user_type_count
}