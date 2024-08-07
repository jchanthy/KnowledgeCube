import {Link} from "react-router-dom";

const PageNotFound = () => {
    return (
        <>
            <div className="grid min-h-screen place-content-center" data-new-gr-c-s-check-loaded="14.1075.0"
                 data-gr-ext-installed="">
                <div className="hero">
                    <div className="hero-content text-center">
                        <div className="max-w-md">
                            <h1 className="mb-5 text-5xl font-bold opacity-10 lg:text-7xl xl:text-9xl">Error</h1>
                            <p className="mb-5">Not Found</p>
                            <div className={'flex gap-5'}>
                                <Link to={"/"} className="btn btn-primary">Back to home page</Link>
                                <Link to={"/login"} className="btn bg-base-200 btn-outline">Login</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PageNotFound;
