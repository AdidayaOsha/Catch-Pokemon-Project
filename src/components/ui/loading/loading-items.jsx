function LoadingItems() {
  return (
    <div>
      <div className="flex m-auto justify-center items-center py-20">
        <div>
          <h1 className="text-center items-center font-bold text-2xl">
            No Pokemons In Storage..
          </h1>
          <div>
            <a
              href="/"
              className="inline-block px-6 py-3 mt-6 text-sm text-white bg-black rounded"
            >
              Back to Pokédex
            </a>
          </div>
        </div>
        <img src="http://a.top4top.net/p_1990j031.gif" alt="" />
      </div>
    </div>
  );
}

export default LoadingItems;
