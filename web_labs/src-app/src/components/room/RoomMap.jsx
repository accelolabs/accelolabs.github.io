import BigContainer from "../common/BigContainer";
import TextContainer from "../common/TextContainer";

export default function RoomMap() {
  return (
    <BigContainer>
      <TextContainer>Map</TextContainer>
        <div className="border border-white/50 h-48 flex items-center justify-center opacity-50">
          Map loading...
        </div>
    </BigContainer>
  );
}
