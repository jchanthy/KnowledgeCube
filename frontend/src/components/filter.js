const Filter = (props) => {


    const handleSubmit = (e) => {
        e.preventDefault();
        props.onSearch(e.target.value)
    }
    return (
        <>
            <div className="join">
                <div>
                    <div>
                        <input className="input input-bordered join-item" placeholder="Search"
                               onChange={(e) => props.onSearch(e.target.value)}
                        />
                    </div>
                </div>
                <select className="select select-bordered join-item">
                    <option>All</option>
                    <option>Course Name</option>
                    <option>Date</option>
                    <option>Tags</option>
                </select>
                <div className="indicator">
                    <button className="btn join-item btn-primary"
                            onSubmit={handleSubmit}
                    >Search
                    </button>
                </div>
            </div>
        </>
    )
}

export default Filter;