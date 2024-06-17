import mongoose from "mongoose";

const connectToDb = () =>
	mongoose.connect(
		`mongodb+srv://${process.env.atlasUser}:${process.env.atlasPassword}@${process.env.DB_URI}`,
		{},
	);

export default connectToDb;
