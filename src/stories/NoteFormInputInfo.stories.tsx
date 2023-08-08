import React, { useState } from "react";
import { Meta } from "@storybook/react";

export default {
  title: "Components/NoteForm/Input/InputInfo",
} as Meta;

export const InputInfo = () => {
  const [content, setContent] = useState(""); 

  return (
    <>
      <label htmlFor="noteContent">Note Content:</label>
      <input
        type="text"
        id="noteContent"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        required
      />
    </>
  );
};

