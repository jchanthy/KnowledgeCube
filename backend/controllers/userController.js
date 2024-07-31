import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import User from "../models/user.js";

const sign = (obj) => {
    return new Promise((resolve, reject) => {
        jwt.sign(obj, process.env.JWT_SECRET, (error, token) => {
            if (error) return reject(error);
            return resolve(token);
        });
    });
};

const verify = (token) =>
    new Promise((resolve, reject) => {
        jwt.verify(token, process.env.JWT_SECRET, (error) => {
            if (error) return reject(error);
            return resolve();
        });
    });

export const signUpAdmin = async ({name, email, password}) => {
    try {
        await User.create({name, email, password, isAdmin: true});
        return Promise.resolve();
    } catch (error) {
        return Promise.reject({error});
    }
};
export const loginAdmin = async ({email, password}) => {
    try {
        const user = await User.findOne({email, isAdmin: true});
        await user.checkPassword(password);
        await user.updateLoggedIn();
        return Promise.resolve(user);
    } catch (error) {
        return Promise.reject(error);
    }
};

export const registerUser = async (req, res) => {
    try {
        const {name, email, password, role} = req.body;

        console.log(role);
        // Check if the user already exists with the provided email
        const existingUser = await User.findOne({email});
        if (existingUser) {
            return res.status(400).json({message: 'User already exists with this email'});
        }

        // Hash the user's password and security answer
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create a new user
        const user = new User({
            name,
            email,
            password: hashedPassword,
            role: role
        });

        // Save the user to the database
        await user.save();
        res.status(201).json({message: 'User registered successfully', user});
    } catch (error) {
        console.error(error);
        res.status(500).json({message: 'Internal server error'});
    }
};

export const loginUser = async (req, res) => {
    try {
        const {email, password} = req.body;

        // Check if the user exists
        const user = await User.findOne({email});

        if (!user) {
            return res.status(401).json({message: 'User not found'});
        }

        // Compare the provided password with the stored hashed password
        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (!isPasswordValid) {
            return res.status(401).json({message: 'Invalid credentials'});
        }


        // Generate a JWT token with user data in the payload
        const token = jwt.sign(
            {
                _id: user._id,
                email: user.email,
                name: user.name,
            },
            process.env.JWT_SECRET
        );

        res.status(200).json({
            message: 'Login successful',
            token,
            user: {
                _id: user._id,
                email: user.email,
                name: user.name,
            },
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({message: 'Internal server error'});
    }
};
export const verifyToken = async (token) => {
    try {
        const user = jwt.decode(token);
        const findUser = await User.findOne({email: user.email});

        if (!findUser) return Promise.reject({error: "Unauthorized"});
        await verify(token);
    } catch (error) {
        return Promise.reject({error: "Unauthorized"});
    }
};

export const verifyUser = (email) =>
    new Promise(async (resolve, reject) => {
        try {
            const user = await User.findOne({email});
            return resolve(user ? true : false);
        } catch {
            return reject(false);
        }
    });
