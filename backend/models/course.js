import mongoose from 'mongoose';

const {Schema, model} = mongoose;
const courseSchema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,

        required: true
    },
    instructor: {
        type: Schema.Types.ObjectId,
        ref: 'Instructor',
        required: true
    },
    category: {
        type: Schema.Types.ObjectId,
        ref: 'Category',
        required: true
    },
    difficultyLevel: {
        type: String,
        enum: ['beginner', 'intermediate', 'advanced']
    },
    duration: {
        type: Number, // In hours or minutes
    },
    prerequisites: [String], // Array of prerequisite course titles or IDs
    price: {
        type: Number,
        default: 0
    },
    imageUrl: {
        type: String
    },
    modules: [
        {
            title: String,
            description: String,
            lessons: [{
                title: String,
                content: String,
                videoUrl: String // Or other media formats
            }]
        }
    ],
    ratings: [
        {
            user: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'User'
            },
            rating: {
                type: Number,
                min: 1,
                max: 5
            }
        }
    ],
    reviews: [
        {
            user: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'User'

            },
            text: String,
            createdAt: {type: Date, default: Date.now}
        }
    ],
    enrollments: [
        {
            user: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'User'
            },
            enrolledDate: {type: Date, default: Date.now}
        }
    ],
    progress: [
        {
            user: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'User'
            },
            completedLessons: [{type: mongoose.Schema.Types.ObjectId, ref: 'Lesson'}],
            quizScores: [{
                quizId: {type: mongoose.Schema.Types.ObjectId, ref: 'Quiz'},
                score: Number
            }]
        }
    ]
}, {timestamps: true});

const Course = model('Course', courseSchema);

export default Course;
