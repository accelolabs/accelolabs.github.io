import SectionContainer from "../common/SectionContainer";
import TextContainer from "../common/TextContainer";
import FormContainer from "../common/FormContainer";

export default function EditorSection({ onNavigate }) {
  return (
    <SectionContainer
      left={
        <TextContainer>
          Have an idea for an adventure? Use the dungeon editor:
        </TextContainer>
      }
      right={
        <FormContainer>
          <button
            onClick={() => onNavigate("editor")}
            className="border border-white p-4 hover:bg-white hover:text-black transition"
          >
            Go to Dungeon Editor
          </button>
        </FormContainer>
      }
    />
  );
}
