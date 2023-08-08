import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Provider } from "react-redux";
import store from "../store/configureStore"; 
import ArchivedNotesModal, {
  ArchivedNotesModalProps,
} from "../components/ArchivedNotesModal";

export default {
  title: "Components/ArchivedNotesModal",
  component: ArchivedNotesModal,
  decorators: [
    (Story) => (
      <Provider store={store}>
        <Story />
      </Provider>
    ),
  ],
} as Meta;

export const ArchivedNotesModalExample: StoryObj<ArchivedNotesModalProps> = (args: ArchivedNotesModalProps) => (
  <ArchivedNotesModal {...args} />
);
ArchivedNotesModalExample.args = {
  onClose: () => {},
};
