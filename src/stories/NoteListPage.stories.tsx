import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Provider } from "react-redux";
import store from "../store/configureStore"; 
import NoteList from "../containers/NoteListPage";
import { JSX } from "react/jsx-runtime";

export default {
  title: "Pages/NoteList",
  component: NoteList,
  decorators: [
    (Story) => (
      <Provider store={store}>
        <Story />
      </Provider>
    ),
  ],
} as Meta;


export const NoteListExample: StoryObj = (args: JSX.IntrinsicAttributes) => <NoteList {...args} />;
NoteListExample.args = {};
