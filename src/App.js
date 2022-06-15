import "./App.css";
import { Routes, Link, Route } from "react-router-dom";
import Home from "./pages/Home";
import { Button, message } from "antd";
import Details from "./pages/Details";
import Contact from "./pages/Contact";
import { observer } from "mobx-react";
import { NewNote } from "./new/NewNote";
import { useNotesStore } from "./context/myContext";

function App() {
  const notesStore = useNotesStore();
  const onDelete = (id) => {
    notesStore.removeNote(id);
    message.success("Delete note is successful");
  };
  return (
    <div className="App">
      <header className="App-header">
        <h1>My project</h1>
        <Button>Welcome</Button>
        <ul>
          <Link to="/">Home</Link>
          <Link to="/details">Details</Link>
          <Link to="/contact">Contact</Link>
        </ul>
      </header>
      <NewNote></NewNote>
      <div className="box-container">
        {notesStore.notes.map((note) => {
          return (
            <div className="box" key={note.id}>
              <button onClick={() => onDelete(note.id)}>x</button>
              <p>{note.text}</p>
            </div>
          );
        })}
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details" element={<Details />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default observer(App);
