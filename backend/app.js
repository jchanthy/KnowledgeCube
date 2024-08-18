import express from "express";
// import {createWriteStream} from "fs";
// import morgan from "morgan";
import compression from "compression";
import home from "./routes/home/index.js";
import admin from "./routes/admin/index.js";
import api from "./routes/api/index.js";
import connectToDb from "./db/index.js";
import {fileURLToPath} from "url";
import {dirname, join} from "path";
import cors from "cors";
import helmet from "helmet";
import session from "./session/index.js";
import bodyParser from "body-parser";
import dotenv from 'dotenv';
import mongoose from "mongoose";

dotenv.config();

const app = express();

const __dirname = dirname(fileURLToPath(import.meta.url));
const logFile = join(__dirname, "knowledge-cube.log");
const PORT = process.env.PORT || 3000;

app.use(
    helmet({
        contentSecurityPolicy: {
            directives: {
                defaultSrc: ["'self'"],
                scriptSrc: ["'self'", "'nonce-ps0QMWhuej5oqzobisuQnA=='"],
                objectSrc: ["'self'"]
                // Add other directives as needed
            }
        }
    })
);
app.use(compression());
app.use("/assets", express.static(join(__dirname, "client", "static")));
app.use(express.static(join(__dirname, "client")));
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use("/admin", session(app));

app.use(cors());

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// app.use(morgan(":method - :url - :date - :response-time ms"));
// app.use(
//     morgan(":method - :url - :date - :response-time ms", {
//         stream: createWriteStream(logFile, {flags: "a"}),
//     }),
// );
// app.options('*', cors());

app.set("view engine", "pug");

app.use("/admin", admin);
app.use("/api", api);
app.use("/", home);


// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
});
console.log(process.env.VARIABLE_NAME);
Promise.all([connectToDb()])
    .then(() =>
        app.listen(PORT, () => console.log(`Knowledge Cube is running on port ${PORT}! ${mongoose.connection.host}`))
    )
    .catch((error) => {
        console.error(`MongoDB Atlas Error: ${error.message} `);
        process.exit();
    });
