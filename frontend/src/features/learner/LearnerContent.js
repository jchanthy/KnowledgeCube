import {Route, Routes} from "react-router-dom";
import routes from "./routes/index.js";
import {lazy, useRef} from "react";

const Page404 = lazy(() => import('../../pages/pageNotFound.js'))

const LearnerContent = () => {

    const mainContentRef = useRef(null);
    return (
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
    )
}

export default LearnerContent;