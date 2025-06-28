import { Request, Response, NextFunction } from 'express';
import { body, param, validationResult } from 'express-validator';
import { FALIURE_RESP } from '../../utils/response_format';

export const validateCreateCountry = [
  body('country_name')
    .trim()
    .notEmpty()
    .withMessage('Country name is required')
    .isString()
    .withMessage('Country name must be a string'),
  
  body('country_code')
    .trim()
    .notEmpty()
    .withMessage('Country code is required')
    .isString()
    .withMessage('Country code must be a string'),
  
  body('country_currency')
    .optional()
    .isString()
    .withMessage('Country currency must be a string'),
  
  body('country_timezone')
    .optional()
    .isString()
    .withMessage('Country timezone must be a string'),
  
  body('sort_order')
    .optional()
    .isInt()
    .withMessage('Sort order must be an integer'),
  
  body('is_active')
    .optional()
    .isBoolean()
    .withMessage('Is active must be a boolean'),

  (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      FALIURE_RESP.meta.message = 'Validation error';
      FALIURE_RESP.error.name = 'ValidationError';
      FALIURE_RESP.error.message = errors.array().map((err: any) => err.msg).join(', ');
      return res.status(400).json(FALIURE_RESP);
    }
    next();
  }
];

export const validateUpdateCountry = [
  param('id')
    .notEmpty()
    .withMessage('Country ID is required')
    .isInt()
    .withMessage('Country ID must be an integer'),
  
  body('country_name')
    .optional()
    .trim()
    .isString()
    .withMessage('Country name must be a string'),
  
  body('country_code')
    .optional()
    .trim()
    .isString()
    .withMessage('Country code must be a string'),
  
  body('country_currency')
    .optional()
    .isString()
    .withMessage('Country currency must be a string'),
  
  body('country_timezone')
    .optional()
    .isString()
    .withMessage('Country timezone must be a string'),
  
  body('sort_order')
    .optional()
    .isInt()
    .withMessage('Sort order must be an integer'),
  
  body('is_active')
    .optional()
    .isBoolean()
    .withMessage('Is active must be a boolean'),

  (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      FALIURE_RESP.meta.message = 'Validation error';
      FALIURE_RESP.error.name = 'ValidationError';
      FALIURE_RESP.error.message = errors.array().map((err: any) => err.msg).join(', ');
      return res.status(400).json(FALIURE_RESP);
    }
    next();
  }
]; 