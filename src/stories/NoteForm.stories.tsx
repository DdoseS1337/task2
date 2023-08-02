import React from "react";
import { Meta } from "@storybook/react";
import { Provider } from "react-redux";
import NoteForm from "../components/NoteForm";
import store from "../store/configureStore"; 

export default {
  title: "Components/NoteForm",
  component: NoteForm,
} as Meta;

export const NoteFormExample = () => (
  <Provider store={store}>
    <NoteForm />
  </Provider>
);
