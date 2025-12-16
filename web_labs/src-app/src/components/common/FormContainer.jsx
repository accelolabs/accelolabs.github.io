export default function FormContainer({ children }) {
  return (
    <div className="flex flex-col gap-4 border border-white/50 p-3 rounded-lg">
      {children}
    </div>
  );
}
