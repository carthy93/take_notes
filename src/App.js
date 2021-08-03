import "./App.css";
import NotesList from "./components/NotesList";
import { useState } from "react";
import { nanoid } from "nanoid";

const App = () => {
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: "First Note",
      date: "02/08/2021",
    },
    {
      id: nanoid(),
      text: "Second Note",
      date: "03/08/2021",
    },
    {
      id: nanoid(),
      text: "Third Note",
      date: "04/08/2021",
    },
  ]);

  const addNote = (newText) => {
    // console.log(newText);
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: newText,
      date: date.toLocaleDateString(),
    };

    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  };

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };

  return (
    <div className="App">
      <NotesList
        notes={notes}
        handleAddNote={addNote}
        handleDeleteNote={deleteNote}
      />
    </div>
  );
};

export default App;
