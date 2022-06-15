import { useState } from "react";
import { Button, message } from "antd";
import { useNotesStore } from "../context/myContext";

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
    <>
      <textarea type="text" onChange={onChange} value={noteText}></textarea>
      <br></br>
      <Button onClick={addNote}>Add Note</Button>
    </>
  );
};
