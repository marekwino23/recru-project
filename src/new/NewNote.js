import { useState } from "react";
import { Button, message } from "antd";
import { useNotesStore } from "../context/NoteContext";

export const NewNote = () => {
  const [noteText, setNoteText] = useState("");
  const onChange = (e) => {
    setNoteText(e.target.value);
  };
  const notesStore = useNotesStore();
  const addNote = () => {
    notesStore.addNote(noteText);
    message.info("Added note is successful");
  };
  return (
    <div className="box-note">
      <textarea type="text" onChange={onChange} value={noteText}></textarea>
      <Button onClick={addNote}>Add Note</Button>
    </div>
  );
};
