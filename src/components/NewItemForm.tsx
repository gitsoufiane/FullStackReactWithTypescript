import React from "react";
import { NewItemFormContainer, NewItemButton, NewItemInput } from "./styles";
import { useFocus } from "../utils/useFocus";

type NewItemFormProps = {
  onAdd: (text: string) => void;
};

export const NewItemForm = ({ onAdd }: NewItemFormProps) => {
  const [text, setText] = React.useState("");
  const inputRef = useFocus();

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      onAdd(text);
    }
  };
  return (
    <NewItemFormContainer>
      <NewItemInput
        ref={inputRef}
        placeholder='What needs to be done?'
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyPress={handleKeyPress}
      />
      <NewItemButton onClick={() => onAdd(text)}>Create</NewItemButton>
    </NewItemFormContainer>
  );
};
