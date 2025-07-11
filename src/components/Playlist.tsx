function Playlist() {
  const artists = [
    "Radiohead",
    "Mk.gee",
    "Kendrick Lamar",
    "Arctic Monkeys",
    "Phoebe Bridgers",
    "Tame Impala",
    "Frank Ocean",
    "Tyler, The Creator",
    "Billie Eilish",
  ];

  return (
    <div className="relative h-screen text-yellow-400">
      {/* Scrollable Main Section */}
      <main
        className="h-full overflow-y-scroll snap-y snap-mandatory flex flex-col items-center"
        style={{
          scrollBehavior: "smooth",
          paddingBottom: "80px", // ensures last item isn't hidden under footer
        }}>
        {artists.map((artist) => (
          <div
            key={artist}
            className="snap-center min-h-[100vh] flex items-center text-4xl font-bold">
            {artist}
          </div>
        ))}
      </main>
    </div>
  );
}

export default Playlist;
