import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const Hero = () => {
    const [images, setImages] = useState([]);
    useEffect(() => {
        setImages([
            {
                id: 1,
                url: "https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp",
                title: "Hello there",
                description: "Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.",
                button: "Get Started",
                link: "/courses",
            },
            {
                id: 2,
                url: "https://img.daisyui.com/images/stock/photo-1507358522601-9f71e620c44e.webp",
                title: "Learn Anywhere, Anytime: The Power of Online Learning",
                description: "Online learning empowers professionals, students, and curious minds with flexible, diverse courses accessible anytime, anywhere.",
                button: "Explore Courses",
                link: "/courses",
            },
        ]);

    }, []);

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }, []);

    return (
        <div className="grid grid-cols-12 gap-5">
            <div className="col-span-12 md:flex-col">

                {images.map((image) => (
                    <div key={image.id}>
                        <div
                            className="hero min-h-screen"
                            style={{
                                backgroundImage: `url(${image.url})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                            }}
                        >
                            <div className="hero-overlay bg-opacity-60"></div>
                            <div className="hero-content text-neutral-content text-center">
                                <div className="max-w-md">
                                    <h1 className="mb-5 text-5xl font-bold">{image.title}</h1>
                                    <p className="mb-5">{image.description}</p>
                                    <Link
                                        className="btn btn-primary"
                                        to={image.link}
                                    >
                                        {image.button}
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}

            </div>
        </div>
    );
};

export default Hero;