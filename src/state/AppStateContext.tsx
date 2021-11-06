import React from "react";
import { appStateReducer, List, Task, AppState } from "./appStateReducer";
import { Action } from "./actions";
import { useImmerReducer } from "use-immer";

const appData: AppState = {
  lists: [
    {
      id: "0",
      text: "To Do",
      tasks: [{ id: "c0", text: "Generate app scaffold" }],
    },
    {
      id: "1",
      text: "In Progress",
      tasks: [{ id: "c2", text: "Learn Typescript" }],
    },
    {
      id: "2",
      text: "Done",
      tasks: [{ id: "c3", text: "Begin to use static typing" }],
    },
  ],
};

type AppStateContextProps = {
  lists: List[];
  getTaskByListId: (id: string) => Task[];
  dispatch: React.Dispatch<Action>;
};

const AppStateContext = React.createContext<AppStateContextProps>({} as AppStateContextProps);

export const AppStateProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useImmerReducer(appStateReducer, appData);
  const { lists } = state;
  const getTaskByListId = (id: string) => {
    return lists.find((list) => list.id === id)?.tasks || [];
  };
  return <AppStateContext.Provider value={{ lists, getTaskByListId, dispatch }}>{children}</AppStateContext.Provider>;
};

export const useAppState = () => {
  return React.useContext(AppStateContext);
};
