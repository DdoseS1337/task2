import React, { useState } from "react";
import { Meta } from "@storybook/react";
import { NoteCategory } from "../types/types"; 

export default {
  title: "Components/NoteForm/Input/ChooseCategory",
} as Meta;

export const ChooseCategory = () => {
  const [category, setCategory] = useState(NoteCategory.Task);

  return (
    <>
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
    </>
  );
};
