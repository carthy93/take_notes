import React from "react";
import Note from "./Note";
import AddNotes from "../AddNotes";

const NotesList = ({ notes, handleAddNote, handleDeleteNote }) => {
  return (
    <div className="notes-list">
      {notes.map((note) => {
        return (
          <Note
            id={note.id}
            text={note.text}
            date={note.date}
            handleDeleteNote={handleDeleteNote}
          />
        );
      })}
      <AddNotes handleAddNote={handleAddNote} />
    </div>
  );
};

export default NotesList;
