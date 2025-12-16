import SectionContainer from "../common/SectionContainer";
import TextContainer from "../common/TextContainer";

const INVENTORY_ITEMS = ["Sword", "Potion", "Scroll"];

export default function RoomInventory() {
  return (
    <SectionContainer
      left={<TextContainer>Your Inventory</TextContainer>}
      right={
        <div className="flex flex-col gap-2">
          {INVENTORY_ITEMS.map((item) => (
            <div
              key={item}
              className="border border-white/50 p-1"
            >
              {item}
            </div>
          ))}
        </div>
      }
    />
  );
}
