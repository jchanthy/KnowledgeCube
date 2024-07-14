import {NavLink} from "react-router-dom";

const Home = () => {
    return (
        <>
            <div className="grid grid-cols-12 gap-5">
                <div className="col-span-12 md:flex-col">
                    <div>
                        <div className="carousel rounded-box">
                            <div className="carousel-item">
                                <img
                                    src="https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg"
                                    alt="Burger"/>
                            </div>
                            <div className="carousel-item">
                                <img
                                    src="https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.jpg"
                                    alt="Burger"/>
                            </div>
                            <div className="carousel-item">
                                <img
                                    src="https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.jpg"
                                    alt="Burger"/>
                            </div>
                            <div className="carousel-item">
                                <img
                                    src="https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.jpg"
                                    alt="Burger"/>
                            </div>
                            <div className="carousel-item">
                                <img
                                    src="https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.jpg"
                                    alt="Burger"/>
                            </div>
                            <div className="carousel-item">
                                <img
                                    src="https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.jpg"
                                    alt="Burger"/>
                            </div>
                            <div className="carousel-item">
                                <img
                                    src="https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.jpg"
                                    alt="Burger"/>
                            </div>
                        </div>
                    </div>
                    <div className="hero bg-base-200 min-h-screen">

                        <div className="hero-content text-center">

                            <div className="max-w-md">
                                <h1 className="text-5xl font-bold">
                                    Learn Anywhere, Anytime: The Power of Online Learning
                                </h1>
                                <p className="py-6">
                                    Online learning empowers professionals, students, and curious
                                    minds with flexible, diverse courses accessible anytime,
                                    anywhere.
                                </p>
                                <button className="btn btn-primary">
                                    <NavLink to={'/courses'}>Explore Courses</NavLink>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;
