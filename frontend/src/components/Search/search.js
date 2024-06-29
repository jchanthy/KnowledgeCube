const Search = () => {
    return (
        <>
            <div className="relative flex items-center">
                <button type="button" className="absolute inset-y-0 left-0 flex items-center px-4 focus:outline-none">
                    <svg className="w-4 h-4 text-gray-500 fill-current" viewBox="0 0 20 20"
                         xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd"
                              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                              clipRule="evenodd"></path>
                    </svg>
                </button>
                <input type="text" id="search"
                       className="w-full px-8 mr-5 py-3 rounded-md border border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none"
                       placeholder="Search"/>
            </div>
        </>
    );
};
export default Search;
