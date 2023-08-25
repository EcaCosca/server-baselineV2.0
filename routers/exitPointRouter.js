import { Router } from 'express';
import { getExits, getSingleExit } from '../controllers/exitPointControllers.js';

const exitPointRouter = Router();

exitPointRouter.route('/all').get(getExits)

exitPointRouter.route('/:id').get(getSingleExit)


export default exitPointRouter;