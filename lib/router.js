"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const route_1 = __importDefault(require("./app/v1/auth/route"));
const route_2 = __importDefault(require("./app/v1/country/route"));
const route_3 = __importDefault(require("./app/v1/property/route"));
const route_4 = __importDefault(require("./app/v1/category/route"));
const route_5 = __importDefault(require("./app/v1/listed_for/route"));
const route_6 = __importDefault(require("./app/v1/reviews/route"));
const route_7 = __importDefault(require("./app/v1/testimonials/route"));
const router = express_1.default.Router();
router.use("/auth", route_1.default);
router.use("/country", route_2.default);
router.use("/property", route_3.default);
router.use("/category", route_4.default);
router.use("/listed_for", route_5.default);
router.use("/reviews", route_6.default);
router.use("/testimonials", route_7.default);
exports.default = router;
//# sourceMappingURL=router.js.map