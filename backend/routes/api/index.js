import {Router} from "express";
import catchAll from "./catch-all.js";
import userRoutes from "./userRoutes.js"
import {loginUser, registerUser} from "../../controllers/userController.js";

const router = Router();

router.use("/users", userRoutes)
router.post("/signup", registerUser)
router.post("/login", loginUser);
// router.post("/register", SignupUser);
// router.post("/verify", VerifyToken);
router.use(catchAll);

export default router;
