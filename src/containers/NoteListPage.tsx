import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store/configureStore";
import { Note } from "../types/types";
import { archiveNote, removeNote, editNote } from "../reducers/notesReducer";
import NoteForm from "../components/NoteForm";
import EditNoteForm from "../components/EditForm";
import ArchivedNotesModal from "../components/ArchivedNotesModal";
import NoteItem from "../components/NoteItem";

const NoteList: React.FC = () => {
  const notes = useSelector((state: RootState) => state.notesData);
  const dispatch = useDispatch();
  const [editingNote, setEditingNote] = useState<Note | null>(null);
  const [showArchivedModal, setShowArchivedModal] = useState(false);

  const handleEditNote = (note: Note) => {
    dispatch(editNote(note));
    setEditingNote(note);
  };

  const handleArchiveNote = (noteId: number) => {
    dispatch(archiveNote(noteId));
  };

  const handleRemoveNote = (noteId: number) => {
    dispatch(removeNote(noteId));
  };

  const handleCloseEditNoteForm = () => {
    setEditingNote(null);
  };

  const handleShowArchivedModal = () => {
    setShowArchivedModal(true);
  };

  const handleHideArchivedModal = () => {
    setShowArchivedModal(false);
  };

  const nonArchivedNotes = notes.filter((note) => !note.archived);

  return (
    <div className="note-list">
      <h2>List of Notes</h2>
      <table>
        <thead>
          <tr>
            <th>Time</th>
            <th>Content</th>
            <th>Category</th>
            <th>Dates Mentioned</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {nonArchivedNotes.map((note) => (
            <NoteItem
              key={note.id}
              note={note}
              onEditNote={handleEditNote}
              onArchiveNote={handleArchiveNote}
              onRemoveNote={handleRemoveNote}
            />
          ))}
        </tbody>
      </table>
      <button onClick={handleShowArchivedModal}>Archived Notes</button>
      {showArchivedModal && (
        <ArchivedNotesModal onClose={handleHideArchivedModal} />
      )}

      {editingNote ? (
        <EditNoteForm note={editingNote} onClose={handleCloseEditNoteForm} />
      ) : (
        <NoteForm />
      )}
    </div>
  );
};

export default NoteList;
