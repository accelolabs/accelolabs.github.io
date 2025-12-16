export default function BigContainer({ children }) {
  return (
    <div className="flex flex-col gap-3 border border-white/50 p-4 rounded-lg">
      {children}
    </div>
  );
}