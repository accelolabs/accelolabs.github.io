import { useState, useRef, useEffect } from "react";
import BigContainer from "../common/BigContainer";

export default function RoomChat() {
  const [messages, setMessages] = useState(["You enter the room."]);
  const [input, setInput] = useState("");
  const scrollRef = useRef(null);

  const send = () => {
    if (!input.trim()) return;
    setMessages((m) => [...m, input]);
    setInput("");
  };

  // Auto-scroll to bottom
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <BigContainer>
      <div
        ref={scrollRef}
        className="flex flex-col h-80 overflow-y-auto gap-2 border border-white/50 p-3 rounded-lg mb-3"
      >
        {messages.map((msg, i) => (
          <div key={i} className="text-sm">
            {msg}
          </div>
        ))}
      </div>

      <div className="flex gap-2">
        <input
          className="flex-1 border border-white/50 bg-black text-white p-2 rounded"
          placeholder="Type a message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && send()}
        />
        <button
          className="border border-white px-4 py-2 hover:bg-white hover:text-black transition rounded"
          onClick={send}
        >
          Send
        </button>
      </div>
    </BigContainer>
  );
}
