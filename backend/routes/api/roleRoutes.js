import {Router} from 'express';
import {getRole, getRoles, postRole} from "../../controllers/role.js";

const router = Router();

router.get('/', getRoles);
router.post('/post', postRole);
router.get('/:id', getRole);


export default router;
