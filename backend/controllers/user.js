import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import User from "../models/user.js";
import nodemailer from "nodemailer";

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


        console.log(user);

        await user.checkPassword(password);
        await user.updateLoggedIn();
        return Promise.resolve(user);
    } catch (error) {
        return Promise.reject(error);
    }
};

export const registerUser = async (req, res) => {
    try {
        const {name, email, password} = req.body;

        // Check if the User already exists with the provided email
        const existingUser = await User.findOne({email});
        if (existingUser) {
            return res.status(400).json({message: 'User already exists with this email'});
        }

        // Hash the User's password and security answer
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create a new User
        const user = new User({
            name,
            email,
            password: hashedPassword,

        });

        // Save the User to the database
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

        // Check if the User exists
        const user = await User.findOne({email});

        if (!user) {
            return res.status(401).json({message: 'User not found'});
        }

        // Compare the provided password with the stored hashed password
        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (!isPasswordValid) {
            return res.status(401).json({message: 'Invalid credentials'});
        }


        // Generate a JWT token with User data in the payload
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

export const updateUser = async (req, res) => {
    try {
        const {_id} = req.params;
        const {password, ...body} = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        const updatedUserData = {...body, password: hashedPassword};

        const updatedUser = await User.findByIdAndUpdate(_id, updatedUserData, {new: true});

        if (!updatedUser) {
            return res.status(404).json({message: 'User not found'});
        }

        res.status(200).json({message: 'User updated successfully', user: updatedUser});
    } catch (error) {
        console.error(error);
        res.status(500).json({message: 'Internal server error'});
    }
};
export const getUser = async (req, res) => {
    console.log(req.body);
    try {
        const userId = req.params._id;
        const user = await User.findById(userId);

        if (!user) {
            return res.status(404).json({message: 'User not found'});
        }

        res.status(200).json({user});

    } catch (error) {
        console.error(error);
        res.status(500).json({message: 'Internal server error'});
    }
};

export const forgetPassword = (req, res) => {
    const {email} = req.body;

    // Generate a random password reset token
    const token = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);

    // Send the password reset email
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'john.chanthy@gmail.com',
            pass: 'gdhi dyqo uotw tccp',
        },
    });

    const mailOptions = {
        from: 'john.chanthy@gmail.com',
        to: email,
        subject: 'Password Reset Request',
        html: `<p>You have requested to reset your password. Please click the following link to reset your password: <a href="${process.env.REACT_API_HOST}/reset-password?token=${token}">Reset Password</a></p>`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            res.status(500).json({success: false, error: 'Error sending password reset email'});
        } else {
            console.log('Email sent: ' + info.response);
            res.json({success: true});
        }
    });
};

export const getUsers = async (req, res) => {
    try {
        const users = await User.find();
        const totalUsers = users.length;
        res.status(200).json({users, total: totalUsers});
    } catch (error) {
        console.error(error);
        res.status(500).json({message: 'Internal server error'});
    }

}

export const deleteUser = async (req, res) => {
    console.log(req.params._id);
    const userId = req.params._id;
    try {
        const user = await User.findByIdAndDelete({_id: userId});
        console.log(user);
        if (!user) {
            return res.status(404).json({message: 'User not found'});
        }
        res.status(200).json({message: 'User deleted successfully'});
    } catch (error) {
        console.error(error);
        res.status(500).json({message: 'Internal server error'});
    }
}
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
            return resolve(!!user);
        } catch {
            return reject(false);
        }
    });
