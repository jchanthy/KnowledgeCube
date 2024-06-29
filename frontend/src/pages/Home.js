import Footer from "../pages/footer.js";
import Header from "../pages/header.js";
import {Link} from "react-router-dom";

const Home = () => {
    return (
        <>
            <div className='bg-white flex flex-col min-h-screen'>
                <div className='relative isolate'>
                    <Header/>
                    <div
                        className='absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80'
                        aria-hidden='true'>

                    </div>
                    <div className='mx-auto max-w-2xl py-32'>
                        <div className='hidden sm:mb-8 sm:flex sm:justify-center'>
                            <div
                                className='relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20'>
                                Announcing our next round of funding.{" "}
                                <Link
                                    to='/'
                                    className='font-semibold text-indigo-600'>
									<span
                                        className='absolute inset-0'
                                        aria-hidden='true'
                                    />
                                    Read more <span aria-hidden='true'>&rarr;</span>
                                </Link>
                            </div>
                        </div>
                        <div className='text-center'>
                            <h1 className='text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl'>
                                Learn Anywhere, Anytime: The Power of Online Learning
                            </h1>
                            <p className='mt-6 text-lg leading-8 text-gray-600'>
                                Online learning empowers professionals, students, and curious
                                minds with flexible, diverse courses accessible anytime,
                                anywhere.
                            </p>
                            <div className='mt-10 flex items-center justify-center gap-x-6'>
                                <Link
                                    to='/'
                                    className='rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'>
                                    Get started
                                </Link>
                                <Link
                                    to='/learn-more'
                                    className='text-sm font-semibold leading-6 text-gray-900'>
                                    Learn more <span aria-hidden='true'>→</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div
                        className='absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]'
                        aria-hidden='true'>
                    </div>
                </div>
                <Footer/>
            </div>
        </>
    );
};

export default Home;
