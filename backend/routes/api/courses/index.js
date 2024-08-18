import {Router} from 'express';
import getCourses from "./get-courses.js";
import createCourse from "./create-course.js";

const router = Router();

router.get('/', getCourses);
router.post('/create', createCourse);

export default router;
