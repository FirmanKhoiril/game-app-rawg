const SearchBar = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit} className="flex grow relative">
      <input type="text" onChange={() => {}} className="py-2 px-4 peer  w-full flex outline-none bg-white/10 rounded-full" placeholder="Search Game" />
      <div className="absolute bg-black/20 peer-focus:hidden text-sm rounded-lg py-1 px-3 right-3 bottom-[5px]">
        <p>CTRL + Enter</p>
      </div>
    </form>
  );
};

export default SearchBar;
