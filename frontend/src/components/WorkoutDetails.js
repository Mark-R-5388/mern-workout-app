const WorkoutDetails = ({ workout }) => {
	return (
		<div className='workout-details'>
			<h3>
				<strong>{workout.title}</strong>
			</h3>
			<p>
				<strong>Sets:</strong> {workout.sets}
			</p>
			<p>
				<strong>Reps:</strong> {workout.reps}
			</p>
			<p>
				<strong>Weight(pounds):</strong> {workout.load}
			</p>
			<p>{workout.createdAt}</p>
		</div>
	);
};

export default WorkoutDetails;
