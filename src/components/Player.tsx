import { LucideFastForward, LucideRewind } from "lucide-react";
import "../styles.css";

export default function Player() {
  return (
    <footer className="fixed bottom-0 z-50 bg-black w-full pb-safe">
      <div className="flex justify-between p-4 items-center">
        <div>
          <button>
            <LucideRewind className="text-white" />
          </button>
        </div>

        <div>
          <button>
            <span className="text-white">pause</span>
          </button>
        </div>

        <div>
          <button>
            <LucideFastForward className="text-white" />
          </button>
        </div>
      </div>
    </footer>
  );
}
