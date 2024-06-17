import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { fileURLToPath } from "url";
import { join, dirname } from "path";

// user import
import connectToDb from "./db/index.js";
import home from "./routes/home/index.js";
import apiRoutes from "./routes/api.js"; // Import your API routes

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = process.env.PORT || 5001;
// Use the CORS middleware before defining your routes
app.use(cors());
dotenv.config();

app.use("/assets", express.static(join(__dirname, "public")));
app.use(express.static(join(__dirname, "public", "build")));

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Connect to MongoDB
// mongoose.Promise = global.Promise;
// connect(process.env.DB_URI);
// const db = connection;
// db.on("error", console.error.bind(console, "MongoDB connection error:"));
// db.once("open", () => {
// 	console.log("Connected to MongoDB");
// });

// connection.on("error", (err) => {
// 	console.error("MongoDB connection error:", err);
// });

// Routes
app.use("/api", apiRoutes);
app.use("/", home);

// Error handling middleware
// app.use((err, req, res, next) => {
// 	console.error(err.stack);
// 	res.status(500).send("Something went wrong!");
// });

// Start the server
Promise.all([connectToDb()])
	.then(() =>
		app.listen(port, () => console.log(`Blog Chef is cooking on port ${port}`)),
	)
	.catch((error) => {
		console.error(`MongoDB Atlas Error: ${error}`);
		process.exit();
	});

// const PORT = process.env.PORT || 3001;
// app.listen(PORT, () => {
// 	console.log(`Server is running on port ${PORT}`);
// });
