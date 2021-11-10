import React from "react";
import { AppContainer } from "./components/styles";
import { AddNewItem } from "./components/AddNewItem";
import { Column } from "./components/Column";
import { useAppState } from "./state/AppStateContext";
import { addList } from "./state/actions";

export const App: React.FC = ({ children }) => {
  const { lists, dispatch } = useAppState();
  return (
    <AppContainer>
      {lists.map((list) => (
        <Column id={list.id} text={list.text} key={list.id} />
      ))}
      <AddNewItem toggleButtonText='Add another list' onAdd={(text) => dispatch(addList(text))} />
      {children}
    </AppContainer>
  );
};
