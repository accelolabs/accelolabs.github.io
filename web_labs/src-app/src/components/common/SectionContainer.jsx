export default function SectionContainer({ left, right }) {
  return (
    <section className="
      grid
      grid-cols-1
      md:grid-cols-2
      gap-4
      border
      border-white/50
      p-6
      rounded-lg
    ">
      {left}
      {right}
    </section>
  );
}
