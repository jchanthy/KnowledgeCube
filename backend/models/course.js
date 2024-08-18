import mongoose from "mongoose";

const {Schema, model} = mongoose;
const courseSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: false
    },
    description: {
        type: String,
        required: true
    },
    tags: {
        type: [String],
        required: false
    },
    badge: {
        type: String,
        required: false
    }
}, {timestamps: true});

const Course = model('Course', courseSchema);
export default Course;