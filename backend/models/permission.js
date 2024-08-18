import mongoose from 'mongoose';

const {Schema, model} = mongoose;
const permissionSchema = new Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        // Assuming a User model
        required: true
    },
    permissions: [{
        action: {
            type: String,
            required: true
        },
        resource: {
            type: String,
            required: true
        }
    }],
    createdAt: {type: Date, default: Date.now},
    updatedAt: {type: Date, default: Date.now}
});

const Permission = model('Permission', permissionSchema);

export default Permission;