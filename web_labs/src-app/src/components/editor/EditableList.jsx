import RoomItem from "./items/RoomItem";
import MonsterItem from "./items/MonsterItem";
import ItemItem from "./items/ItemItem";
import ChestItem from "./items/ChestItem";
import GoalItem from "./items/GoalItem";

const typeMap = {
  room: RoomItem,
  monster: MonsterItem,
  item: ItemItem,
  chest: ChestItem,
  goal: GoalItem,
};

export default function EditableList({ items = [], setItems, onDelete, type, extraProps = {} }) {
  if (!Array.isArray(items)) return null;

  const move = (index, dir) => {
    const newIndex = index + dir;
    if (newIndex < 0 || newIndex >= items.length) return;
    const copy = [...items];
    [copy[index], copy[newIndex]] = [copy[newIndex], copy[index]];
    setItems(copy);
  };

  const handleChange = (index, newItem) => {
    const copy = [...items];
    copy[index] = newItem;
    setItems(copy);
  };

  const ItemComponent = typeMap[type];

  return (
    <div className="flex flex-col gap-2">
      {items.map((item, index) => (
        <div key={item.id || index} className="border border-white/75 p-2 flex flex-col gap-2">
          <div className="flex justify-between items-center">
            <strong>{item.name || item.type || "Unnamed"}</strong>
            <div className="flex gap-1">
              <button onClick={() => move(index, -1)} className="px-2 hover:bg-white hover:text-black transition">A</button>
              <button onClick={() => move(index, 1)} className="px-2 hover:bg-white hover:text-black transition">V</button>
              <button onClick={() => onDelete(item.id)} className="px-2 hover:bg-white hover:text-black transition">X</button>
            </div>
          </div>
          {ItemComponent && <ItemComponent {...{ [type]: item, item, onChange: (newItem) => handleChange(index, newItem), ...extraProps }} />}
        </div>
      ))}
    </div>
  );
}
