import {Router} from "express";
import home from "../home/home.js";
import Dashboard from "./dashboard.js";
import protectRoute, {generateToken} from "../../utils/protectRoute.js";

const router = Router();

router.get("/", home);
router.get('/dashboard', protectRoute("/admin/login"),
    (req, res, next) => {
        req.csrfToken = () => generateToken(req);
        next();
    }, Dashboard);

export default router;