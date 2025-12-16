export default function ItemItem({ item, onChange }) {
  return (
    <div className="flex flex-col gap-2">
      <div>
        <label className="text-sm">Name:</label>
        <input
          className="border border-white/50 bg-black text-white p-1 w-full"
          value={item.name}
          placeholder="Item Name"
          onChange={(e) => onChange({ ...item, name: e.target.value })}
        />
      </div>
      
      <div>
        <label className="text-sm">Type:</label>
        <input
          className="border border-white/50 bg-black text-white p-1 w-full"
          value={item.type}
          placeholder="Type"
          onChange={(e) => onChange({ ...item, type: e.target.value })}
        />
      </div>

      <div>
        <label className="text-sm">Value:</label>
        <input
          className="border border-white/50 bg-black text-white p-1 w-full"
          value={item.value}
          placeholder="Value"
          onChange={(e) => onChange({ ...item, value: e.target.value })}
        />
      </div>
    </div>
  );
}
