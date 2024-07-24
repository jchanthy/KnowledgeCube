import mongoose from "mongoose";

const connectToDb = () =>
    mongoose.connect(
        // process.env.DB_URI,
        'mongodb+srv://johnchanthy:r9j2MmcgmofhbTpa@cluster0.dmbxrtn.mongodb.net/knowledge_cube',
        // `${process.env.DB_HOST}://${process.env.ATLASUSER}:${process.env.ATLASPASSWORD}@${process.env.DB_URI}/${process.env.DB_NAME}`,
        {},
    );

export default connectToDb;
