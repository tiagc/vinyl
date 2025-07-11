import { useEffect, useRef, useState } from "react";

function Playlist() {
  const artists = [
    "Kilo Kish",
    "Hypnostic",
    "Big Red Machine",
    "Groove is in the",
    "Deee-Lite",
    "Lose it",
    "SWMRS",
    "Venq Tolep",
    "Robag Wruhme",
    "Frank Ocean",
    "Charcoal Baby",
    "Blood Orange",
    "Chemistry",
    "Jennifer Touch",
    "Memory of 95",
    "Earth Boys",
  ];

  const containerRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const children = Array.from(container.children);
      const middle = container.offsetHeight / 2;

      const distances = children.map((child) => {
        const rect = (child as HTMLElement).getBoundingClientRect();
        const center = rect.top + rect.height / 2;
        return Math.abs(middle - center);
      });

      const closestIndex = distances.indexOf(Math.min(...distances));
      setCurrentIndex(closestIndex);
    };

    container.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      container.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="relative h-screen font-mono">
      <main
        ref={containerRef}
        className="h-full overflow-y-scroll snap-y snap-mandatory flex flex-col items-center scrollbar-hide px-4"
        style={{ scrollBehavior: "smooth", paddingBottom: "80px" }}>
        {artists.map((artist, index) => (
          <div
            key={index}
            className={`snap-center py-4 text-3xl whitespace-pre-line transition-all duration-200 ${
              index === currentIndex
                ? "text-purple-500 scale-110"
                : "text-yellow-400"
            }`}>
            {artist}
          </div>
        ))}
      </main>
    </div>
  );
}

export default Playlist;
