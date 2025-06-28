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
router.get('/get/:id', authentication_1.default, newHandler.getCoreUser);
router.get('', authentication_1.default, newHandler.listCoreUser);
router.post('/login', newHandler.Login); // check email or mobile_number
router.post('/verify_otp', newHandler.Verify); // check otp
router.post('/upload', newHandler.FileUpload); // upload file
exports.default = router;
//# sourceMappingURL=route.js.map