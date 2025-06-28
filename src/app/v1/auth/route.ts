//@ts-nocheck

import express from 'express';
import CoreHandler from './handler';
import authentication from "../../../shared/middleware/authentication";

const router = express.Router();
const newHandler = new CoreHandler();

router.post('/create', authentication, newHandler.createCoreUser);
router.post('/:id/update', authentication, newHandler.updateCoreUser); 
router.delete('/:id/delete', authentication, newHandler.deleteCoreUser); 
router.get('/get/:id', authentication, newHandler.getCoreUser);
router.get('', authentication, newHandler.listCoreUser) 

router.post('/login', newHandler.Login) // check email or mobile_number
router.post('/verify_otp', newHandler.Verify) // check otp

router.post('/login_password', newHandler.loginWithPassword) // check email or mobile_number

router.post('/upload', newHandler.FileUpload) // upload file 

router.post('/change_password', newHandler.changePassword) // change password

// ========================= CUSTOMER SPECIFIC ROUTES =======================================================
router.post('/customer/signup', newHandler.customerSignUp) // Customer registration
router.post('/customer/signin', newHandler.customerSignIn) // Customer sign in with OTP
router.post('/customer/signin_password', newHandler.customerSignInWithPassword) // Customer sign in with password
router.post('/customer/verify_otp', newHandler.customerVerifyOTP) // Customer OTP verification
router.post('/customer/update', authentication, newHandler.customerUpdate) // Customer profile update

export default router;

//Roles

// { id: 1, name: "SUPER_ADMIN" },
// { id: 2, name: "CUSTOMER" },
// { id: 3, name: "COUNTRY_ADMIN" }, 
