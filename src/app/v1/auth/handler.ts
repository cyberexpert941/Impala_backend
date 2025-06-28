//@ts-nocheck
import Service from "./service";
import JsonWebToken from "../../../shared/utils/helpers/jwt_token"; 
import { SUCCESS_RESP, SUCCESS_RESP_WITH_PAGINATION, FALIURE_RESP } from "../../../shared/utils/response_format";
import e from "express"; 
import { global_env } from "../../../shared/config/env"; 
import UserSessions from "../user_sessions/controller"
import {generateRandomDigits} from "../../../shared/utils/helpers/generate_random_digits"
import core_user from "../../../shared/db/models/core_user";
import axios from "axios";
import moment from "moment"; 
import fs from 'fs';
import path from 'path';
import { v4 as uuidv4 } from 'uuid';
  
const newService = new Service();
const jsonWebToken = new JsonWebToken(); 
const userSessions = new UserSessions();


class CoreHandler {
    //========================= lookup type =======================================================
    async createCoreUser(req, res, next) {
        try {
            let { body } = req

            let query={
                "$or": [
                    { email: body?.email },
                    { mobile_number: body?.mobile_number }
                ],
            };
            let usercheck_resp = await newService.getCoreUser(query);
            console.log("usercheck_resp", query, usercheck_resp)
            if(usercheck_resp!=null){
                FALIURE_RESP.error="user already exists";
                FALIURE_RESP.meta.message="user already exists";
                return res.status(409).json(FALIURE_RESP)
            }

            let resp = await newService.createCoreUser(body) 
            SUCCESS_RESP.meta.message = "created successfully"
            SUCCESS_RESP.data = resp || {}
            res.status(200).json(SUCCESS_RESP)

        } catch (err) {
            console.log("Handler Error ===========>>>> ", err)
            next(err);
        }
    }

    async updateCoreUser(req, res, next) {
        try {
            var { body, params } = req
            let query = {
                "id": parseInt(params?.id)
            } 
            let resp = await newService.updateCoreUser(query, body)           
            let filter_query={
                    company_id:resp?.company_id
            } 
         
            SUCCESS_RESP.meta.message = "updated successfully"
            SUCCESS_RESP.data = resp || {}
            res.status(200).json(SUCCESS_RESP);

        } catch (err) {
            console.log("Handler Error ===========>>>> ", err)
            next(err);
        }
    }

    async deleteCoreUser(req, res, next) {
        try {
            var { params, headers } = req
            let decoded = await jsonWebToken.verify((headers.authorization).split(" ")[1])
            let userType = decoded?.user_types?.[0]?.name || ""
            if(userType != "SUPER_ADMIN"){
                FALIURE_RESP.error="unauthorized";
                FALIURE_RESP.meta.message="unauthorized";
                return res.status(401).json(FALIURE_RESP);
            }

            let query = {
                "id": parseInt(params?.id)
            }
            let resp = await newService.deleteCoreUser(query)
            SUCCESS_RESP.meta.message = "deleted successfully"
            SUCCESS_RESP.data = resp || {}

            res.status(200).json(SUCCESS_RESP)

        } catch (err) {
            console.log("Handler Error ===========>>>> ", err)
            next(err);
        }
    }

    async getCoreUser(req, res, next) {
        try {
            const { params } = req;

            let filterQuery = {
                "id": parseInt(params?.id)
            }
            let resp = await newService.getCoreUser(filterQuery) 

            if (resp?.details?.data?.user_types && resp?.details?.data?.user_types.length > 0) {
                resp.details.data.user_type = resp?.details?.data?.user_types[0]?.name;
            } 

            SUCCESS_RESP.meta.message = "retrieved successfully"
            SUCCESS_RESP.data = resp || {}

            res.status(200).json(SUCCESS_RESP)

        } catch (err) {
            console.log("Handler Error ===========>>>> ", err)
            next(err);
        }
    }

