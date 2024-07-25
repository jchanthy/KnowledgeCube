import {Router} from "express";
import loginUser from "./login-user.js";
import verify from "./verify.js";
import {jwtValidation, loginUserValidation, signUpUserValidation,} from "../../utils/validation.js";
import catchAll from "./catch-all.js";
import {signUpUser} from "../../controllers/user.js";

const router = Router();

// router.get("/posts", servePostsFromCache(), getPosts);
// router
//     .route("/post/:postId?")
//     .get(servePostFromCache(), getPost)
//     .post(protectApi, storePostValidation, storePost)
//     .delete(protectApi, deletePost);
router.post("/login", loginUserValidation, loginUser);
router.post("/signup", signUpUserValidation, signUpUser);
router.post("/verify", jwtValidation, verify);
router.use(catchAll);

export default router;
