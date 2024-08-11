import {Router} from "express";
import getPermission from "./get-permission.js";
import createPermission from "./create-permission.js";
import getOnePermission from "./get-one-permission.js";
import updatePermission from "./update-permission.js";


const router = Router();

router.get('/', getPermission);
router.get('/:userId', getOnePermission);
router.put('/update/:userId', updatePermission);
router.post('/create', createPermission);

export default router;