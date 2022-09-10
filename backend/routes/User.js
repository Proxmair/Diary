import express from "express";
import {login,logout,getUser,myProfile,addAbout,addService,updateSocials} from '../controllers/User.js';
import {isAuthenticated} from '../middleware/auth.js'
export const userRouter=express.Router();
userRouter.route("/login").post(login);
userRouter.route("/logout").get(logout);
userRouter.route("/user").get(getUser);
userRouter.route("/me").get(isAuthenticated, myProfile);

userRouter.route("/admin/about/add").post(isAuthenticated,addAbout);
userRouter.route("/admin/service/add").post(isAuthenticated,addService);


userRouter.route("/admin/socials/update").put(isAuthenticated,updateSocials);
