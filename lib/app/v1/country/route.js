"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//@ts-nocheck
const express_1 = require("express");
const authentication_1 = __importDefault(require("../../../shared/middleware/authentication"));
const handler_1 = __importDefault(require("./handler"));
const country_1 = require("../../../shared/middleware/validation/country");
const newController = new handler_1.default();
const router = new express_1.Router();
//========================== usage allocation ================================================================================
router.post('/create', authentication_1.default, country_1.validateCreateCountry, newController.create);
router.post('/upsert', authentication_1.default, country_1.validateUpdateCountry, newController.upsert);
router.post('/:id/update', authentication_1.default, country_1.validateUpdateCountry, newController.update);
//router.delete('/:id/delete', authentication, newController.delete)
router.get('/get/:id', authentication_1.default, newController.get);
router.get('', authentication_1.default, newController.list);
router.get('/get_all', newController.list_all);
exports.default = router;
//# sourceMappingURL=route.js.map