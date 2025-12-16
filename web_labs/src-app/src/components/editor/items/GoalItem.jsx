export default function GoalItem({ goal, onChange }) {
  return (
    <div className="flex flex-col gap-2">
      <div>
        <label className="text-sm">Type:</label>
        <input
          className="border border-white/50 bg-black text-white p-1 w-full"
          value={goal.type}
          placeholder="Goal Type"
          onChange={(e) => onChange({ ...goal, type: e.target.value })}
        />
      </div>
      <div>
        <label className="text-sm">Value:</label>
        <input
          className="border border-white/50 bg-black text-white p-1 w-full"
          value={goal.value || ""}
          placeholder="Goal Value"
          onChange={(e) => onChange({ ...goal, value: e.target.value })}
        />
      </div>
    </div>
  );
}
