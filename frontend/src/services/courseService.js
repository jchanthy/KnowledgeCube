import axios from 'axios';

const courseService = {
    // Create a new course
    createCourse: async (courseData) => {
        try {
            const response = await axios.post('/api/courses/create', courseData);
            return response.data;
        } catch (error) {
            console.error(error);
            throw error;
        }
    },

    // Get all courses
    getCourses: async () => {
        try {
            const response = await axios.get('/api/courses');
            return response.data;
        } catch (error) {
            console.error(error);
            throw error;
        }
    },

    // Get a course by ID
    getCourseById: async (id) => {
        try {
            const response = await axios.get(`/api/courses/${id}`);
            return response.data;
        } catch (error) {
            console.error(error);
            throw error;
        }
    },

    // Update a course
    updateCourse: async (id, courseData) => {
        try {
            const response = await axios.put(`/api/courses/${id}`, courseData);
            return response.data;
        } catch (error) {
            console.error(error);
            throw error;
        }
    },

    // Delete a course
    deleteCourse: async (id) => {
        try {
            const response = await axios.delete(`/api/courses/${id}`);
            return response.data;
        } catch (error) {
            console.error(error);
            throw error;
        }
    },


    getEnrolledCoursesByUserId: async (userId) => {
        try {
            const response = await axios.get(`/api/courses/enrolled/${userId}`);
            return response.data;
        } catch (error) {
            console.error(error);
            throw error;
        }
    }
};

export default courseService;