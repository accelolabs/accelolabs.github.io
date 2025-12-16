import { useState } from "react";

const uid = () => crypto.randomUUID();

export function useDungeonState() {
  const [rooms, setRooms] = useState([]);
  const [monsters, setMonsters] = useState([]);
  const [items, setItems] = useState([]);
  const [chests, setChests] = useState([]);
  const [goals, setGoals] = useState([]);

  // helper to add a new entity
  const add = (setFn, factory) => {
    setFn((prev) => [...prev, factory()]);
  };

  // Remove an item and clear references in monsters and chests
  const removeItem = (id) => {
    setItems((prev) => prev.filter((i) => i.id !== id));

    setMonsters((prev) =>
      prev.map((m) => ({
        ...m,
        inventory: (m.inventory || []).filter((itemId) => itemId !== id),
      }))
    );

    setChests((prev) =>
      prev.map((c) => ({
        ...c,
        items: (c.items || []).filter((itemId) => itemId !== id),
      }))
    );
  };

  // Remove a room and clear references in other rooms and goals
  const removeRoom = (id) => {
    setRooms((prev) =>
      prev
        .filter((r) => r.id !== id)
        .map((r) => ({
          ...r,
          passages: Object.fromEntries(
            Object.entries(r.passages || {}).filter(([_, val]) => val !== id)
          ),
        }))
    );

    setGoals((prev) => prev.filter((g) => g.roomId !== id));
  };

  // Update a room and also synchronize opposite passages
  const updateRoomPassage = (roomId, direction, targetRoomId) => {
    setRooms((prev) => {
      const opposite = { north: "south", south: "north", east: "west", west: "east" };
      const updated = prev.map((room) => {
        if (room.id === roomId) {
          return {
            ...room,
            passages: { ...room.passages, [direction]: targetRoomId || null },
          };
        }
        return room;
      });

      if (targetRoomId) {
        // update opposite passage in the target room
        return updated.map((room) => {
          if (room.id === targetRoomId) {
            return {
              ...room,
              passages: { ...room.passages, [opposite[direction]]: roomId },
            };
          }
          return room;
        });
      }

      return updated;
    });
  };

  // Factory for creating new rooms
  const createRoom = () => ({
    id: uid(),
    name: "New Room",
    comment: "",
    passages: { north: null, south: null, east: null, west: null },
    monsters: [],
  });

  return {
    rooms,
    monsters,
    items,
    chests,
    goals,
    setRooms,
    setMonsters,
    setItems,
    setChests,
    setGoals,
    add,
    removeItem,
    removeRoom,
    updateRoomPassage,
    createRoom,
  };
}
