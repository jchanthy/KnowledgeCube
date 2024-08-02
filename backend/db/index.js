import mongoose from "mongoose";

const connectToDb = () =>
    mongoose.connect(
        // `mongodb+srv://johnchanthy:r9j2MmcgmofhbTpa@cluster0.dmbxrtn.mongodb.net/`,
        `mongodb+srv://${process.env.ATLASUSER}:${process.env.ATLASPASSWORD}@${process.env.REACT_API_DB_HOST}/${process.env.REACT_API_DB_NAME}`,
        {useNewUrlParser: true, useUnifiedTopology: true},
    );

export default connectToDb;
