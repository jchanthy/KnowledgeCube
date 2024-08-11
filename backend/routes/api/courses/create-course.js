import Course from "../../../models/course.js";

export const createCourse = async (req, res) => {
    try {
        const courseData
            = req.body;
        const newCourse = new Course(courseData);
        const savedCourse = await newCourse.save();
        res.status(201).json(savedCourse);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
}

export default createCourse;