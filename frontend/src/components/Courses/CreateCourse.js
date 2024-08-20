import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";
import axios from "axios";

const CreateCourse = () => {
    const navigate = useNavigate();
    const [courseData, setCourseData] = useState({
        title: '',
        description: '',
        instructor: '', // Assuming you have instructor data available
        category: '', // Assuming you have category data available
        difficultyLevel: '',
        duration: 0,
        prerequisites: [],
        price: 0,
        imageUrl: '',
        modules: [{title: '', description: '', lessons: [{title: '', content: '', videoUrl: ''}]}]
    });

    // Handle form input changes
    const handleChange = (event) => {
        const {name, value} = event.target;
        setCourseData({...courseData, [name]: value});
    };

    // Handle adding new modules
    const handleAddModule = () => {
        setCourseData({
            ...courseData,
            modules: [...courseData.modules, {
                title: '',
                description: '',
                lessons: [{title: '', content: '', videoUrl: ''}]
            }]
        });
    };

    // Handle adding new lessons
    const handleAddLesson = (moduleIndex) => {
        const updatedModules = [...courseData.modules];
        updatedModules[moduleIndex].lessons.push({title: '', content: '', videoUrl: ''});
        setCourseData({...courseData, modules: updatedModules});
    };

    // Handle form submission
    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            // Send course data to your backend API for creation
            const response = await axios.get('/api/courses');

            console.log(response);
            if (response.dat) {
                navigate('/courses'); // Redirect to course list
            } else {
                // Handle errors from the API
                console.error('Error creating course:', await response.text());
            }
        } catch (error) {
            console.error('Error creating course:', error);
        }
    };

    return (
        <div>
            <h1>Create Courses</h1>
            <form onSubmit={handleSubmit}>
                {/* Form fields for title, description, etc. */}
                <input type="text" name="title" value={courseData.title} onChange={handleChange}
                       placeholder="Courses Title" required/>
                {/* ... other form fields ... */}

                {/* Module creation section */}
                <h2>Modules</h2>
                {courseData.modules.map((module, index) => (
                    <div key={index}>
                        <h3>Module {index + 1}</h3>
                        <input type="text" name={`modules[${index}].title`} value={module.title} onChange={handleChange}
                               placeholder="Module Title" required/>
                        <input type="text" name={`modules[${index}].description`} value={module.description}
                               onChange={handleChange} placeholder="Module Description"/>

                        {/* Lesson creation section within modules */}
                        <h4>Lessons</h4>
                        {module.lessons.map((lesson, lessonIndex) => (
                            <div key={lessonIndex}>
                                <input type="text" name={`modules[${index}].lessons[${lessonIndex}].title`}
                                       value={lesson.title} onChange={handleChange} placeholder="Lesson Title"
                                       required/>
                                {/* ... other lesson input fields ... */}
                            </div>
                        ))}
                        <button type="button" onClick={() => handleAddLesson(index)}>Add Lesson</button>
                    </div>
                ))}
                <button type="button" onClick={handleAddModule}>Add Module</button>

                <button type="submit">Create Courses</button>
            </form>
        </div>
    );
};

export default CreateCourse;
