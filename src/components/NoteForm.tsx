import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addNote } from "../reducers/notesReducer"; 
import { Note, NoteCategory } from "../types/types";
import { extractDatesFromContent } from "../utils/dateUtils"; // Вказати правильний шлях



const NoteForm: React.FC = () => {
  const [content, setContent] = useState("");
  const [category, setCategory] = useState(NoteCategory.Task);

  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();


    const datesMentioned = extractDatesFromContent(content);

   
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
    setCategory(NoteCategory.Task); 
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
