import { useState } from "react";
import Landing from "./pages/Landing";
import Room from "./pages/Room";
import Editor from "./pages/Editor";

export default function App() {
  const [page, setPage] = useState("landing");
  const [roomId, setRoomId] = useState("");

  const enterRoom = (id) => {
    setRoomId(id);
    setPage("room");
  };

  return (
    <div>
      {page === "landing" && <Landing onEnterRoom={enterRoom} onNavigate={setPage} />}
      {page === "room" && <Room roomId={roomId} onNavigate={setPage} />}
      {page === "editor" && <Editor onNavigate={setPage} />}
    </div>
  );
}