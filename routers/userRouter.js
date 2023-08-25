import { Router } from 'express';
import { userControllers } from "../controllers/userControllers";

const userRouter = Router();

userRouter.route('/:id').get(getUser)

export default userRouter;