import {Router} from 'express';
import {getJob, getJobs, postJob} from "../../controllers/job.js";

const router = Router();

router.get('/', getJobs);
router.get('/:id', getJob);
router.post('/post', postJob);


export default router;
