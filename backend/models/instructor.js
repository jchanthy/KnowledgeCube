import mongoose from "mongoose";

const {Schema, model} = mongoose;
const instructorSchema = new Schema({
    name: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    courses: [{type: Schema.Types.ObjectId, ref: 'Course'}],
});

const Instructor = model('Instructor', instructorSchema);

export default Instructor;