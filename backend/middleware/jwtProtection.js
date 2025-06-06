import {verifyToken as validateToken} from "../controllers/user.js";

const verifyToken = async (req, res, next) => {
    const authHeader = req.headers['Authorization'];

    if (!authHeader) {
        return res.status(403).send('Authorization header is required');
    }

    // Extract the token from the 'Bearer token' format
    const token = authHeader.split(' ')[1];

    if (!token) {
        return res.status(403).send('Token is required for authentication');
    }

    try {
        req.user = await validateToken(token);
        return next();
    } catch (err) {
        return res.status(401).send('Invalid Token');
    }
};

export default verifyToken;
