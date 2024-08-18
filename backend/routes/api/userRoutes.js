import {Router} from 'express';
import {getUser, getUsers, loginUser, registerUser, updateUser} from "../../controllers/user.js";

const router = Router();

router.get('/', getUsers);
router.get('/:id', getUser);
router.post('/login', loginUser);
router.post('/register', registerUser);
router.get('/forget-password', getUser);
router.put('/update/:_id', updateUser);


export default router;
