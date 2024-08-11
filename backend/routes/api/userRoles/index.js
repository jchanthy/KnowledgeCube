import {Router} from "express";
import getRoles from "./get-roles.js";
import getRole from "./create-role.js";


const router = Router();

router.route('/')
    .get(getRoles)
    .post(getRole);

export default router;