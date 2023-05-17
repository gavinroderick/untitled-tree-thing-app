import { useState } from "react";
import TreeNameInput from "./TreeNameInput";
import { Text } from "react-native";
import { SubmitTreeButton } from "./SubmitTreeButton";

export function NewTree() {
  const [text, setText] = useState("");
  return (
    <>
      <TreeNameInput className="bg-slate-50" setText={setText} />
      <SubmitTreeButton />
      <Text>{text}</Text>
    </>
  );
}
