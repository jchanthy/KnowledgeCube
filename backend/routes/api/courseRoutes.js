import {Router} from 'express';
import {createCourse, deleteCourse, getCourseById, getCourses, updateCourse} from "../../controllers/course.js";

const router = Router();

router.get('/', getCourses);
router.post('/create', createCourse);
router.get('/:id', getCourseById);
router.put('/:id', updateCourse);
router.delete('/:id', deleteCourse);

export default router;
