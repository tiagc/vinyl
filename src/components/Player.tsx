import "../styles.css";
import PauseIcon from "./buttons/PauseIcon";
import RewindIcon from "./buttons/RewindIcon";

export default function Player() {
  return (
    <footer className="fixed bottom-0 z-50 w-full pb-safe">
      <div className="flex justify-between p-6 items-center">
        <div>
          <button>
            <RewindIcon className="text-white text-orange-500 size-8" />
          </button>
        </div>

        <div>
          <button>
            <PauseIcon className="text-white text-orange-500 size-8" />
          </button>
        </div>

        <div>
          <button>
            <RewindIcon className="text-white text-orange-500 size-8 scale-x-[-1]" />
          </button>
        </div>
      </div>
    </footer>
  );
}
