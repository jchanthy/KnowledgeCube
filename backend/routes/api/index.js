import {Router} from "express";
import catchAll from "./catch-all.js";
import userRoutes from "./userRoutes.js"
import {loginUser, registerUser} from "../../controllers/userController.js";
import getRoles from "./get-roles.js";
import getRole from "./get-role.js";

const router = Router();

router.use("/users", userRoutes)
router.post("/signup", registerUser)
router.post("/login", loginUser);
router.route('/roles')
    .get(getRoles)
    .post(getRole);
router.use(catchAll);

export default router;
