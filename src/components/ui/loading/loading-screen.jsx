function LoadingScreen() {
  return (
    <div className="flex flex-row m-auto justify-center py-20">
      <h1 className="text-center items-center mt-32 font-bold text-2xl">
        Fetching Pokémons...
      </h1>
      <img src="http://a.top4top.net/p_1990j031.gif" alt="" />
    </div>
  );
}

export default LoadingScreen;
