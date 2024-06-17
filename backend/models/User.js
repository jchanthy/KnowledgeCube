import { Schema, model } from "mongoose";

const userSchema = new Schema({
	fullName: { type: String, required: true },
	email: { type: String, required: true, unique: true },
	phoneNumber: { type: String },
	address: { type: String },
	gender: { type: String },
	dob: { type: Date },
	password: { type: String, required: true },
	balance: { type: Number },
	securityQuestion: {
		type: String,
		// required: true,
	},
	securityAnswer: {
		type: String,
		// required: true,
	},
	cardNumber: { type: Number, required: true, default: 0 },
});

const User = model("user", userSchema);
export default User;
