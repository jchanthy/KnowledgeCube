import express from 'express';
import { connect, connection } from 'mongoose';
import { urlencoded, json } from 'body-parser';
import { config } from 'dotenv';
import cors from 'cors';
config();

const app = express();

// Use the CORS middleware before defining your routes
app.use(cors());

// Middleware
app.use(urlencoded({ extended: true }));
app.use(json());

// Connect to MongoDB
// mongoose.Promise = global.Promise;
connect(process.env.DB_URI);
const db = connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

connection.on('error', (err) => {
  console.error('MongoDB connection error:', err);
});

// Routes
import apiRoutes from './routes/api'; // Import your API routes
app.use('/api', apiRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

// Start the server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
