import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const artists = [
  { name: "Kilo Kish", title: "", img: "" },
  { name: "Hypnostic", title: "", img: "" },
  { name: "Big Red Machine", title: "", img: "" },
  { name: "Mk.gee", title: "", img: "" },
  { name: "Groove is in the", title: "", img: "" },
  { name: "Deee-Lite", title: "", img: "" },
  { name: "Lose it", title: "", img: "" },
  { name: "SWMRS", title: "", img: "" },
  { name: "Fishmans", title: "ナイトクルージング", img: "" },
  { name: "Venq Tolep", title: "", img: "" },
  { name: "Robag Wruhme", title: "", img: "" },
  { name: "Frank Ocean", title: "blond", img: "/blond_cover.jpeg" },
  { name: "Charcoal Baby", title: "", img: "" },
  { name: "Blood Orange", title: "", img: "" },
  { name: "Chemistry", title: "", img: "" },
  { name: "Hooky", title: "", img: "" },
  { name: "Archy Marshall", title: "", img: "" },
  { name: "Sessa", title: "", img: "" },
  { name: "Radiohead", title: "", img: "" },
  { name: "Memory of 95", title: "", img: "" },
  { name: "Earth Boys", title: "", img: "" },
  { name: "Toro y Moi", title: "", img: "" },
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
      // Do not update clickedIndex here
    };

    container.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      container.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = (index: number) => {
    if (index === currentIndex) {
      setClickedIndex(clickedIndex === index ? null : index);
    }
  };

  return (
    <div className="relative h-screen">
      <main
        ref={containerRef}
        className="h-full overflow-y-scroll snap-y snap-mandatory flex flex-col items-start scrollbar-hide px-6 pt-[50vh] pb-[50vh]"
        style={{ scrollBehavior: "smooth" }}>
        {artists.map((artist, index) => {
          const isActive = index === currentIndex;
          const isClicked = clickedIndex === index;
          const showDetail = isActive && isClicked;

          return (
            <div
              key={index}
              ref={(el) => {
                itemRefs.current[index] = el;
              }}
              onClick={() => {
                if (isActive) handleClick(index);
              }}
              className="relative snap-center w-full py-4 pr-4 flex items-start justify-start">
              {/* Reserve fixed space for detail to avoid height jump */}
              <div className="absolute left-0 top-0 h-24 w-36 flex items-center gap-4 pointer-events-none">
                <AnimatePresence mode="wait">
                  {showDetail && (
                    <motion.img
                      src={artist.img}
                      alt={artist.name}
                      initial={{ x: -40, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      exit={{ x: -40, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="w-24 h-24 grayscale object-cover pointer-events-auto"
                    />
                  )}
                </AnimatePresence>
              </div>

              <motion.div
                layout
                animate={{
                  x: showDetail ? 115 : 0,
                  scale: isActive ? 1.1 : 1,
                }}
                transition={{
                  duration: 0.3,
                  ease: "easeInOut",
                }}
                className="flex flex-col z-10">
                <div
                  className={`text-3xl tracking-tight select-none ${
                    isActive ? "text-white" : "text-gray-400"
                  } ${isActive ? "cursor-pointer" : "cursor-default"}`}>
                  {artist.name}
                </div>

                {/* Reserve space for subtitle, so height doesn't jump */}
                <div className="h-6">
                  <AnimatePresence>
                    {showDetail && (
                      <motion.div
                        key="subtitle"
                        initial={{ y: -10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -10, opacity: 0 }}
                        transition={{ duration: 0.2, delay: 0.2 }}
                        className="text-gray-400 text-base mt-1">
                        {artist.title}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            </div>
          );
        })}
      </main>
    </div>
  );
}

export default Playlist;
