import {useEffect, useState} from "react";
import {MagnifyingGlassIcon} from "@heroicons/react/24/outline/index.js";
import axios from "axios";


const Search = () => {
    const [open, setOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");
    const [courses, setCourses] = useState([]);

    const navigate = (courseId) => {
        window.location.href = `/courses/${courseId}`;
    };

    useEffect(() => {
        setCourses([]);
    }, []);
    const handleSearch = async (event) => {
        event.preventDefault();

        try {
            const response = await axios.get(`/api/courses?search=${searchTerm}`);
            if (searchTerm) {
                const filteredCourses = (response.data.courses || []).filter((course) => course.title.toLowerCase().includes(searchTerm.toLowerCase()));
                setCourses(filteredCourses);
            } else {
                setCourses(response.data.courses || []);
            }
        } catch (error) {
            console.error('Error searching for courses:', error);
        }
    };


// Toggle the menu when control k is pressed

    useEffect(() => {
        const down = (e: KeyboardEvent) => {
            const input = document.querySelector(".input");
            if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
                e.preventDefault();
                if (!open) {
                    setOpen(true);
                }
                // set focus on input
                input?.focus();
            }
            // Close the modal when escape is pressed
            if (e.key === "Escape") {
                setOpen(false);
                if (input) {
                    input.blur();
                }
            }
        };
        document.addEventListener("keydown", down);
        return () => document.removeEventListener("keydown", down);
    }, [open]);
    return (
        <div>
            {/* Open the modal using document.getElementById('ID').showModal() method */}
            <button
                className="btn btn-ghost drawer-button w-40"
                onClick={() => {

                    const myModel = document.getElementById(
                        "my_modal_2"
                    );
                    if (myModel) {
                        myModel.showModal();
                    }
                }}
            >
                <MagnifyingGlassIcon className="h-5 w-5"/>
                <kbd className="kbd kbd-xs">ctrl</kbd>+
                <kbd className="kbd kbd-xs">k</kbd>
            </button>
            <dialog id="my_modal_2" className={`modal ${open ? "modal-open" : ""}`}>
                <div className="modal-box ">
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-auto">
                            <MagnifyingGlassIcon
                                className="h-5 w-5 text-gray-400"
                                aria-hidden="true"
                            />
                        </div>
                        <input
                            type="text"
                            placeholder="Search ..."
                            name={'search'}
                            className="input input-bordered block pl-10"
                            style={{width: "100%"}}
                            onChange={handleSearch}
                            onFocus={(e) => e.target.select()}
                        />
                    </div>
                    {/* New row for search results or recent searches */}
                    <div className="divider"></div>
                    <div>
                        <div className="overflow-x-auto">


                            {courses.map((course) => (
                                <ul>
                                    <button
                                        onClick={() => navigate(course._id)}
                                        className="link link-hover"
                                    >
                                        {course.title}
                                    </button>
                                </ul>
                            ))}


                        </div>
                    </div>
                </div>
                <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                </form>
            </dialog>
        </div>
    );
};
export default Search;
