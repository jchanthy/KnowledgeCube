import {Router} from "express";
import home from "../home/home.js";

const router = Router();

router.get("/", home);

export default router;