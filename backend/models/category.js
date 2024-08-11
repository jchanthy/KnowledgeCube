import mongoose from "mongoose";

const {Schema, model} = mongoose;
const categorySchema = Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String
    }
});

const Category = model('Category', categorySchema);
export default Category;