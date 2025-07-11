import { LucideFastForward, LucideRewind } from "lucide-react";

export default function Footer() {
  return (
    <footer className="fixed bottom-0 w-full">
      <div className="flex justify-between p-4">
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
