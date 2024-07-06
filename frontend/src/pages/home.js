import Footer from "../components/footer.js";
import Header from "../components/header.js";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="grid grid-cols-12 gap-5">
        <div className="col-span-12 md:flex-col">
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
                  <Link to="/courses">Explore Courses</Link>
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
