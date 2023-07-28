import React from "react";
import NotesListPage from "./containers/NoteListPage";
import SummaryPage from "./containers/SummaryPage";
import "./index.css";
const App: React.FC = () => {

  return (
    <div className="app">
      <h1>Notes App</h1>
      <NotesListPage />
      <SummaryPage />
    </div>
  );
};

export default App;
