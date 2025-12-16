export default function TextContainer({ children }) {
  return (
    <div className="flex items-center text-lg leading-relaxed">
      {children}
    </div>
  );
}
