import React from "react";
import { ColumnContainer, ColumnTitle } from "./styles";
import { AddNewItem } from "./AddNewItem";
import { useAppState } from "../state/AppStateContext";
import { Card } from "./Card";
import { addTask } from "../state/actions";
import { useItemDrag } from "../utils/useItemDrag";
type ColumnProps = {
  text: string;
  id: string;
};

export const Column = ({ text, id }: ColumnProps) => {
  const { getTaskByListId, dispatch, draggedItem } = useAppState();
  const tasks = getTaskByListId(id);
  const ref = React.useRef<HTMLDivElement>(null);
  const { drag } = useItemDrag({ type: "COLUMN", id, text });
  drag(ref);
  return (
    <ColumnContainer ref={ref}>
      <ColumnTitle>{text}</ColumnTitle>
      {tasks.map((task) => (
        <Card key={task.id} text={task.text} id={task.id} />
      ))}
      <AddNewItem toggleButtonText='Add Another Task' onAdd={(text) => dispatch(addTask(text, id))} dark />
    </ColumnContainer>
  );
};
