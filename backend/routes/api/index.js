import {Router} from "express";
import catchAll from "./catch-all.js";
import userRoutes from "./users/index.js"
import {loginUser, registerUser} from "../../controllers/userController.js";
import userRoles from "./userRoles/index.js";
import {searchSkills} from "../../controllers/skillController.js";
import courseRoutes from "./courses/index.js";
import userPermissions from "./permissions/index.js";

const router = Router();

router.use("/users", userRoutes);
router.use("/courses", courseRoutes);
router.use('/permissions', userPermissions);
router.post("/signup", registerUser)
router.post("/login", loginUser);
router.use('/roles', userRoles);

router.get('/skills', searchSkills);
router.use(catchAll);

export default router;
