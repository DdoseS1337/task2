import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addNote } from "../reducers/notesReducer"; // Using action creator from notesReducer
import { Note, NoteCategory } from "../types/types";



const NoteForm: React.FC = () => {
  const [content, setContent] = useState("");
  const [category, setCategory] = useState(NoteCategory.Task);

  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Extract dates mentioned from the content
    const datesMentioned = extractDatesFromNoteContent(content);

    // Create a new note object
    const newNote: Note = {
      id: Date.now(),
      time: new Date(),
      content,
      category: category!,
      datesMentioned,
      archived: false,
    };

    dispatch(addNote(newNote));

    setContent("");
    setCategory(NoteCategory.Task); // Reset category to "Task" after adding the note
  };

  const extractDatesFromNoteContent = (content: string): string[] => {
    const dateRegex = /\b(\d{1,2}\/\d{1,2}\/\d{4})\b/g;
    return content.match(dateRegex) || [];
  };

  return (
    <form onSubmit={handleSubmit} className="note-form">
      <label htmlFor="noteContent">Note Content:</label>
      <input
        type="text"
        id="noteContent"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        required
      />

      <label htmlFor="noteCategory">Category:</label>
      <select
        id="noteCategory"
        value={category}
        onChange={(e) => setCategory(e.target.value as NoteCategory)}
        required
      >
        <option value={NoteCategory.Task}>Завдання</option>
        <option value={NoteCategory.RandomThought}>Випадкова думка</option>
        <option value={NoteCategory.Idea}>Ідея</option>
      </select>

      <button type="submit">Add Note</button>
    </form>
  );
};

export default NoteForm;
