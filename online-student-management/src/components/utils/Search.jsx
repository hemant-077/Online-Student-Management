const Search = ({ search, setSearch }) => {
  return (
    <div className="w-full md:w-1/2">
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          type="search"
          role="searchbox"
          placeholder="Search students..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="
            w-full
            px-4 py-3
            rounded-lg
            bg-gray-900
            text-gray-200
            placeholder-gray-500
            border border-gray-700
            focus:outline-none
            focus:ring-2
            focus:ring-blue-500
            focus:border-blue-500
            transition
          "
        />
      </form>
    </div>
  );
};

export default Search;
