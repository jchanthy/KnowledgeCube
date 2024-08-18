import Course from "../models/course.js";

export const createCourse = async (req, res) => {
    try {
        const {
            title,
            image,
            description,
            tags,
            badge
        } = req.body;

        const newCourse = new Course({
            title,
            image,
            description,
            tags,
            badge
        });

        const savedCourse = await newCourse.save();

        res.status(201).json(savedCourse);
    } catch (error) {
        console.error(error);
        res.status(500).json({error: 'Server Error'});
    }
};

export const getCourses = async (req, res) => {
    try {
        const courses = await Course.find();
        res.json(courses);
    } catch (error) {
        console.error(error);
        res.status(500).json({error: 'Server Error'});
    }
};

export const getCourseById = async (req, res) => {
    try {
        const course = await Course.findById(req.params.id);
        if (!course) {
            return res.status(404).json({error: 'Course not found'});
        }
        res.json(course);
    } catch (error) {
        console.error(error);
        res.status(500).json({error: 'Server Error'});
    }
}

export const updateCourse = async (req, res) => {
    try {
        const updatedCourse = await Course.findByIdAndUpdate(req.params.id, req.body, {new: true});
        if (!updatedCourse) {
            return res.status(404).json({error: 'Course not found'});
        }
        res.json(updatedCourse);
    } catch (error) {
        console.error(error);
        res.status(500).json({error: 'Server Error'});
    }
}

export const deleteCourse = async (req, res) => {
    try {
        const deletedCourse = await Course.findByIdAndDelete(req.params.id);
        if (!deletedCourse) {
            return res.status(404).json({error: 'Course not found'});
        }
        res.json({message: 'Course deleted successfully'});
    } catch (error) {
        console.error(error);
        res.status(500).json({error: 'Server Error'});
    }
}

export const storeImage = async (req, res) => {

    if (!req.files || Object.keys(req.files).length === 0) {
        return res.status(400).json({error: 'No files were uploaded.'});
    }

    const file = req.files.image;
    const imageBuffer = await file.arrayBuffer();
    const imageBase64 = Buffer.from(imageBuffer).toString('base64');

    const course = await Course.findById(req.params.id);
    if (!course) {
        return res.status(404).json({error: 'Course not found'});
    }

    course.image = imageBase64;

    await course.save();

    res.json({message: 'Image uploaded successfully'});

}