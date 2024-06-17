import { Router } from "express";
import jwtProtection from "../middleware/jwtProtection.js";
const router = Router();
import {
	registerUser,
	loginUser,
	updateUser,
	getUser,
} from "../controllers/userController.js";

router.post("/register", registerUser);
router.post("/login", loginUser);
router.put("/update/:_id", jwtProtection, updateUser);
router.get("/:userId", jwtProtection, getUser);

export default router;
