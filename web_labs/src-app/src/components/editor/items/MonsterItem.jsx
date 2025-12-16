export default function MonsterItem({ monster, onChange }) {
  return (
    <div className="flex flex-col gap-2">
      <div>
        <label className="text-sm">Name:</label>
        <input
          className="border border-white/50 bg-black text-white p-1 w-full"
          value={monster.name}
          placeholder="Monster Name"
          onChange={(e) => onChange({ ...monster, name: e.target.value })}
        />
      </div>

      <div>
        <label className="text-sm">Health:</label>
        <input
          type="number"
          className="border border-white/50 bg-black text-white p-1 w-full"
          value={monster.hp}
          onChange={(e) =>
            onChange({ ...monster, hp: Number(e.target.value) })
          }
        />
      </div>

      <div>
        <label className="text-sm">Damage:</label>
        <input
          type="number"
          className="border border-white/50 bg-black text-white p-1 w-full"
          value={monster.dmg}
          onChange={(e) =>
            onChange({ ...monster, dmg: Number(e.target.value) })
          }
        />
      </div>

      <div>
        <label className="text-sm">ASCII Art:</label>
        <textarea
          className="border border-white/50 bg-black text-white p-1 w-full font-mono"
          value={monster.art}
          rows={3}
          onChange={(e) => onChange({ ...monster, art: e.target.value })}
        />
      </div>
    </div>
  );
}
