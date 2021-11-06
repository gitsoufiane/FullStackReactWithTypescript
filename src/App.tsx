import React from "react";
import { AppContainer } from "./components/styles";
import { AddNewItem } from "./components/AddNewItem";
import { Column } from "./components/Column";
import { Card } from "./components/Card";
import { useAppState } from "./state/AppStateContext";
export const App: React.FC = ({ children }) => {
  const { lists } = useAppState();
  const onAdd = (text: string) => console.log(text);
  return (
    <AppContainer>
      {lists.map((list) => (
        <Column id={list.id} text={list.text} key={list.id} />
      ))}
      <AddNewItem toggleButtonText='Add another list' onAdd={onAdd} />
      {children}
    </AppContainer>
  );
};
