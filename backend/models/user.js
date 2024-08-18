import mongoose from 'mongoose';
import bcrypt from "bcrypt";

const {Schema, model} = mongoose;

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        unique: true,
        required: true,
    },
    password: {
        type: String,
        required:
            true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    lastLoggedIn: {
        type: Date,
        default: Date.now,
    },
    isAdmin: {
        type: Boolean,
        default: false,
    },
    role: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Role',
        required: false
    },
    profilePicture: {
        type: String, // URL or reference to image storage
    },
    bio: {
        type: String,
    },
    socialLinks: {
        type: [String], // Array of social media profiles
    },
    enrollments: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: 'Enrollment', // Reference to Enrollment model
    },
    completedCourses: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: 'Course', // Reference to Course model
    },
    notifications: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: 'Notification', // Reference to Notification model (optional)
    },
    skills: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Skill",
    }],
})

userSchema.pre("save", function (next) {
    if (!this.isModified("password")) {
        return next();
    }
    this.password = bcrypt.hash(this.password, 10);
    next();
});

userSchema.method.checkPassword = async function (password) {
    try {
        const match = await bcrypt.compare(password, this.password);
        if (match) {
            return Promise.resolve();
        }
        return Promise.resolve();
    } catch (error) {
        return Promise.reject(error);
    }
};

userSchema.method.updateLoggedIn = function () {
    return this.model("User").findOneAndUpdate(
        {
            email: this.email,
        },
        {
            lastLoggedIn: new Date(),
        },
    );
};

const User = model('User', userSchema);

export default User;