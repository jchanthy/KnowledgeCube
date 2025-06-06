import {Router} from 'express';
import {deleteUser, getUser, getUsers, loginUser, registerUser, updateUser, forgetPassword} from "../../controllers/user.js";

const router = Router();

router.get('/', getUsers);
router.get('/:_id', getUser);
router.post('/login', loginUser);
router.post('/register', registerUser);
router.post('/forget-password', forgetPassword);
router.put('/update/:_id', updateUser);
router.delete('/:_id', deleteUser);


export default router;