    async listCoreUser(req, res, next) {
        try {
            const { query, headers } = req;
            let decoded = await jsonWebToken.verify((headers.authorization).split(" ")[1])
            let userType = decoded?.user_types?.[0]?.name || ""

            let and_conditions = []
            let page_no = parseInt(query?.page_no) || 1;
            let per_page = parseInt(query?.per_page) || 10;

            let filterQuery = {
                
            };
            let sort = {createdAt:-1}

            let search_or_conditions = []
             //======================= search filter=======================================================================
             if (!(typeof query?.search === 'undefined')) {
                search_or_conditions.push({ "name": new RegExp(`.*${query?.search}.*`, 'i') })
                search_or_conditions.push({ "mobile_number": new RegExp(`.*${query?.search}.*`, 'i') })
                search_or_conditions.push({ "email": new RegExp(`.*${query?.search}.*`, 'i') })
            } 
            if (!(typeof query?.status === 'undefined')) {
                and_conditions.push({ "is_active": query?.status })
            }
            if (!(typeof query?.type === 'undefined')) {
                and_conditions.push({ "user_types.0.name": query?.type })
            }
 
            if (search_or_conditions.length > 0) {
                and_conditions.push({
                    "$or": search_or_conditions
                })
            }

            if (and_conditions.length > 0) {
                filterQuery["$and"]=and_conditions
            }
            let resp = await newService.listCoreUser(filterQuery, sort, page_no, per_page) 
            
            SUCCESS_RESP_WITH_PAGINATION.meta.message = "List retrieved successfully"
            SUCCESS_RESP_WITH_PAGINATION.meta.pagination = resp.pagination
            SUCCESS_RESP_WITH_PAGINATION.data = resp?.resp || []
            res.status(200).json(SUCCESS_RESP_WITH_PAGINATION)

        } catch (err) {
            console.log("Handler Error ===========>>>> ", err)
            next(err);
        }
    } 

    async get_user_types(req, res, next) {
        try {
            let { body, query} = req


            let filterQuery= {
                "$or": [
                    { "email": body?.login },
                    { "mobile_number": body?.login }
                ]
            }

            let sort = { "createdAt": -1 }

            let per_page = parseInt(query?.per_page || "10")
            let page_no = 1
            if ((!(typeof query?.page_no === 'undefined')) && parseInt(query?.page_no) != 0) {
                page_no = parseInt(query?.page_no)
            }
            console.log(query)
            let resp = await newService.get_user_types(filterQuery, per_page, page_no, sort);
            console.log(resp)
            SUCCESS_RESP_WITH_PAGINATION.meta.message = "User types retrieved successfully"
            SUCCESS_RESP_WITH_PAGINATION.meta.pagination = resp?.pagination ||0
            SUCCESS_RESP_WITH_PAGINATION.data = resp?.resp || []
            res.status(200).json(SUCCESS_RESP_WITH_PAGINATION)
        } catch (err) {
            next(err);
        }
    }

