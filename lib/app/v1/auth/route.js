"use strict";
//@ts-nocheck
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const handler_1 = __importDefault(require("./handler"));
const authentication_1 = __importDefault(require("../../../shared/middleware/authentication"));
const router = express_1.default.Router();
const newHandler = new handler_1.default();
router.post('/create', authentication_1.default, newHandler.createCoreUser);
router.post('/:id/update', authentication_1.default, newHandler.updateCoreUser);
router.delete('/:id/delete', authentication_1.default, newHandler.deleteCoreUser);
router.get('/get/:id', authentication_1.default, newHandler.getCoreUser);
router.get('', authentication_1.default, newHandler.listCoreUser);
router.post('/login', newHandler.Login); // check email or mobile_number
router.post('/verify_otp', newHandler.Verify); // check otp
router.post('/login_password', newHandler.loginWithPassword); // check email or mobile_number
router.post('/upload', newHandler.FileUpload); // upload file 
router.post('/change_password', newHandler.changePassword); // change password
// ========================= CUSTOMER SPECIFIC ROUTES =======================================================
router.post('/customer/signup', newHandler.customerSignUp); // Customer registration
router.post('/customer/signin', newHandler.customerSignIn); // Customer sign in with OTP
router.post('/customer/signin_password', newHandler.customerSignInWithPassword); // Customer sign in with password
router.post('/customer/verify_otp', newHandler.customerVerifyOTP); // Customer OTP verification
router.post('/customer/update', authentication_1.default, newHandler.customerUpdate); // Customer profile update
exports.default = router;
//Roles
// { id: 1, name: "SUPER_ADMIN" },
// { id: 2, name: "CUSTOMER" },
// { id: 3, name: "COUNTRY_ADMIN" }, 
//# sourceMappingURL=route.js.map