export default function ChestItem({ chest, onChange, rooms = [], items = [] }) {
  const update = (patch) => onChange({ ...chest, ...patch });

  const Select = ({ label, value, options, onChange }) => (
    <div>
      <label className="text-sm">{label}</label>
      <select
        className="border border-white/50 bg-black text-white p-1 w-full"
        value={value || ""}
        onChange={(e) => onChange(e.target.value || null)}
      >
        <option value="">None</option>
        {options.map((o) => (
          <option key={o.id} value={o.id}>
            {o.name || "Unnamed"}
          </option>
        ))}
      </select>
    </div>
  );

  return (
    <div className="flex flex-col gap-2">
      <div>
        <label className="text-sm">Name</label>
        <input
          className="border border-white/50 bg-black text-white p-1 w-full"
          value={chest.name}
          onChange={(e) => update({ name: e.target.value })}
        />
      </div>

      <Select
        label="Room"
        value={chest.roomId}
        options={rooms}
        onChange={(roomId) => update({ roomId })}
      />

      <Select
        label="Item"
        value={chest.itemId}
        options={items}
        onChange={(itemId) => update({ itemId })}
      />
    </div>
  );
}
