import SectionContainer from "../common/SectionContainer";
import TextContainer from "../common/TextContainer";
import FormContainer from "../common/FormContainer";

export default function JoinRoomSection({
  roomId,
  password,
  name,
  setRoomId,
  setPassword,
  setName,
  onJoin,
}) {
  return (
    <SectionContainer
      left={
        <TextContainer>
          Join an existing adventure in a dungeon:
        </TextContainer>
      }
      right={
        <FormContainer>
          <input
            className="bg-black border border-white p-1 text-white"
            placeholder="Room ID"
            value={roomId}
            onChange={(e) => setRoomId(e.target.value)}
          />
          <input
            className="bg-black border border-white p-1 text-white"
            placeholder="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            className="bg-black border border-white p-1 text-white"
            placeholder="Player name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button
            onClick={onJoin}
            className="border border-white p-1 hover:bg-white hover:text-black transition"
          >
            Join Room
          </button>
        </FormContainer>
      }
    />
  );
}
