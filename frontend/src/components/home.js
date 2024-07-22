import {Link} from "react-router-dom";

const Home = () => {
    return (
        <div className="grid grid-cols-12 gap-5">
            <div className="col-span-12 md:flex-col">
                <div
                    className="hero min-h-screen"
                    style={{
                        backgroundImage: "url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)",
                    }}>
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-neutral-content text-center">
                        <div className="max-w-md">
                            <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                            <p className="mb-5">
                                Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi
                                exercitationem
                                quasi. In deleniti eaque aut repudiandae et a id nisi.
                            </p>
                            <button className="btn btn-primary">Get Started</button>
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
                            <Link className={'btn btn-primary'} to={'/courses'}>Explore Courses</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Home;