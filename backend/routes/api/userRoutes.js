import {Router} from 'express';
import {loginUser, registerUser} from "../../controllers/userController.js";

const router = Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
// router.put('/update/:_id', jwtProtection, userController.updateUser);
// router.get('/:userId', jwtProtection, userController.getUser);

export default router;
