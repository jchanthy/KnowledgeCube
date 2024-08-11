import mongoose from "mongoose";

const skillSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    level: {
        type: String,
        enum: ["Beginner", "Intermediate", "Advanced", "Expert"],
    },
    experienceYears: {
        type: Number,
    },
    certifications: [String],
    tags: [String],
});

export default mongoose.model("Skill", skillSchema);
