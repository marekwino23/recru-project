import { useContext, createContext } from "react";
import { createNotesStore } from "../stores/NoteStore";
import { useLocalObservable } from "mobx-react";

const NotesContext = createContext(null);
export const NotesProvider = ({ children }) => {
  const notesStore = useLocalObservable(createNotesStore);
  return (
    <NotesContext.Provider value={notesStore}>{children}</NotesContext.Provider>
  );
};

export const useNotesStore = () => {
  const data = useContext(NotesContext);
  return data;
};
