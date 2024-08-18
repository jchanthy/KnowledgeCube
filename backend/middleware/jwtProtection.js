import verify from "../routes/api/verify.js";

const verifyToken = (req, res, next) => {
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
        req.user = verify(token, process.env.JWT_SECRET);
    } catch (err) {
        return res.status(401).send('Invalid Token');
    }
    return next();
};

export default verifyToken;
