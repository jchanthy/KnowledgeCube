import {Route, Routes} from "react-router-dom";
import routes from "./routes/index.js";
import {lazy, useEffect, useRef} from "react";

const Page404 = lazy(() => import('../../components/pageNotFound.js'))

const LearnerContent = () => {
    const mainContentRef = useRef(null);
    useEffect(() => {
        mainContentRef.current.scroll({
            top: 0,
            behavior: "smooth"
        });
    }, [])
    return (
        <>
            <div className="drawer-content flex flex-col ">

                <main className="flex-1 overflow-y-auto md:pt-4 pt-4 px-6  bg-base-200" ref={mainContentRef}>
                    <Routes>
                        {
                            routes.map((route, key) => {
                                return (
                                    <Route
                                        key={key}
                                        exact={true}
                                        path={`${route.path}`}
                                        element={route.component}
                                    />
                                )
                            })
                        }

                        {/* Redirecting unknown url to 404 page */}
                        <Route path="*" element={<Page404/>}/>
                    </Routes>
                    <div className="h-16"></div>
                </main>
            </div>
        </>
    )
}

export default LearnerContent;