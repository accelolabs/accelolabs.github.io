import { useState } from "react";
import EditorTabs from "../components/common/Tabs";
import TabPanel from "../components/common/TabPanel";
import TextContainer from "../components/common/TextContainer";

import RoomChat from "../components/room/RoomChat";
import RoomInventory from "../components/room/RoomInventory";
import RoomMap from "../components/room/RoomMap";

export default function Room({ roomId, onNavigate }) {
  const [active, setActive] = useState("chat");

  const tabs = [
    { name: "chat", label: "Chat" },
    { name: "inventory", label: "Inventory" },
    { name: "map", label: "Map" },
  ];

  return (
    <div className="min-h-screen bg-black text-white p-6 flex flex-col gap-6">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold">Room</h2>
        <button
          className="border border-white px-4 py-1 hover:bg-white hover:text-black transition"
          onClick={() => onNavigate("landing")}
        >
          Back
        </button>
      </div>

      <TextContainer>Current Room ID: {roomId}</TextContainer>

      <EditorTabs active={active} setActive={setActive} tabs={tabs} />

      <TabPanel active={active} name="chat">
        <RoomChat />
      </TabPanel>

      <TabPanel active={active} name="inventory">
        <RoomInventory />
      </TabPanel>

      <TabPanel active={active} name="map">
        <RoomMap />
      </TabPanel>
    </div>
  );
}