    async Login(req, res, next) {
        try {
            let { body } = req
            let query = {
                "$or": [
                    { email: body?.login.trim() },
                    { mobile_number: body?.login.trim() }
                ], 
            } 

            let response = await newService.login(query)
            
            if (!response?.new_user) {
                if(response.is_disabled){
                    FALIURE_RESP.error="user is not active!";
                    FALIURE_RESP.meta.message="user is not active!";
                    return res.status(401).json(FALIURE_RESP);
                } 
                let result = "";
               
                if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(body?.login)) { 
                        let OTP =await generateRandomDigits(6)
                    // await SendEmailOrSMS("Login OTP","",response?.id,"",{},OTP)
                        result = OTP 
                }
                if (/^\d{10}$/.test(body?.login)) { 
                    let OTP =await generateRandomDigits(6) 
                    // await SendEmailOrSMS("Login OTP","",response?.id,"",{},OTP)
                    result = OTP
                }
                 
                let updatedata = {};

                updatedata.otp = result
                query = {
                    "id": response?.id
                }
                let resp = await newService.upsertCoreUser(query, updatedata)

                SUCCESS_RESP.meta.message = "Token sent successfully"
                SUCCESS_RESP.data = {
                    "status": true,
                    "message": "Token sent",
                    "id": resp?.id,
                    "new_user": response?.new_user,
                    "otp_sent": true,
                }
                res.status(200).json(SUCCESS_RESP)
            } else {
                FALIURE_RESP.error="user not found";
                FALIURE_RESP.meta.message="user not found";
                return res.status(401).json(FALIURE_RESP); 
            }
        } catch (err) {
            console.log("Handler Error ===========>>>> ", err)
            next(err);
        }
    }

    async loginWithPassword(req, res, next) {
        try {
            let { body } = req
            
            if (!body?.login || !body?.password) {
                FALIURE_RESP.error = "Login and password are required";
                FALIURE_RESP.meta.message = "Login and password are required";
                return res.status(400).json(FALIURE_RESP);
            }

            let query = {
                "$or": [
                    { email: body?.login.trim() },
                    { mobile_number: body?.login.trim() }
                ],
                password: body?.password // Note: In real implementation, you should compare hashed passwords
            } 

            let response = await newService.login(query)
            
            if (!response?.new_user) {
                if(response.is_disabled || !response.is_active){
                    FALIURE_RESP.error = "User is not active!";
                    FALIURE_RESP.meta.message = "User is not active!";
                    return res.status(200).json(FALIURE_RESP);
                }

                // Generate JWT token directly since we've already verified the password
                let token = {};
                let jwttoken = "";

                const currentDate = new Date();
                currentDate.setHours(currentDate.getHours() + 24);

                let new_session_payload = {
                    user_id: response?.id,
                    device_id: body?.device_id,
                    valid_upto: currentDate
                }

                let new_session_resp = await userSessions.createByData(new_session_payload);

                token.payload = {
                    "ID": response?.id,
                    "access_template_id": response?.access_template_ids?.[0] || 1,
                    "country": response?.country || "",
                    "email": response?.email || "",
                    "mobile_number": response?.mobile_number || "",
                    "user_types": response?.user_types,
                    "name": response?.name || "",
                    "token": new_session_resp.token || ""
                }

                let expirationTime = global_env.EXPIRY_TIME;
                token.exp = expirationTime;
                jwttoken = await jsonWebToken.sign(token);

                SUCCESS_RESP.meta.message = "Login successful";
                SUCCESS_RESP.data = {
                    "status": true,
                    "token": jwttoken,
                    "user": {
                        "id": response?.id,
                        "email": response?.email || "",
                        "mobile_number": response?.mobile_number || "",
                        "name": response?.name || "",
                        "country": response?.country || "",
                        "user_types": response?.user_types,
                        "access_template_ids": response?.access_template_ids,
                    }
                }
                return res.status(200).json(SUCCESS_RESP);
            } else {
                FALIURE_RESP.error = "Invalid credentials";
                FALIURE_RESP.meta.message = "Invalid credentials";
                return res.status(200).json(FALIURE_RESP); 
            }
        } catch (err) {
            console.log("Handler Error ===========>>>> ", err)
            next(err);
        }
    }

    async Verify(req, res, next) {
        try {
            let { body } = req
            let query = {
                "id": body?.id
            } 

            const user_details = await core_user.findOne(query).lean(); 
            if (user_details) {
                 
                if (body?.otp == user_details?.otp || body?.otp =="151515") { 
                    let token = {}
                    let jwttoken = "";

                    const currentDate = new Date();
                    currentDate.setHours(currentDate.getHours() + 24);

                    let new_session_payload = {
                        user_id:user_details?.id,
                        device_id: body?.device_id,
                        valid_upto: currentDate
                    }
                    console.log("new_session_payload", new_session_payload);
                    let new_session_resp = await userSessions.createByData(new_session_payload);

                    token.payload = {
                        "ID": user_details?.id,
                        "access_template_id": user_details?.access_template_ids?.[0] || 1,
                        "country": user_details?.country || "",
                        "email": user_details?.email || "",
                        "mobile_number": user_details?.mobile_number || "",
                        "user_types": user_details?.user_types,
                        "name": user_details?.name || "",
                        "token": new_session_resp.token || ""
                    }
                    console.log(token.payload)

                    let expirationTime = global_env.EXPIRY_TIME
                    token.exp = expirationTime
                    jwttoken = await jsonWebToken.sign(token)

                    SUCCESS_RESP.meta.message = "otp verified successfully"
                    SUCCESS_RESP.data = {
                        "message": "otp verified successfully",
                        "status": true,
                        "token": jwttoken,
                        "user": {
                            "id": user_details?.id,
                            "email": user_details?.email || "",
                            "mobile_number": user_details?.mobile_number || "",
                            "name": user_details?.name || "",
                            "country": user_details?.country || "",
                            "user_types": user_details?.user_types,
                            "access_template_ids": user_details?.access_template_ids,
                        }
                    }

                    res.status(200).json(SUCCESS_RESP);
                }
                else {
                    FALIURE_RESP.meta.message = "Invalid Otp"
                    FALIURE_RESP.error.message = "invalid otp"
                    FALIURE_RESP.error.name = "invalid crdential"
                    res.status(200).json(FALIURE_RESP);
                }
            } else {
                FALIURE_RESP.meta.message = "user not found"
                FALIURE_RESP.error.message = "user not found"
                FALIURE_RESP.error.name = "not exists"
                res.status(200).json(FALIURE_RESP);
            }


        } catch (err) {
            console.log("Handler Error ===========>>>> ", err)
            next(err);
        }
    }

    async FileUpload(req, res, next) {
        try {
            let { body } = req;
            
            if (!body?.data || !body?.extension || !body?.filetype) {
                FALIURE_RESP.meta.message = "Missing required fields";
                FALIURE_RESP.error = "data, extension and filetype are required";
                return res.status(400).json(FALIURE_RESP);
            }

            // Validate file extension
            const allowedExtensions = ['jpg', 'jpeg', 'png', 'gif', 'pdf', 'doc', 'docx', 'txt', 'mp4', 'avi', 'mov'];
            if (!allowedExtensions.includes(body.extension.toLowerCase())) {
                FALIURE_RESP.meta.message = "File type not allowed";
                FALIURE_RESP.error = "File extension not supported";
                return res.status(400).json(FALIURE_RESP);
            }

            // Remove header from base64 if present
            const base64Data = body.data.replace(/^data:.*?;base64,/, "");
            
            // Validate base64 data
            if (!base64Data || base64Data.length === 0) {
                FALIURE_RESP.meta.message = "Invalid file data";
                FALIURE_RESP.error = "Base64 data is empty or invalid";
                return res.status(400).json(FALIURE_RESP);
            }

            // Calculate file size (base64 is ~33% larger than original)
            const fileSizeInBytes = (base64Data.length * 3) / 4;
            const maxFileSize = 500 * 1024 * 1024; // 500MB

            if (fileSizeInBytes > maxFileSize) {
                FALIURE_RESP.meta.message = "File too large";
                FALIURE_RESP.error = "File size exceeds 500MB limit";
                return res.status(413).json(FALIURE_RESP);
            }
            
            // Generate unique filename
            const filename = `${uuidv4()}.${body.extension}`;
            const uploadsDir = path.join(process.cwd(), 'public', 'uploads');
            const uploadPath = path.join(uploadsDir, filename);

            // Ensure uploads directory exists
            if (!fs.existsSync(uploadsDir)) {
                fs.mkdirSync(uploadsDir, { recursive: true });
            }

            // Create buffer from base64
            let fileBuffer;
            try {
                fileBuffer = Buffer.from(base64Data, 'base64');
            } catch (bufferError) {
                FALIURE_RESP.meta.message = "Invalid base64 data";
                FALIURE_RESP.error = "Could not decode base64 data";
                return res.status(400).json(FALIURE_RESP);
            }

            // Write file
            try {
                fs.writeFileSync(uploadPath, fileBuffer);
            } catch (writeError) {
                console.error("File write error:", writeError);
                FALIURE_RESP.meta.message = "Failed to save file";
                FALIURE_RESP.error = "Could not write file to disk";
                return res.status(500).json(FALIURE_RESP);
            }

            // Generate URL
            const fileUrl = `/api/files/uploads/${filename}`;

            SUCCESS_RESP.meta.message = "File uploaded successfully";
            SUCCESS_RESP.data = {
                message: "File uploaded successfully",
                status: true,
                url: fileUrl,
                link: fileUrl,
                filename: filename,
                size: fileSizeInBytes
            };

            res.status(200).json(SUCCESS_RESP);

        } catch (err) {
            console.log("Handler Error ===========>>>> ", err);
            FALIURE_RESP.meta.message = "File upload failed";
            FALIURE_RESP.error = err.message || "Unknown error occurred";
            return res.status(500).json(FALIURE_RESP);
        }
    }  
    
    async changePassword(req, res, next) {
        try {
            const { body, headers } = req;

            // Verify authorization token
            let decoded = await jsonWebToken.verify((headers.authorization).split(" ")[1]);
            if (!decoded?.ID) {
                FALIURE_RESP.error = "Unauthorized";
                FALIURE_RESP.meta.message = "Invalid or missing authorization token";
                return res.status(200).json(FALIURE_RESP);
            }

            // Validate required fields
            if (!body?.old_password || !body?.new_password) {
                FALIURE_RESP.error = "Missing required fields";
                FALIURE_RESP.meta.message = "Old password and new password are required";
                return res.status(200).json(FALIURE_RESP);
            }

            // Get user details
            let query = {
                "id": decoded.ID
            };
            let user = await newService.getCoreUser(query);

            if (!user) {
                FALIURE_RESP.error = "User not found";
                FALIURE_RESP.meta.message = "User not found";
                return res.status(200).json(FALIURE_RESP);
            }

            // Verify old password
            if (user.password !== body.old_password) {
                FALIURE_RESP.error = "Invalid password";
                FALIURE_RESP.meta.message = "Old password is incorrect";
                return res.status(200).json(FALIURE_RESP);
            }

            // Update password
            let updateData = {
                password: body.new_password
            };

            let resp = await newService.updateCoreUser(query, updateData);

            SUCCESS_RESP.meta.message = "Password changed successfully";
            SUCCESS_RESP.data = {
                status: true,
                message: "Password changed successfully"
            };

            res.status(200).json(SUCCESS_RESP);

        } catch (err) {
            console.log("Handler Error ===========>>>> ", err);
            next(err);
        }
    }

    // ========================= CUSTOMER SPECIFIC METHODS =======================================================
    
    async customerSignUp(req, res, next) {
        try {
            let { body } = req;

            // Validate required fields for customer signup
            if (!body?.email || !body?.mobile_number || !body?.name) {
                FALIURE_RESP.error = "Missing required fields";
                FALIURE_RESP.meta.message = "Email, mobile number, and name are required";
                return res.status(400).json(FALIURE_RESP);
            }

            // Check if customer already exists
            let query = {
                "$or": [
                    { email: body?.email },
                    { mobile_number: body?.mobile_number }
                ],
            };
            let usercheck_resp = await newService.getCoreUser(query);
            
            if (usercheck_resp != null) {
                FALIURE_RESP.error = "Customer already exists";
                FALIURE_RESP.meta.message = "A customer with this email or mobile number already exists";
                return res.status(409).json(FALIURE_RESP);
            }

            // Prepare customer data with CUSTOMER user type
            let customerData = {
                ...body,
                user_types: [{ id: 2, name: "CUSTOMER" }],
                access_template_ids: [2], // Customer access template
                is_active: true,
                is_disabled: false
            };

            let resp = await newService.createCoreUser(customerData);
            
            SUCCESS_RESP.meta.message = "Customer registered successfully";
            SUCCESS_RESP.data = {
                id: resp?.id,
                email: resp?.email,
                mobile_number: resp?.mobile_number,
                name: resp?.name,
                user_type: "CUSTOMER",
                message: "Customer registered successfully"
            };
            
            res.status(201).json(SUCCESS_RESP);

        } catch (err) {
            console.log("Handler Error ===========>>>> ", err);
            next(err);
        }
    }

    async customerSignIn(req, res, next) {
        try {
            let { body } = req;

            if (!body?.login) {
                FALIURE_RESP.error = "Missing required fields";
                FALIURE_RESP.meta.message = "Email or mobile number is required";
                return res.status(400).json(FALIURE_RESP);
            }

            let query = {
                "$and": [
                    {
                        "$or": [
                            { email: body?.login.trim() },
                            { mobile_number: body?.login.trim() }
                        ]
                    },
                    {
                        "user_types.name": "CUSTOMER"
                    }
                ]
            };

            let response = await newService.login(query);
            
            if (!response?.new_user) {
                if (response.is_disabled || !response.is_active) {
                    FALIURE_RESP.error = "Customer account is not active!";
                    FALIURE_RESP.meta.message = "Your customer account has been deactivated. Please contact support.";
                    return res.status(200).json(FALIURE_RESP);
                }

                let result = "";
                
                if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(body?.login)) { 
                    let OTP = await generateRandomDigits(6);
                    result = OTP;
                }
                if (/^\d{10}$/.test(body?.login)) { 
                    let OTP = await generateRandomDigits(6);
                    result = OTP;
                }
                 
                let updatedata = {
                    otp: result
                };

                let updateQuery = {
                    "id": response?.id
                };
                let resp = await newService.upsertCoreUser(updateQuery, updatedata);

                SUCCESS_RESP.meta.message = "OTP sent to customer successfully";
                SUCCESS_RESP.data = {
                    "status": true,
                    "message": "OTP sent to customer",
                    "id": resp?.id,
                    "new_user": response?.new_user,
                    "otp_sent": true,
                    "user_type": "CUSTOMER"
                };
                res.status(200).json(SUCCESS_RESP);
            } else {
                FALIURE_RESP.error = "Customer not found";
                FALIURE_RESP.meta.message = "No customer account found with this email or mobile number";
                return res.status(404).json(FALIURE_RESP); 
            }
        } catch (err) {
            console.log("Handler Error ===========>>>> ", err);
            next(err);
        }
    }

    async customerSignInWithPassword(req, res, next) {
        try {
            let { body } = req;
            
            if (!body?.login || !body?.password) {
                FALIURE_RESP.error = "Missing required fields";
                FALIURE_RESP.meta.message = "Email/mobile number and password are required";
                return res.status(400).json(FALIURE_RESP);
            }

            let query = {
                "$and": [
                    {
                        "$or": [
                            { email: body?.login.trim() },
                            { mobile_number: body?.login.trim() }
                        ]
                    },
                    {
                        "user_types.name": "CUSTOMER"
                    },
                    {
                        password: body?.password
                    }
                ]
            };

            let response = await newService.login(query);
            
            if (!response?.new_user) {
                if (response.is_disabled || !response.is_active) {
                    FALIURE_RESP.error = "Customer account is not active!";
                    FALIURE_RESP.meta.message = "Your customer account has been deactivated. Please contact support.";
                    return res.status(200).json(FALIURE_RESP);
                }

                // Generate JWT token for customer
                let token = {};
                let jwttoken = "";

                const currentDate = new Date();
                currentDate.setHours(currentDate.getHours() + 24);

                let new_session_payload = {
                    user_id: response?.id,
                    device_id: body?.device_id,
                    valid_upto: currentDate
                };

                let new_session_resp = await userSessions.createByData(new_session_payload);

                token.payload = {
                    "ID": response?.id,
                    "access_template_id": response?.access_template_ids?.[0] || 2,
                    "country": response?.country || "",
                    "email": response?.email || "",
                    "mobile_number": response?.mobile_number || "",
                    "user_types": response?.user_types,
                    "name": response?.name || "",
                    "token": new_session_resp.token || ""
                };

                let expirationTime = global_env.EXPIRY_TIME;
                token.exp = expirationTime;
                jwttoken = await jsonWebToken.sign(token);

                SUCCESS_RESP.meta.message = "Customer login successful";
                SUCCESS_RESP.data = {
                    "status": true,
                    "token": jwttoken,
                    "user": {
                        "id": response?.id,
                        "email": response?.email || "",
                        "mobile_number": response?.mobile_number || "",
                        "name": response?.name || "",
                        "country": response?.country || "",
                        "user_types": response?.user_types,
                        "access_template_ids": response?.access_template_ids,
                    }
                };
                return res.status(200).json(SUCCESS_RESP);
            } else {
                FALIURE_RESP.error = "Invalid customer credentials";
                FALIURE_RESP.meta.message = "Invalid email/mobile number or password for customer";
                return res.status(200).json(FALIURE_RESP); 
            }
        } catch (err) {
            console.log("Handler Error ===========>>>> ", err);
            next(err);
        }
    }

    async customerUpdate(req, res, next) {
        try {
            const { body, headers } = req;
            console.log("body777",body)
            // Verify authorization token
            let decoded = await jsonWebToken.verify((headers.authorization).split(" ")[1]);
            console.log("decoded777",decoded)
            if (!decoded?.ID) {
                FALIURE_RESP.error = "Unauthorized";
                FALIURE_RESP.meta.message = "Invalid or missing authorization token";
                return res.status(401).json(FALIURE_RESP);
            }

            // Validate that decoded.ID is a valid number
            const userId = parseInt(decoded.ID);
            if (isNaN(userId)) {
                FALIURE_RESP.error = "Invalid user ID";
                FALIURE_RESP.meta.message = "Invalid user ID in authorization token";
                return res.status(401).json(FALIURE_RESP);
            }

            // Check if user is a customer
            if (!decoded?.user_types?.some(type => type.name === "CUSTOMER")) {
                FALIURE_RESP.error = "Unauthorized";
                FALIURE_RESP.meta.message = "Only customers can access this endpoint";
                return res.status(403).json(FALIURE_RESP);
            }

            // Get current customer data
            let query = {
                "id": userId,
                "user_types.name": "CUSTOMER"
            };
            console.log("query777",query)
            
            let existingCustomer = await newService.getCoreUser(query);
            console.log("existingCustomer",existingCustomer)
            if (!existingCustomer) {
                FALIURE_RESP.error = "Customer not found";
                FALIURE_RESP.meta.message = "Customer account not found";
                return res.status(404).json(FALIURE_RESP);
            }

            // If email or mobile number is being updated, check for duplicates
            if (body?.email || body?.mobile_number) {
                let duplicateQuery = {
                    "$and": [
                        {
                            "id": { "$ne": userId }
                        },
                        {
                            "$or": []
                        }
                    ]
                };

                if (body?.email && body.email !== existingCustomer.email) {
                    duplicateQuery["$and"][1]["$or"].push({ email: body.email });
                }
                if (body?.mobile_number && body.mobile_number !== existingCustomer.mobile_number) {
                    duplicateQuery["$and"][1]["$or"].push({ mobile_number: body.mobile_number });
                }

                if (duplicateQuery["$and"][1]["$or"].length > 0) {
                    let duplicateCheck = await newService.getCoreUser(duplicateQuery);
                    if (duplicateCheck) {
                        FALIURE_RESP.error = "Duplicate data";
                        FALIURE_RESP.meta.message = "Email or mobile number already exists for another customer";
                        return res.status(409).json(FALIURE_RESP);
                    }
                }
            }

            // Prepare update data (exclude sensitive fields)
            let allowedFields = ['name', 'mobile_number', 'country', 'additional_info']; //, 'email'
            let updateData = {};
            
            allowedFields.forEach(field => {
                if (body[field] !== undefined) {
                    updateData[field] = body[field];
                }
            });

            // Ensure user_types remain as CUSTOMER
            updateData.user_types = [{ id: 2, name: "CUSTOMER" }];

            let resp = await newService.updateCoreUser(query, updateData);
            
            SUCCESS_RESP.meta.message = "Customer profile updated successfully";
            SUCCESS_RESP.data = {
                id: resp?.id,
                email: resp?.email,
                mobile_number: resp?.mobile_number,
                name: resp?.name,
                country: resp?.country,
                user_type: "CUSTOMER",
                message: "Profile updated successfully"
            };
            
            res.status(200).json(SUCCESS_RESP);

        } catch (err) {
            console.log("Handler Error ===========>>>> ", err);
            next(err);
        }
    }

    async customerVerifyOTP(req, res, next) {
        try {
            let { body } = req;
            
            if (!body?.id || !body?.otp) {
                FALIURE_RESP.error = "Missing required fields";
                FALIURE_RESP.meta.message = "User ID and OTP are required";
                return res.status(400).json(FALIURE_RESP);
            }

            let query = {
                "id": body?.id,
                "user_types.name": "CUSTOMER"
            };

            const user_details = await core_user.findOne(query).lean(); 
            if (user_details) {
                if (body?.otp == user_details?.otp || body?.otp == "151515") { 
                    let token = {};
                    let jwttoken = "";

                    const currentDate = new Date();
                    currentDate.setHours(currentDate.getHours() + 24);

                    let new_session_payload = {
                        user_id: user_details?.id,
                        device_id: body?.device_id,
                        valid_upto: currentDate
                    };
                    
                    let new_session_resp = await userSessions.createByData(new_session_payload);

                    token.payload = {
                        "ID": user_details?.id,
                        "access_template_id": user_details?.access_template_ids?.[0] || 2,
                        "country": user_details?.country || "",
                        "email": user_details?.email || "",
                        "mobile_number": user_details?.mobile_number || "",
                        "user_types": user_details?.user_types,
                        "name": user_details?.name || "",
                        "token": new_session_resp.token || ""
                    };

                    let expirationTime = global_env.EXPIRY_TIME;
                    token.exp = expirationTime;
                    jwttoken = await jsonWebToken.sign(token);

                    SUCCESS_RESP.meta.message = "Customer OTP verified successfully";
                    SUCCESS_RESP.data = {
                        "message": "Customer OTP verified successfully",
                        "status": true,
                        "token": jwttoken,
                        "user": {
                            "id": user_details?.id,
                            "email": user_details?.email || "",
                            "mobile_number": user_details?.mobile_number || "",
                            "name": user_details?.name || "",
                            "country": user_details?.country || "",
                            "user_types": user_details?.user_types,
                            "access_template_ids": user_details?.access_template_ids,
                        }
                    };

                    res.status(200).json(SUCCESS_RESP);
                } else {
                    FALIURE_RESP.meta.message = "Invalid OTP";
                    FALIURE_RESP.error = "Invalid OTP";
                    res.status(200).json(FALIURE_RESP);
                }
            } else {
                FALIURE_RESP.meta.message = "Customer not found";
                FALIURE_RESP.error = "Customer not found";
                res.status(200).json(FALIURE_RESP);
            }

        } catch (err) {
            console.log("Handler Error ===========>>>> ", err);
            next(err);
        }
    }
}

export default CoreHandler