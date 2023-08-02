import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Provider } from "react-redux";
import { action } from "@storybook/addon-actions"; 
import store from "../store/configureStore";
import EditNoteForm, { EditNoteFormProps } from "../components/EditForm";
import { NoteCategory } from "../types/types";

export default {
  title: "Components/EditNoteForm",
  component: EditNoteForm,
  decorators: [
    (Story) => (
      <Provider store={store}>
        <Story />
      </Provider>
    ),
  ],
} as Meta;

export const EditNoteFormExample: StoryObj<EditNoteFormProps> = (args: EditNoteFormProps) => (
  <EditNoteForm {...args} />
);

EditNoteFormExample.args = {
  note: {
    id: 1,
    content: "Sample Note Content",
    category: NoteCategory.Task,
    datesMentioned: [],
    archived: false,
    time: new Date(),
  },
  onClose: action("onClose"),
};
