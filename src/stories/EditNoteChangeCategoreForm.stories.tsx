import React, { useState } from "react";
import { Meta } from "@storybook/react";
import { NoteCategory } from "../types/types";

export default {
  title: "Components/EditNoteForm/Changes/ChangeCategory",
} as Meta;

export const ChangeCategory = () => {
  const [category, setCategory] = useState(NoteCategory.Task);

  return (
    <select
      className="edit-note-select"
      value={category}
      onChange={(e) => setCategory(e.target.value as NoteCategory)}
    >
      <option value="Task">Завдання</option>
      <option value="RandomThought">Випадкова думка</option>
      <option value="Idea">Ідея</option>
    </select>
  );
};
