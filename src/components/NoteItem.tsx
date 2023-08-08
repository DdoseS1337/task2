import React from "react";
import { Note } from "../types/types";

export interface Props {
  note: Note;
  onEditNote: (note: Note) => void;
  onArchiveNote: (noteId: number) => void;
  onRemoveNote: (noteId: number) => void;
}

const NoteItem: React.FC<Props> = ({
  note,
  onEditNote,
  onArchiveNote,
  onRemoveNote,
}) => {
  return (
    <tr>
      <td>{note.time.toLocaleString()}</td>
      <td>{note.content}</td>
      <td>{note.category}</td>
      <td>{note.datesMentioned.join(", ")}</td>
      <td>
        <button onClick={() => onEditNote(note)}>Edit</button>
        <button onClick={() => onArchiveNote(note.id)}>Archive</button>
        <button onClick={() => onRemoveNote(note.id)}>Remove</button>
      </td>
    </tr>
  );
};

export default NoteItem;
