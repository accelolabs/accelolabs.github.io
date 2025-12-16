import { useState } from "react";
import EditorTabs from "../components/common/Tabs";
import TabPanel from "../components/common/TabPanel";
import JoinRoomSection from "../components/landing/JoinRoomSection";
import CreateRoomSection from "../components/landing/CreateRoomSection";
import EditorSection from "../components/landing/EditorSection";

export default function Landing({ onEnterRoom, onNavigate }) {
  const [active, setActive] = useState("text");
  const [roomId, setRoomId] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const handleEnterRoom = () => {
    if (!roomId.trim() || !name.trim()) return;
    onEnterRoom(roomId.trim());
  };

  return (
    <div className="min-h-screen bg-black text-white p-4 selection:bg-white selection:text-black flex flex-col gap-6">
      <EditorTabs
        active={active}
        setActive={setActive}
        tabs={[
          { name: "text", label: "Welcome" },
          { name: "join", label: "Join" },
          { name: "editor", label: "Editor" },
        ]}
      />

      <div className="relative overflow-hidden">
        <TabPanel active={active} name="text">
          <div className="p-4 border border-white rounded-lg">
            <h2 className="text-xl font-bold mb-2">Welcome, Adventurer!</h2>
            <p className="mb-2">
              This is a text-based multiplayer dungeon exploring game.
              Use the tabs to join an existing adventure or create you own in the dungeon builder.
            </p>
          </div>
        </TabPanel>

        <TabPanel active={active} name="join">
          <div className="flex flex-col gap-4">
            <JoinRoomSection
              roomId={roomId}
              password={password}
              name={name}
              setRoomId={setRoomId}
              setPassword={setPassword}
              setName={setName}
              onJoin={handleEnterRoom}
            />
            <CreateRoomSection />
          </div>
        </TabPanel>

        <TabPanel active={active} name="editor">
          <EditorSection onNavigate={onNavigate} />
        </TabPanel>
      </div>
    </div>
  );
}
