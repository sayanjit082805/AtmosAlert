export default function SearchBar({
  search,
  setSearch,
  handleSearch,
  handleKeyPress,
}) {
  return (
    <div className="w-[350px] items-center">
      <div className="relative flex items-center w-full h-12 rounded-lg focus-within:shadow-lg bg-slate-100 overflow-hidden">
        <div className="grid place-items-center h-full w-12 text-gray-300">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 mx-3 text-slate-800"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>

        <div className="flex rounded-md overflow-hidden w-full">
          <input
            className="h-12 w-full outline-none text-sm text-slate-600 rounded-r-none rounded-md bg-slate-100"
            type="text"
            name="search"
            placeholder="Enter city name"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            onKeyDown={handleKeyPress.bind()}
          />
          <button
            className="text-slate-100 bg-slate-700 px-6 font-bold rounded-r-md h-12 hover:bg-slate-600"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
}
