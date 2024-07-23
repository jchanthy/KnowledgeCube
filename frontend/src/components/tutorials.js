import Footer from "../components/footer.js";
import Header from "../components/header.js";

const Tutorials = () => {
    return (
        <>
            <Header/>
            <div className="p-4">
                <h1 className="text-center text-xl  p-4">
                    Exclusive Tutorials For Your Learning.
                </h1>
                <h3 className="text-center">Resources For Your Learning.</h3>
                <div className="border-t border-gray-200 p-4"></div>
                <div className="grid md:grid-cols-3 gap-4 p-4">
                    <div className="w-full rounded overflow-hidden shadow-md mb-6">
                        <iframe
                            className="w-full h-48 object-cover"
                            src="https://www.youtube.com/embed/VIDEO_ID_1"
                            title="YouTube video"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">Video Title 1</div>
                            <p className="text-gray-700 text-base">
                                Short description of video 1
                            </p>
                        </div>
                    </div>
                    <div className="w-full rounded overflow-hidden shadow-md mb-6">
                        <iframe
                            className="w-full h-48 object-cover"
                            src="https://www.youtube.com/embed/VIDEO_ID_2"
                            title="YouTube video"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">Video Title 2</div>
                            <p className="text-gray-700 text-base">
                                Short description of video 2
                            </p>
                        </div>
                    </div>
                    <div className="w-full rounded overflow-hidden shadow-md mb-6">
                        <iframe
                            className="w-full h-48 object-cover"
                            src="https://www.youtube.com/embed/VIDEO_ID_3"
                            title="YouTube video"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">Video Title 3</div>
                            <p className="text-gray-700 text-base">
                                Short description of video 3
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    );
};
export default Tutorials;
