import Course from "../models/course.js";
import multer from "multer";


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
        res.json({courses, total: courses.length});
    } catch (error) {
        console.error(error);
        res.status(500).json({error: 'Server Error'});
    }
};

export const getCourseById = async (req, res) => {
    try {
        const course = await Course.findById(req.params.id);
        if (!course) {
            return res.status(404).json({error: 'Courses not found'});
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
            return res.status(404).json({error: 'Courses not found'});
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
            return res.status(404).json({error: 'Courses not found'});
        }
        res.json({message: 'Courses deleted successfully'});
    } catch (error) {
        console.error(error);
        res.status(500).json({error: 'Server Error'});
    }
}

export const getCoursesByUserId = async (req, res) => {
    try {
        const courses = await Course.find({user: req.params.userId});
        res.json(courses);
    } catch (error) {
        console.error(error);
        res.status(500).json({error: 'Server Error'});
    }

}

const upload = multer({
    dest: 'public/uploads' // Destination directory for uploaded images
});

export const storeImage = async (req, res) => {
    try {
        const {title, description, tags, badge} = req.body;

        // Use upload.single('image') as middleware (not nested)
        upload.single('image/*')(req, res, async (err) => {
            if (err) {
                console.error(err);
                return res.status(500).json({error: 'Upload failed'});
            }

            const imageUrl = req.file ? req.file.path : ''; // Handle cases where no image is uploaded

            const newCourse = new Course({
                title,
                description,
                tags,
                badge,
                imageUrl,
            });

            const savedCourse = await newCourse.save();
            res.status(201).json(savedCourse);
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({
            error:
                'Server Error'
        });
    }
};

export const getCourseBySearch = async (req, res) => {
    const {searchQuery} = req.query;
    try {
        const title = new RegExp(searchQuery, 'i');
        const courses = await Course.find({title});
        res.json(courses);
    } catch (error) {
        console.error(error);
        res.status(500).json({error: 'Server Error'});
    }

}

export const getCourseByName = async (req, res) => {
    try {
        const course = await Course.find({title: req.params.name});
        res.json(course);
    } catch (error) {
        console.error(error);
        res.status(500).json({error: 'Server Error'});
    }
}
