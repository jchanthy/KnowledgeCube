import express from 'express';
import { join } from 'path';
import { createWriteStream } from 'fs';
import morgan from 'morgan';
import session from 'express-session';
import compression from 'compression';
import home from './routes/home';
import admin from './routes/admin';
import api from './routes/api';
import connectToDb from './db';

const app = express();
const logFile = join(__dirname, 'blogchef.log');

const port = process.env.PORT || 3001;

app.use(compression());
app.use('/assets', express.static(join(__dirname, 'public')));
app.use(express.static(join(__dirname, 'public', 'client')));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(
	'/admin',
	session({
		name: 'sessId',
		secret: process.env.sessionSecret,
		resave: false,
		saveUninitialized: true,
		cookie: {
			secure: app.get('env') === 'production' ? true : false,
			httpOnly: true,
			maxAge: 18000000, // 5 hours
		},
	}),
);
app.use(morgan(':method - :url - :date - :response-time ms'));
app.use(
	morgan(':method - :url - :date - :response-time ms', {
		stream: createWriteStream(logFile, { flags: 'a' }),
	}),
);

app.set('view engine', 'ejs');

app.use('/admin', admin);
app.use('/api', api);
app.use('/', home);

Promise.all([connectToDb()])
	.then(() =>
		app.listen(port, () => console.log(`Server is running on port ${port}`)),
	)
	.catch((error) => {
		console.error(`MongoDB Atlas Error: ${error}`);
		process.exit();
	});
