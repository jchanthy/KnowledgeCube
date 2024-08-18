import {verifyToken} from "../../controllers/user.js";

const verify = async (req, res) => {
    try {
        const {token} = req.body;

        await verifyToken(token);
        res.json({status: true});
    } catch (error) {
        res.status(403).json(error);
    }
};

export default verify;