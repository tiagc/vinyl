import { LucideLoader, Unlock } from "lucide-react";

function Player() {
  return (
    <div>
      <div className="px-4 pb-4">
        <h1 className="text-3xl font-medium tracking-tighter">
          Konfiguration Läutmaschine
        </h1>
      </div>
      <section className="flex justify-between px-4">
        <button
          type="button"
          className="flex flex-col w-40 aspect-square gap-4 rounded-lg border border-emerald-300 bg-emerald-50 p-4 text-left text-emerald-900">
          <div className="flex w-full items-center justify-between gap-2">
            <LucideLoader className="size-6 animate-spin text-emerald-600" />
            <Unlock className="size-6 text-emerald-600" />
          </div>
          <div>
            <h2 className="text-lg font-semibold tracking-tight">Glocke 1</h2>
            <p className="text-sm font-medium text-emerald-950">LM5 • #17</p>
          </div>
        </button>
      </section>
    </div>
  );
}

export default Player;
