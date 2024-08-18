import {loginAdmin} from "../../controllers/user.js";

const login = async (req, res) => {
    try {
        const {email, password} = req.body;
        const user = await loginAdmin({email, password});
        const sessionData = {
            id: user._id,
            name: user.name,
            email: user.email,
            lastLoggedIn: user.lastLoggedIn,
        };
        req.session.user = sessionData;
        res.json({message: 'Login successful', user: sessionData});
    } catch (error) {
        res.status(401).json({message: 'Invalid credentials'});
    }
};

export default login;