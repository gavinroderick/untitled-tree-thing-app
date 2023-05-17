import { TextInput } from "react-native";

export default function TreeNameInput({
  setText,
}: {
  setText: (textOnBlur: string) => void;
}) {
  return (
    <TextInput
      className="border  border-green-200 rounded-md p-3 px-10 mt-24 placeholder:text-green-950 placeholder:italic text-center"
      placeholder="What are the tree's three words?"
      onSubmitEditing={(event) => setText(event.nativeEvent.text)}
    ></TextInput>
  );
}
