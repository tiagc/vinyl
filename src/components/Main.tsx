function Player() {
  let artists = [
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
    <div className="gap-4 p-4">
      {artists.map((artist) => (
        <div key={artist} className="text-white text-4xl py-2">
          {artist}
        </div>
      ))}
    </div>
  );
}

export default Player;
