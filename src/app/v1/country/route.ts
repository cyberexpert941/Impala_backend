//@ts-nocheck
import { Router } from 'express';
import authentication from '../../../shared/middleware/authentication';
import Controller from './handler';
import { validateCreateCountry, validateUpdateCountry } from '../../../shared/middleware/validation/country';

const newController = new Controller();
const router = new Router();

//========================== usage allocation ================================================================================
router.post('/create', authentication, validateCreateCountry, newController.create)
router.post('/upsert', authentication, validateUpdateCountry, newController.upsert)
router.post('/:id/update', authentication, validateUpdateCountry, newController.update)
//router.delete('/:id/delete', authentication, newController.delete)
router.get('/get/:id', authentication, newController.get)
router.get('', authentication, newController.list)
router.get('/get_all', newController.list_all)

export default router