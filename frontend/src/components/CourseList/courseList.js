import React from "react";

const CourseList = ({ courses }) => {
	return (
		<div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
			{courses.map((course) => (
				<div
					key={course._id}
					className='card shadow-md p-4'>
					<h3>{course.title}</h3>
					<p>{course.description}</p>
					{/* Add link to lesson details page */}
				</div>
			))}
		</div>
	);
};

export default CourseList;
