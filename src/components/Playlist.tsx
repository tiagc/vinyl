import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const artists = [
  { name: "Kilo Kish", img: "" },
  { name: "Hypnostic", img: "" },
  { name: "Big Red Machine", img: "" },
  { name: "Mk.gee", img: "" },
  { name: "Groove is in the", img: "" },
  { name: "Deee-Lite", img: "" },
  { name: "Lose it", img: "" },
  { name: "SWMRS", img: "" },
  { name: "Fishmans", img: "" },
  { name: "Venq Tolep", img: "" },
  { name: "Robag Wruhme", img: "" },
  { name: "Frank Ocean", img: "" },
  { name: "Charcoal Baby", img: "" },
  { name: "Blood Orange", img: "" },
  { name: "Chemistry", img: "" },
  { name: "Hooky", img: "" },
  { name: "Archy Marshall", img: "" },
  { name: "Sessa", img: "" },
  { name: "Radiohead", img: "" },
  { name: "Memory of 95", img: "" },
  { name: "Earth Boys", img: "" },
  { name: "Toro y Moi", img: "" },
];
function Playlist() {
  const containerRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [clickedIndex, setClickedIndex] = useState<number | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

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

  const handleClick = (index: number) => {
    setClickedIndex(index === clickedIndex ? null : index); // toggle
  };

  return (
    <div className="relative h-screen">
      <main
        ref={containerRef}
        className="h-full overflow-y-scroll snap-y snap-mandatory flex flex-col items-start scrollbar-hide px-6 pt-[50vh] pb-[50vh]"
        style={{ scrollBehavior: "smooth" }}>
        {artists.map((artist, index) => (
          <motion.div
            ref={(el) => {
              itemRefs.current[index] = el;
            }}
            key={index}
            onClick={() => {
              if (index === currentIndex) handleClick(index);
            }}
            className={`snap-center py-4 text-3xl tracking-tight select-none ${
              index === currentIndex
                ? "text-white scale-110 cursor-pointer"
                : "text-gray-400 scale-100 cursor-default"
            }`}
            animate={{
              x: clickedIndex === index ? 60 : 0,
              scale: index === currentIndex ? 1.1 : 1,
              color: index === currentIndex ? "#fff" : "#9ca3af",
            }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 30,
            }}>
            {artist.name}
          </motion.div>
        ))}
      </main>
    </div>
  );
}

export default Playlist;
