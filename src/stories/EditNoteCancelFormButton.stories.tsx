import React from "react";
import { Meta } from "@storybook/react";
import { action } from "@storybook/addon-actions";

export default {
  title: "Components/EditNoteForm/Buttons/CancelButton",
} as Meta;

export const Default = () => (
  <button className="edit-note-cancel-button" onClick={action('Button Cancel')}>
    Скасувати
  </button>
);
