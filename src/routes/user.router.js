import { Router } from "express";
import { cookie, file, params, Register, setCookie } from "../controllers/user.controller.js";
import { upload } from "../middlewares/multer.middleware.js";
import { acceeCookie } from "../middlewares/cookie.middleware.js";



const userRouter  = Router()


userRouter.route("/register").post(Register)
userRouter.route("/file").post( upload.single("file"), file)
userRouter.route("/param/:param").post(params)
userRouter.route("/cookie").get  (acceeCookie ,cookie)
userRouter.route("/set-cookie").get(setCookie)

export default userRouter;