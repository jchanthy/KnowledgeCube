import {Router} from 'express';
import {getUser, loginUser, registerUser, updateUser} from "../../../controllers/userController.js";
import jwtProtection from "../../../middleware/jwtProtection.js";

const router = Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.put('/update/:_id', jwtProtection, updateUser);
router.put(`/update/:_id/image`, jwtProtection, updateUser);
router.get('/:userId', jwtProtection, getUser);

export default router;
