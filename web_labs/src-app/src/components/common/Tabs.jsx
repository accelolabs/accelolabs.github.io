import { useRef } from "react";

export default function EditorTabs({ active, setActive, tabs }) {
  const containerRef = useRef(null);

  const scrollBy = (offset) => {
    containerRef.current?.scrollBy({ left: offset, behavior: "smooth" });
  };

  return (
    <div className="relative flex items-center">
      <button
        onClick={() => scrollBy(-150)}
        className="absolute left-0 z-10 bg-black text-white px-2 py-1 opacity-70 hover:opacity-100"
      >
        {"<"}
      </button>

      <div
        ref={containerRef}
        className="flex gap-4 overflow-x-auto whitespace-nowrap px-10 scroll-hidden"
      >
        {tabs.map((tab) => {
          const name = tab.name || tab;
          const label = tab.label || tab;
          return (
            <button
              key={name}
              onClick={() => setActive(name)}
              className={`uppercase px-3 py-1 transition ${
                active === name ? "underline" : "opacity-60 hover:opacity-100"
              }`}
            >
              {label}
            </button>
          );
        })}
      </div>

      <button
        onClick={() => scrollBy(150)}
        className="absolute right-0 z-10 bg-black text-white px-2 py-1 opacity-70 hover:opacity-100"
      >
        {">"}
      </button>
    </div>
  );
}
