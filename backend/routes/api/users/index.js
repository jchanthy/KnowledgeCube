import {Router} from 'express';
import {forgetPassword, getUser, getUsers, loginUser, registerUser, updateUser} from "../../controllers/user.js";
import jwtProtection from "../../middleware/jwtProtection.js";

const router = Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/', getUsers);
router.post('/forget-password', forgetPassword);
router.put('/update/:_id', jwtProtection, updateUser);
router.put(`/update/:_id/image`, jwtProtection, updateUser);
router.get('/:userId', jwtProtection, getUser);

export default router;
