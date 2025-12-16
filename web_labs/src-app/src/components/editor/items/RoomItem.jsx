export default function RoomItem({ room, onChange, rooms, updateRoomPassage }) {
  const directions = ["north", "south", "east", "west"];
  const opposite = { north: "south", south: "north", east: "west", west: "east" };

  const handleSelect = (dir, targetId) => {
    const currentTargetId = room.passages[dir] || null;

    // Remove opposite passage in previously connected room
    if (currentTargetId) {
      const prevRoom = rooms.find((r) => r.id === currentTargetId);
      if (prevRoom) {
        updateRoomPassage(prevRoom.id, opposite[dir], null);
      }
    }

    updateRoomPassage(room.id, dir, targetId || null);

    // If a new room is selected, update its opposite passage
    if (targetId) {
      const targetRoom = rooms.find((r) => r.id === targetId);
      if (targetRoom) {
        updateRoomPassage(targetId, opposite[dir], room.id);
      }
    }
  };

  return (
    <div className="flex flex-col gap-2">
      <div>
        <label className="text-sm">Name:</label>
        <input
          className="border border-white/50 bg-black text-white p-1 w-full"
          value={room.name}
          placeholder="Room Name"
          onChange={(e) => onChange({ ...room, name: e.target.value })}
        />
      </div>

      <div>
        <label className="text-sm">Comment:</label>
        <input
          className="border border-white/50 bg-black text-white p-1 w-full"
          value={room.comment}
          placeholder="Comment"
          onChange={(e) => onChange({ ...room, comment: e.target.value })}
        />
      </div>

      <div className="grid grid-cols-2 gap-2">
        {directions.map((dir) => (
          <div key={dir} className="flex flex-col">
            <label className="text-sm capitalize">{dir}:</label>
            <select
              className="border border-white/50 bg-black text-white p-1 w-full"
              value={room.passages[dir] || ""}
              onChange={(e) => handleSelect(dir, e.target.value || null)}
            >
              <option value="">None</option>
              {(rooms || []).map((r) => {
                const isSelf = r.id === room.id;
                const alreadyUsedElsewhere = Object.entries(room.passages).some(
                  ([d, id]) => d !== dir && id === r.id
                );

                return (
                  <option
                    key={r.id}
                    value={r.id}
                    disabled={isSelf || alreadyUsedElsewhere}
                  >
                    {r.name || "Unnamed Room"}
                  </option>
                );
              })}
            </select>
          </div>
        ))}
      </div>
    </div>
  );
}
