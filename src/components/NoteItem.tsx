import React from "react";
import { Note } from "../types/types"; 

interface Props {
  note: Note;
}

const NoteItem: React.FC<Props> = ({ note }) => {


  return (
    <tr>
      <td>{note.time.toLocaleString()}</td>
      <td>{note.content}</td>
      <td>{note.category}</td>
      <td>{note.datesMentioned.join(", ")}</td>
    </tr>
  );
};

export default NoteItem;
