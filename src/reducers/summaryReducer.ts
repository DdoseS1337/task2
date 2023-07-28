import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SummaryData, Note, NoteCategory } from "../types/types";

const initialState: SummaryData = {
  [NoteCategory.Task]: { activeNotesCount: 0, archivedNotesCount: 0 },
  [NoteCategory.RandomThought]: { activeNotesCount: 0, archivedNotesCount: 0 },
  [NoteCategory.Idea]: { activeNotesCount: 0, archivedNotesCount: 0 },
};

const summarySlice = createSlice({
  name: "summaryData",
  initialState,
  reducers: {
    updateSummaryData: (state, action: PayloadAction<Note[]>) => {
      return action.payload.reduce((updatedSummary, note) => {
        const category = note.category;
        updatedSummary[category] = {
          ...updatedSummary[category],
          [note.archived ? "archivedNotesCount" : "activeNotesCount"]: updatedSummary[category][note.archived ? "archivedNotesCount" : "activeNotesCount"] + 1,
        };
        return updatedSummary;
      }, { ...initialState });
    },
  },
});

export const { updateSummaryData } = summarySlice.actions;
export default summarySlice.reducer;
