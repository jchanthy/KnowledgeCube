import {lazy} from "react";

const LearningPage = lazy(() => import("./components/LearningPage.js"));

const LearnerDashboard = () => {

    return (
        <div>
            <h1>Learner Dashboard</h1>
            <LearningPage/>
        </div>
    )

}
export default LearnerDashboard;