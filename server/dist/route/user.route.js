import express, { Router } from 'express';
import authorize from '../middleware/authorize.middleware.js';
import userController from '../controller/user.controller.js';
import { upload } from '../middleware/uploader.middleware.js';
import validator from '../middleware/validator.middleware.js';
import { userUpdateDTO } from '../rules/user.rules.js';
const userRouter = express.Router();
// ===== User Profile =====
userRouter.get('/me', authorize({}), userController.getLoggedInUser);
userRouter.post('/update-user', authorize({}), upload.single('image'), validator(userUpdateDTO), userController.updateUser);
userRouter.delete('/delete-user', authorize({}), userController.deleteUser);
userRouter.get('/me/getdetails', authorize({}), userController.getUserDetails);
export default userRouter;
//# sourceMappingURL=user.route.js.map