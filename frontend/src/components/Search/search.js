const Search = () => {
    return (
        <>
            <div className="flex flex-1 w-80 items-center relative group">
                <div className="flex w-full justify-between">
                    <input autoComplete="off"
                           className="w-full pl-10 pr-10 h-10 text-sm font-normal bg-transparent border border-neutral-300 rounded-lg  focus-visible:outline-none px-10.5 text-black placeholder:text-neutral-500"
                           type="text"
                           placeholder="What you want to learn today?"
                           id="searchBox"/>
                    <div className="absolute left-3.5 top-1/2 -translate-y-1/2 h-5 cursor-pointer">
                        <svg className="h-5 w-5 text-neutral-500" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                             stroke-width="1.5">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"/>
                        </svg>
                    </div>
                </div>
                <div className="absolute z-[999] top-0 shadow-neutralShadow rounded mt-[38px] w-full ">
                    <div className="rounded w-full z-[999] bg-white hidden" id="searchList"></div>
                </div>
            </div>

        </>
    );
};
export default Search;
