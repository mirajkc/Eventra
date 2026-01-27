import express, { Router } from 'express';
import validator from '../middleware/validator.middleware.js';
import { changePasswordDTO, emailDTO, forgotPassDTO, loginDTO, OTPDTO, registerDTO } from '../rules/auth.rules.js';
import authController from '../controller/auth.controller.js';
import authorize from '../middleware/authorize.middleware.js';
const authRouter = express.Router();
authRouter.post('/register', validator(registerDTO), authController.register);
authRouter.post('/login', validator(loginDTO), authController.login);
authRouter.post('/refresh-token', authController.generateAccessToken);
authRouter.get('/logout', authorize({}), authController.logout);
authRouter.post('/get-forgot-password-otp', validator(emailDTO), authController.getForgotPassword);
authRouter.post('/verify-forgotpass-otp', validator(OTPDTO), authController.verifyForgotPass);
authRouter.post('/forgot-password', validator(forgotPassDTO), authController.forgotPassword);
authRouter.post('/change-password', authorize({}), validator(changePasswordDTO), authController.changePassword);
export default authRouter;
//# sourceMappingURL=auth.route.js.map