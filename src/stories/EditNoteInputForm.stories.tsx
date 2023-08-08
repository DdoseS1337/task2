import React, { useState } from "react";
import { Meta } from "@storybook/react";

export default {
  title: "Components/EditNoteForm/Changes/InputForm",
} as Meta;

export const InputForm = () => {
  const [content, setContent] = useState("");

  const handleContentChange = (value: string) => {
    setContent(value);
  };

  return (
    <input
      className="edit-note-input"
      value={content}
      onChange={(e) => handleContentChange(e.target.value)}
    />
  );
};

