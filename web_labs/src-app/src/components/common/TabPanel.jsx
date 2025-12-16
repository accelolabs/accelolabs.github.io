export default function TabPanel({ active, name, children }) {
  const isActive = active === name;

  return (
    <div
      className={`
        transition-opacity duration-200
        ${isActive ? "opacity-100" : "opacity-0 pointer-events-none"}
      `}
      style={{ display: isActive ? "block" : "none" }}
    >
      {children}
    </div>
  );
}
