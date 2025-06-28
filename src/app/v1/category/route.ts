//@ts-nocheck
import { Router } from 'express';
import authentication from '../../../shared/middleware/authentication';
import Controller from './handler'; 

const newController = new Controller();
const router = new Router();

//========================== usage allocation ================================================================================
router.post('/create', authentication, newController.create)
router.post('/upsert', authentication, newController.upsert)
router.post('/:id/update', authentication, newController.update)
router.delete('/:id/delete', authentication, newController.delete)
router.get('/get/:id', authentication, newController.get)
router.get('', authentication, newController.list)
router.get('/get_all', newController.list_all)

export default router