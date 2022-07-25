require('dotenv').config();
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

app.use('/api/workouts/', workoutRoutes);

// listen for requests
app.listen(portNumber, () => {
	console.log(`listening on port ${portNumber}`);
});
