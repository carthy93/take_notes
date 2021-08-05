import "./App.css";
import NotesList from "./components/NotesList";
import { useState } from "react";
import { nanoid } from "nanoid";
import Search from "./components/Search";
import Header from "./components/Header";

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

  const [searchText, setSearchText] = useState("");

  const [mode, setMode] = useState(false);

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
    <div className={`${mode && "dark"}`}>
      <div className="App">
        <Header handleMode={setMode} />
        <Search handleSearchNote={setSearchText} />
        <NotesList
          notes={notes.filter((note) =>
            note.text.toLowerCase().includes(searchText)
          )}
          handleAddNote={addNote}
          handleDeleteNote={deleteNote}
        />
      </div>
    </div>
  );
};

export default App;
