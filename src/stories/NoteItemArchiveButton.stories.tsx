import React from "react";
import { Meta } from "@storybook/react";

export default {
  title: "Components/NoteItem/Buttons/Archive",
} as Meta;

export const ArchiveButton = () => (
  <button onClick={() => console.log("Archive Button clicked")}>Edit</button>
);
