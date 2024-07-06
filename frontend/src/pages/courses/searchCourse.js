import { useState } from "react";
import ListCourse from "./listCourse.js";

const SearchCourse = () => {
    const [search, setSearch] = useState('');
const course = [
    {
        id: 1,
        title: 'Course 1',
        description: 'Description 1',
    },
    {
        id: 2,
        title: 'Course 2',
        description: 'Description 2',
    },
    {
        id: 3,
        title: 'Course 3',
        description: 'Description 3',
    },
];
    return (
        <div>
            <ListCourse course={course} />
            <input
                type="text"
                placeholder="Search"
                className="input input-bordered w-full max-w-xs"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
        </div>
    );
}

export default SearchCourse;