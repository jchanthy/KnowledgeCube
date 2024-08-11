import mongoose from "mongoose";

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
});

const User = model('User', userSchema);
export default User;
