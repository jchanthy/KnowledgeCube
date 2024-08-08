import {Link} from "react-router-dom";

const courses = [
    {
        title: 'Shoes!',
        image: 'https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp',
        description: 'If a dog chews shoes whose shoes does he choose?',
        tags: ['Fashion', 'Products'],
        badge: 'Free'
    },

    {
        title: 'Shoes!',
        image: 'https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp',
        description: 'If a dog chews shoes whose shoes does he choose?',
        tags: ['Fashion', 'Products'],
        badge: 'Free'
    },

    {
        title: 'Shoes!',
        image: 'https://images.pexels.com/photos/261316/pexels-photo-261316.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
        description: 'If a dog chews shoes whose shoes does he choose?',
        tags: ['Fashion', 'Products'],
        badge: 'NEW'
    },

    {
        title: 'Shoes!',
        image: 'https://images.pexels.com/photos/261316/pexels-photo-261316.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
        description: 'If a dog chews shoes whose shoes does he choose?',
        tags: ['Fashion', 'Products'],
        badge: 'NEW'
    },
    {
        title: 'Shoes!',
        image: 'https://images.pexels.com/photos/261316/pexels-photo-261316.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
        description: 'If a dog chews shoes whose shoes does he choose?',
        tags: ['Fashion', 'Products'],
        badge: 'NEW'
    },
    {
        title: 'Shoes!',
        image: 'https://images.pexels.com/photos/261316/pexels-photo-261316.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
        description: 'If a dog chews shoes whose shoes does he choose?',
        tags: ['Fashion', 'Products'],
        badge: 'NEW'
    },

    {
        title: 'Shoes!',
        image: 'https://images.pexels.com/photos/261316/pexels-photo-261316.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
        description: 'If a dog chews shoes whose shoes does he choose?',
        tags: ['Fashion', 'Products'],
        badge: 'NEW'
    },

    {
        title: 'Shoes!',
        image: 'https://images.pexels.com/photos/261316/pexels-photo-261316.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
        description: 'If a dog chews shoes whose shoes does he choose?',
        tags: ['Fashion', 'Products'],
        badge: 'NEW'
    },

    {
        title: 'Shoes!',
        image: 'https://images.pexels.com/photos/261316/pexels-photo-261316.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
        description: 'If a dog chews shoes whose shoes does he choose?',
        tags: ['Fashion', 'Products'],
        badge: 'NEW'
    },
];

const Courses = () => {
    return (
        <>
            <div className="hero bg-base-200">
                <div className="hero-content text-center">
                    <div className="max-w-md">
                        <h1 className="text-5xl font-bold">Explore Our Courses</h1>
                        <p className="py-6">
                            This course provides an overview of the basics of online learning and how it can be used to
                            enhance one's knowledge and skills. It covers topics such as course creation, course
                            management, and course discovery. By the end of the course, learners will have a solid
                            understanding of the benefits and capabilities of online learning.
                        </p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
            <div className={'divider'}></div>

            <div
                className={'grid lg:grid-cols-4 md:grid-cols-3 place-items-center justify-between sm:grid-cols-2 xs:grid-cols-1 items-center p-4  mb-5 gap-4'}>
                {courses.map((course, index) => (
                    <div key={index}
                         className="card bg-base-100 shadow-xl w-60 relative overflow-hidden transition-transform duration-300 hover:scale-105 hover:cursor-pointer">
                        <figure className={''}>
                            <img src={course.image} alt={course.title}/>
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">
                                {course.title}
                                <div className={`badge badge-secondary bg-primary`}>{course.badge}</div>
                            </h2>
                            <p>{course.description}</p>
                            <div className="card-actions justify-end">
                                {course.tags.map((tag, index) => (
                                    <div key={index} className="badge badge-outline hover:bg-primary">
                                        <Link to={'/tags'}>
                                            {tag}
                                        </Link>

                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

        </>
    );
};

export default Courses;