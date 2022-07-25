const express = require('express');

const router = express.Router();

// Get all workouts
router.get('/', (req, res) => {
	res.json({ mssg: 'GET all workouts' });
});

//Get single workout
router.get('/:id', (req, res) => {
	res.json({ mssg: 'GET single workout' });
});

// Post a workout
router.post('/', (req, res) => {
	res.json({ mssg: 'Posted a single new workout' });
});

// Delete a workout
router.delete('/:id', (req, res) => {
	res.json({ mssg: 'Deleted a workout' });
});

// Update a workout
router.patch('/:id', (req, res) => {
	res.json({ mssg: 'Updated a previous workout' });
});

module.exports = router;
