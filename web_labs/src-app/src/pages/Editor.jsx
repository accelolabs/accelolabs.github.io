import { useState } from "react";
import EditorTabs from "../components/common/Tabs";
import TabPanel from "../components/common/TabPanel";
import EditableList from "../components/editor/EditableList";
import { useDungeonState } from "../components/editor/useDungeonState";
import SaveLoadComponent from "../components/editor/SaveLoadComponent";
import SectionContainer from "../components/common/SectionContainer";
import TextContainer from "../components/common/TextContainer";
import FormContainer from "../components/common/FormContainer";

const uid = () => crypto.randomUUID();

export default function Editor({ onNavigate }) {
  const [active, setActive] = useState("rooms");
  const dungeon = useDungeonState();

  const tabs = [
    { name: "rooms", label: "Rooms" },
    { name: "monsters", label: "Monsters" },
    { name: "items", label: "Items" },
    { name: "chests", label: "Chests" },
    { name: "goals", label: "Goals" },
    { name: "file", label: "File" },
  ];

  const ListTab = ({ name, items, setItems, create, onDelete, type, extraProps }) => (
    <TabPanel active={active} name={name}>
      <button
        className="border border-white p-2 mb-4"
        onClick={() => dungeon.add(setItems, create)}
      >
        + Add {name.slice(0, -1)}
      </button>

      <EditableList
        items={items}
        setItems={setItems}
        onDelete={onDelete}
        type={type}
        extraProps={extraProps}
      />
    </TabPanel>
  );

  return (
    <div className="min-h-screen bg-black text-white p-6 flex flex-col">
      <EditorTabs active={active} setActive={setActive} tabs={tabs} />

      <div className="flex-1 overflow-auto mt-6">
        <ListTab
          name="rooms"
          items={dungeon.rooms}
          setItems={dungeon.setRooms}
          create={() => dungeon.createRoom()}
          onDelete={dungeon.removeRoom}
          type="room"
          extraProps={{
            rooms: dungeon.rooms,
            updateRoomPassage: dungeon.updateRoomPassage,
          }}
        />

        <ListTab
          name="monsters"
          items={dungeon.monsters}
          setItems={dungeon.setMonsters}
          create={() => ({
            id: uid(),
            name: "New Monster",
            hp: 1,
            dmg: 1,
            art: "",
            inventory: [],
          })}
          onDelete={(id) =>
            dungeon.setMonsters((v) => v.filter((m) => m.id !== id))
          }
          type="monster"
        />

        <ListTab
          name="items"
          items={dungeon.items}
          setItems={dungeon.setItems}
          create={() => ({ id: uid(), name: "New Item", type: "type", value: 1 })}
          onDelete={dungeon.removeItem}
          type="item"
        />

        <ListTab
          name="chests"
          items={dungeon.chests}
          setItems={dungeon.setChests}
          create={() => ({ id: uid(), name: "New Chest", roomId: null, itemId: null })}
          onDelete={(id) =>
            dungeon.setChests((v) => v.filter((c) => c.id !== id))
          }
          type="chest"
          extraProps={{ rooms: dungeon.rooms, items: dungeon.items }}
        />

        <ListTab
          name="goals"
          items={dungeon.goals}
          setItems={dungeon.setGoals}
          create={() => ({ id: uid(), type: "type", value: 0 })}
          onDelete={(id) =>
            dungeon.setGoals((v) => v.filter((g) => g.id !== id))
          }
          type="goal"
        />

        <TabPanel active={active} name="file">
          <div className="flex flex-col gap-6">
            <SectionContainer
              left={<TextContainer>Save or load your dungeon</TextContainer>}
              right={
                <FormContainer>
                  <SaveLoadComponent dungeon={dungeon} />
                </FormContainer>
              }
            />

            <SectionContainer
              left={<TextContainer>Exit editor (unsaved progress will be lost)</TextContainer>}
              right={
                <FormContainer>
                  <button
                    className="border border-white px-6 py-2 hover:bg-white hover:text-black transition"
                    onClick={() => onNavigate("landing")}
                  >
                    Exit
                  </button>
                </FormContainer>
              }
            />
          </div>
        </TabPanel>
      </div>
    </div>
  );
}
