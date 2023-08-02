import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Provider } from "react-redux";
import store from "../store/configureStore"; // Імпортуйте свій Redux store
import SummaryPage from "../containers/SummaryPage";
import { JSX } from "react/jsx-runtime";

export default {
  title: "Pages/SummaryPage",
  component: SummaryPage,
  decorators: [
    (Story) => (
      <Provider store={store}>
        <Story />
      </Provider>
    ),
  ],
} as Meta;

export const SummaryPageExample: StoryObj = (args: JSX.IntrinsicAttributes) => <SummaryPage {...args} />;
SummaryPageExample.args = {};
