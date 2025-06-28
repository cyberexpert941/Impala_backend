"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateUpdateCountry = exports.validateCreateCountry = void 0;
const express_validator_1 = require("express-validator");
const response_format_1 = require("../../utils/response_format");
exports.validateCreateCountry = [
    (0, express_validator_1.body)('country_name')
        .trim()
        .notEmpty()
        .withMessage('Country name is required')
        .isString()
        .withMessage('Country name must be a string'),
    (0, express_validator_1.body)('country_code')
        .trim()
        .notEmpty()
        .withMessage('Country code is required')
        .isString()
        .withMessage('Country code must be a string'),
    (0, express_validator_1.body)('country_currency')
        .optional()
        .isString()
        .withMessage('Country currency must be a string'),
    (0, express_validator_1.body)('country_timezone')
        .optional()
        .isString()
        .withMessage('Country timezone must be a string'),
    (0, express_validator_1.body)('sort_order')
        .optional()
        .isInt()
        .withMessage('Sort order must be an integer'),
    (0, express_validator_1.body)('is_active')
        .optional()
        .isBoolean()
        .withMessage('Is active must be a boolean'),
    (req, res, next) => {
        const errors = (0, express_validator_1.validationResult)(req);
        if (!errors.isEmpty()) {
            response_format_1.FALIURE_RESP.meta.message = 'Validation error';
            response_format_1.FALIURE_RESP.error.name = 'ValidationError';
            response_format_1.FALIURE_RESP.error.message = errors.array().map((err) => err.msg).join(', ');
            return res.status(400).json(response_format_1.FALIURE_RESP);
        }
        next();
    }
];
exports.validateUpdateCountry = [
    (0, express_validator_1.param)('id')
        .notEmpty()
        .withMessage('Country ID is required')
        .isInt()
        .withMessage('Country ID must be an integer'),
    (0, express_validator_1.body)('country_name')
        .optional()
        .trim()
        .isString()
        .withMessage('Country name must be a string'),
    (0, express_validator_1.body)('country_code')
        .optional()
        .trim()
        .isString()
        .withMessage('Country code must be a string'),
    (0, express_validator_1.body)('country_currency')
        .optional()
        .isString()
        .withMessage('Country currency must be a string'),
    (0, express_validator_1.body)('country_timezone')
        .optional()
        .isString()
        .withMessage('Country timezone must be a string'),
    (0, express_validator_1.body)('sort_order')
        .optional()
        .isInt()
        .withMessage('Sort order must be an integer'),
    (0, express_validator_1.body)('is_active')
        .optional()
        .isBoolean()
        .withMessage('Is active must be a boolean'),
    (req, res, next) => {
        const errors = (0, express_validator_1.validationResult)(req);
        if (!errors.isEmpty()) {
            response_format_1.FALIURE_RESP.meta.message = 'Validation error';
            response_format_1.FALIURE_RESP.error.name = 'ValidationError';
            response_format_1.FALIURE_RESP.error.message = errors.array().map((err) => err.msg).join(', ');
            return res.status(400).json(response_format_1.FALIURE_RESP);
        }
        next();
    }
];
//# sourceMappingURL=country.js.map