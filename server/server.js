require('dotenv').config();
const mongoose = require('mongoose');
const express = require('express');
const portNumber = process.env.PORT;

// express app
const app = express();
const workoutRoutes = require('./routes/workouts');

// middleware
app.use(express.json());

app.use((req, res, next) => {
	console.log(req.path, req.method);
	next();
});

// routes
app.use('/api/workouts/', workoutRoutes);

// connect to db
mongoose
	.connect(process.env.MONGO_URI)
	.then(() => {
		// listen for requests
		app.listen(portNumber, () => {
			console.log(`connected to db and listening on port ${portNumber}`);
		});
	})
	.catch((error) => {
		console.log(error);
	});
