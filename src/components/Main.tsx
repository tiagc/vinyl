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
    <div className="flex flex-col gap-2 p-4 items-left">
      {artists.map((artist) => (
        <div key={artist} className="text-white text-5xl">
          {artist}
        </div>
      ))}
    </div>
  );
}

export default Player;
