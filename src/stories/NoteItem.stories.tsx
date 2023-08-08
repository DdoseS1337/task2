import { StoryObj, Meta } from '@storybook/react';
import NoteItem, { Props as NoteItemProps } from "../components/NoteItem";
import { NoteCategory } from "../types/types";
import '../index.css';

export default {
  title: "Components/NoteItem",
  component: NoteItem,
} as Meta;

export const NoteItemExample: StoryObj<NoteItemProps> = (args: NoteItemProps) => <NoteItem {...args} />;
NoteItemExample.args = {
  note: {
    time: new Date(),
    content: "Sample Note Content",
    category: NoteCategory.Idea,
    datesMentioned: ["Date 1", "Date 2"],
    id: 1,
    archived: false,
  },
  onEditNote: () => {},
  onArchiveNote: () => {},
  onRemoveNote: () => {},
};
