import React from "react";
import { ColumnContainer, ColumnTitle } from "./styles";
import { AddNewItem } from "./AddNewItem";
import { useAppState } from "../state/AppStateContext";
import { Card } from "./Card";

type ColumnProps = {
  text: string;
  id: string;
};

export const Column = ({ text, id }: ColumnProps) => {
  const { getTaskByListId } = useAppState();
  const tasks = getTaskByListId(id);
  return (
    <ColumnContainer>
      <ColumnTitle>{text}</ColumnTitle>
      {tasks.map((task) => (
        <Card key={task.id} text={task.text} id={task.id} />
      ))}
      <AddNewItem toggleButtonText='Add Another Task' onAdd={console.log} dark />
    </ColumnContainer>
  );
};
