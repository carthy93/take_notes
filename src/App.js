import "./App.css";
import NotesList from "./components/NotesList";
import { useState } from "react";
import { nanoid } from "nanoid";

const App = () => {
  const [notes, setnotes] = useState([
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

  return (
    <div className="App">
      <NotesList notes={notes} />
    </div>
  );
};

export default App;
