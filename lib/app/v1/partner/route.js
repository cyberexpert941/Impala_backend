"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//@ts-nocheck
const express_1 = require("express");
const authentication_1 = __importDefault(require("../../../shared/middleware/authentication"));
const handler_1 = __importDefault(require("./handler"));
const newController = new handler_1.default();
const router = new express_1.Router();
//========================== usage allocation ================================================================================
router.post('/create', authentication_1.default, newController.create);
router.post('/upsert', authentication_1.default, newController.upsert);
router.post('/:id/update', authentication_1.default, newController.update);
router.delete('/:id/delete', authentication_1.default, newController.delete);
router.get('/get/:id', newController.get);
router.get('', authentication_1.default, newController.list);
router.get('/web/list/:country', newController.list_frontend);
exports.default = router;
//# sourceMappingURL=route.js.map