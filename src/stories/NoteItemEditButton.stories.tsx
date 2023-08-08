import React from "react";
import { Meta } from "@storybook/react";

export default {
  title: "Components/NoteItem/Buttons/Edit",
} as Meta;

export const EditButton = () => (
  <button onClick={() => console.log("Edit Button clicked")}>Edit</button>
);
