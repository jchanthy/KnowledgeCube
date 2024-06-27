const Search = () => {
	return (
		<div class='flex flex-1 w-80 items-center rounded-full relative group'>
			<input
				id='search'
				name='search'
				type='text'
				autocomplete='search'
				required=''
				class='min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6'
				placeholder='Search Course'></input>
		</div>
	);
};
export default Search;
