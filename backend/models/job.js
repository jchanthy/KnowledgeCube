import mongoose from 'mongoose';

const {Schema, model} = mongoose;

const jobSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true

    },
    location: {
        type: String,
        required: true
    },
    salary: {
        type: Number,
        required: true

    },
    category: {
        type: String,
        required: true
    },
    company: {
        type: String,
        required: true
    },
    contact: {
        type: String,
        required: true
    },
    // Additional fields as needed
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date
    }
});
const Job = model('Job', jobSchema);
export default Job;
