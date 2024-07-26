import {Router} from "express";
import jwtProtection from "../middleware/jwtProtection.js";
import {getUser, loginUser, registerUser, updateUser,} from "../controllers/user.js";

const router = Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.put("/update/:_id", jwtProtection, updateUser);
router.get("/:userId", jwtProtection, getUser);

export default router;
