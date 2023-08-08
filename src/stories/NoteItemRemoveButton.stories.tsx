import React from "react";
import { Meta } from "@storybook/react";

export default {
  title: "Components/NoteItem/Buttons/Remove",
} as Meta;

export const RemoveButton = () => (
  <button onClick={() => console.log("Remove Button clicked")}>Edit</button>
);
