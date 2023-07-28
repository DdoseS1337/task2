import { configureStore } from "@reduxjs/toolkit";
import notesReducer from "../reducers/notesReducer";
import summaryReducer from '../reducers/summaryReducer';

const store = configureStore({
  reducer: {
    notesData: notesReducer,
    summaryData: summaryReducer,
  },
});


export default store;


export type RootState = ReturnType<typeof store.getState>;
