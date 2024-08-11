import mongoose from "mongoose";

const {Schema, model} = mongoose;

const roleSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String
    },
    permissions:
        [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Permission',
        }]

});
const Role = model('Role', roleSchema);
export default Role;