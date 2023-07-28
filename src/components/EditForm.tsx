import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Note, NoteCategory } from "../types/types";
import { editNote } from "../reducers/notesReducer";

interface EditNoteFormProps {
  note: Note;
  onClose: () => void;
}

const EditNoteForm: React.FC<EditNoteFormProps> = ({ note, onClose }) => {
  const dispatch = useDispatch();
  const [content, setContent] = useState(note.content);
  const [category, setCategory] = useState(note.category);

  const handleEditNote = () => {
    const editedNote: Note = {
      ...note,
      content,
      category,
    };
    dispatch(editNote(editedNote));
    onClose();
  };

  return (
    <div className="edit-note-form">
      <input className="edit-note-input" value={content} onChange={(e) => setContent(e.target.value)} />
      <select className="edit-note-select"
        value={category}
        onChange={(e) => setCategory(e.target.value as NoteCategory)}
      >
        <option value={NoteCategory.Task}>Завдання</option>
        <option value={NoteCategory.RandomThought}>Випадкова думка</option>
        <option value={NoteCategory.Idea}>Ідея</option>
      </select>
      <button className="edit-note-save-button" onClick={handleEditNote}>Зберегти</button>
      <button className="edit-note-cancel-button" onClick={onClose}>Скасувати</button>
    </div>
  );
};

export default EditNoteForm;
