import Header from "../../pages/header";
import React from "react";
import Footer from "../../pages/footer";

const courses = [
    {
        id: 1,
        title: "JavaScript Course",
        description: "Description of first product",
        price: 109,
    },
    {
        id: 2,
        title: "React Course",
        description: "Description of second product",
        price: 129,
    },
    {
        id: 3,
        title: "Vue Course",
        description: "Description of third product",
        price: 99,
    },
    // Add more products here...
];

const CourseList = ({course}) => (
    <>
        <div className='w-full rounded overflow-hidden shadow-md mb-6'>
            <img
                className='w-full h-48 object-cover'
                src='./images/image-1.jpg'
                alt={course.title}
            />
            <div className='px-6 py-4'>
                <div className='font-bold text-xl mb-2'>{course.title}</div>
                <p className='text-gray-700 text-base'>{course.description}</p>
            </div>
            <div className='px-6 pt-4 pb-2 border-t border-gray-200'>
                <div className='font-bold text-xl'>${course.price}</div>
            </div>
        </div>
    </>
);
const ProductsGrid = () => {
    return (
        <>
            <div className='bg-white flex flex-col min-h-screen'>
                <div className='relative isolate'>
                    <Header/>
                    <div className='grid lg:grid-cols-3 sm:grid-cols-1 gap-4 mx-auto max-w-7xl py-16 px-6 lg:px-8'>
                        {courses.map((product) => (
                            <CourseList
                                key={product.id}
                                course={product}
                            />
                        ))}
                    </div>
                </div>
                <Footer/>
            </div>
        </>
    );
};

export default ProductsGrid;
