import Header from "./Header.js"
import {Route, Routes} from 'react-router-dom'
import routes from '../../routes/dashboard/index.js';
import {lazy, useEffect, useRef} from 'react'
import {useSelector} from "react-redux";

const Page404 = lazy(() => import('../../components/pageNotFound.js'))


function PageContent() {
    const mainContentRef = useRef(null);
    const {pageTitle} = useSelector((state) => state.header);


    // Scroll back to top on new page load
    useEffect(() => {
        mainContentRef.current.scroll({
            top: 0,
            behavior: "smooth"
        });
    }, [pageTitle])

    return (
        <div className="drawer-content flex flex-col ">
            <Header/>
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
    )
}


export default PageContent
