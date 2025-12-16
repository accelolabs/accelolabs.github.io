export default function SaveLoadComponent({ dungeon }) {
  const handleSave = () => {
    const data = {
      rooms: dungeon.rooms,
      monsters: dungeon.monsters,
      items: dungeon.items,
      chests: dungeon.chests,
      goals: dungeon.goals,
    };
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "dungeon.json";
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleLoad = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const data = JSON.parse(event.target.result);
        if (data.rooms) dungeon.setRooms(data.rooms);
        if (data.monsters) dungeon.setMonsters(data.monsters);
        if (data.items) dungeon.setItems(data.items);
        if (data.chests) dungeon.setChests(data.chests);
        if (data.goals) dungeon.setGoals(data.goals);
      } catch (err) {
        console.error("Failed to load dungeon:", err);
        alert("Failed to load dungeon file. Check console for details.");
      }
    };
    reader.readAsText(file);
  };

  return (
    <div className="left-0 bottom-0 w-full bg-black py-4 flex justify-center gap-4">
      <button
        className="border border-white px-6 py-2 hover:bg-white hover:text-black transition"
        onClick={handleSave}
      >
        Save
      </button>

      <label className="border border-white px-6 py-2 hover:bg-white hover:text-black transition cursor-pointer">
        Load
        <input
          type="file"
          accept=".json"
          className="hidden"
          onChange={handleLoad}
        />
      </label>
    </div>
  );
}
