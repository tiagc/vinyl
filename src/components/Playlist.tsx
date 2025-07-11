import { useEffect, useRef, useState } from "react";

const artists = [
  "Kilo Kish",
  "Hypnostic",
  "Big Red Machine",
  "Mk.gee",
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

function Playlist() {
  const containerRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // scroll to middle artist on load
    const middleIndex = Math.floor(artists.length / 2);
    const middleItem = itemRefs.current[middleIndex];
    if (middleItem) {
      middleItem.scrollIntoView({ behavior: "auto", block: "center" });
    }

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
    <div className="relative h-screen">
      <main
        ref={containerRef}
        className="h-full overflow-y-scroll snap-y snap-mandatory flex flex-col items-start scrollbar-hide px-6 pt-[50vh] pb-[50vh]"
        style={{ scrollBehavior: "smooth" }}>
        {artists.map((artist, index) => (
          <div
            ref={(el) => {
              itemRefs.current[index] = el;
            }}
            key={index}
            className={`snap-center py-4 text-4xl tracking-tight transition-all duration-200 ${
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
