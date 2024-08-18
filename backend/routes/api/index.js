import {Router} from "express";
import catchAll from "./catch-all.js";
import jobRoutes from "./jobRoutes.js";
import courseRoutes from "./courseRoutes.js";
import {storeImage} from "../../controllers/course.js";
import userRoutes from "./userRoutes.js";

const router = Router();

router.use("/users", userRoutes);
router.use("/jobs", jobRoutes);
router.use("/courses", courseRoutes);
router.post('/image/upload', storeImage);
router.use(catchAll);

export default router;
