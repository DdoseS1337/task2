import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store/configureStore";
import { Note } from "../types/types";
import { unarchiveNote } from "../reducers/notesReducer";

interface ArchivedNotesModalProps {
  onClose: () => void;
}

const ArchivedNotesModal: React.FC<ArchivedNotesModalProps> = ({ onClose }) => {
  const dispatch = useDispatch();
  const modalRef = React.useRef<HTMLDivElement>(null);
  const archivedNotes = useSelector((state: RootState) =>
    state.notesData.filter((note) => note.archived)
  );

  const handleUnarchive = (noteId: number) => {
    dispatch(unarchiveNote(noteId));
  };

  const handleCloseModal = () => {
    modalRef.current?.classList.remove("show");
  };

  return (
    <div className="archived-notes-modal" ref={modalRef}>
      <div className="modal-content">
        <span className="close" onClick={handleCloseModal}>
          &times;
        </span>
        <h3>Archived Notes</h3>
        <table>
          <thead>
            <tr>
              <th>Time of Creation</th>
              <th>Note Content</th>
              <th>Note Category</th>
              <th>Dates Mentioned</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {archivedNotes.map((note: Note) => (
              <tr key={note.id}>
                <td>{note.time.toLocaleString()}</td>
                <td>{note.content}</td>
                <td>{note.category}</td>
                <td>{note.datesMentioned.join(", ")}</td>
                <td>
                  <button onClick={() => handleUnarchive(note.id)}>
                    Unarchive
                  </button>
                </td>
              </tr>
              
            ))}
          </tbody>
        </table>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default ArchivedNotesModal;
