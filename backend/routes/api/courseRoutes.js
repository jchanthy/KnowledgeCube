import {Router} from 'express';
import {
    createCourse,
    deleteCourse,
    getCourseById,
    getCourseByName,
    getCourseBySearch,
    getCourses,
    getCoursesByUserId,
    storeImage,
    updateCourse
} from "../../controllers/course.js";

const router = Router();

router.get('/', getCourses);
router.post('/create', createCourse);
router.post('/image/upload', storeImage);
router.get('/:id', getCourseById);
router.get('/:courseName', getCourseByName);
router.put('/:id', updateCourse);
router.delete('/:id', deleteCourse);
router.get('/enrolled/:userId', getCoursesByUserId);
router.get('/search/:searchTerm', getCourseBySearch);

export default router;
