import SectionContainer from "../common/SectionContainer";
import TextContainer from "../common/TextContainer";
import FormContainer from "../common/FormContainer";

export default function CreateRoomSection() {
  return (
    <SectionContainer
      left={
        <TextContainer>
          Create a new adventure with a dungeon file:
        </TextContainer>
      }
      right={
        <FormContainer>
          <input
            type="file"
            className="border border-white p-2"
          />
          <button
            className="border border-white p-2 hover:bg-white hover:text-black transition"
          >
            Create Room
          </button>
        </FormContainer>
      }
    />
  );
}
