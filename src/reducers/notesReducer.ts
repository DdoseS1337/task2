import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Note, NoteCategory } from "../types/types";


const initialState: Note[] = [
  {
    id: 1,
    time: new Date("2023-07-24T12:00:00"),
    content: "Sample note 1 3/5/2021, 5/5/2021",
    category: NoteCategory.Task,
    datesMentioned: ["3/5/2021", "5/5/2021"],
    archived: false,
  },
  {
    id: 2,
    time: new Date("2023-07-24T12:00:00"),
    content: "Sample note 2 23/7/2023",
    category: NoteCategory.RandomThought,
    datesMentioned: ["23/7/2023"],
    archived: false,
  },
  {
    id: 3,
    time: new Date("2023-07-24T12:00:00"),
    content: "Sample note 3 13/9/2022",
    category: NoteCategory.Task,
    datesMentioned: ["13/9/2022"],
    archived: false,
  },
  {
    id: 4,
    time: new Date("2023-07-24T12:00:00"),
    content: "Sample note 4 5/5/2021",
    category: NoteCategory.RandomThought,
    datesMentioned: ["5/5/2023"],
    archived: false,
  },
  {
    id: 5,
    time: new Date("2023-07-24T12:00:00"),
    content: "Sample note 5 3/5/2023",
    category: NoteCategory.Idea,
    datesMentioned: ["3/5/2023"],
    archived: false,
  },
  {
    id: 6,
    time: new Date("2023-07-24T12:00:00"),
    content: "Sample note 6 22/5/2023",
    category: NoteCategory.RandomThought,
    datesMentioned: ["22/5/2023"],
    archived: false,
  },
  {
    id: 7,
    time: new Date("2023-07-24T12:00:00"),
    content: "Sample note 7 12/5/2022",
    category: NoteCategory.Idea,
    datesMentioned: ["12/5/2022"],
    archived: false,
  },
];


const notesSlice = createSlice({
  name: "notesData",
  initialState,
  reducers: {
    archiveNote: (state, action: PayloadAction<number>) => {
      const noteId = action.payload;
      const noteToArchive = state.find((note) => note.id === noteId);

      if (noteToArchive) {
        noteToArchive.archived = true;
      }
    },
    removeNote: (state, action: PayloadAction<number>) => {
      return state.filter((note) => note.id !== action.payload);
    },
    unarchiveNote: (state, action: PayloadAction<number>) => {
      return state.map((note) =>
        note.id === action.payload ? { ...note, archived: false } : note
      );
    },
    addNote: (state, action: PayloadAction<Note>) => {
      state.push(action.payload);
    },
    editNote: (state, action: PayloadAction<Note>) => {
      const editedNote = action.payload;
      const index = state.findIndex((note) => note.id === editedNote.id);
      if (index !== -1) {
        state[index] = editedNote;
      }
    },
  },
});

export const { archiveNote, removeNote, unarchiveNote, addNote, editNote } =
  notesSlice.actions;

export default notesSlice.reducer;
