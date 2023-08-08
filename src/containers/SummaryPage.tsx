import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store/configureStore";
import { SummaryData, NoteCategory } from "../types/types";
import { updateSummaryData } from "../reducers/summaryReducer"; 

const SummaryPage: React.FC = () => {
  const categories: NoteCategory[] = [
    NoteCategory.Task,
    NoteCategory.RandomThought,
    NoteCategory.Idea,
  ];

  const notes = useSelector((state: RootState) => state.notesData);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(updateSummaryData(notes));
  }, [notes, dispatch]);

  const summaryData = useSelector(
    (state: RootState) => state.summaryData
  ) as SummaryData;

  return (
    <div className="summary-page">
      <h2>Summary</h2>
      <table className="summary-table">
        <thead>
          <tr>
            <th>Category</th>
            <th>Active Notes Count</th>
            <th>Archived Notes Count</th>
          </tr>
        </thead>
        <tbody>
          {categories.map((category) => (
            <tr key={category}>
              <td>{category}</td>
              <td>{summaryData[category]?.activeNotesCount || 0}</td>
              <td>{summaryData[category]?.archivedNotesCount || 0}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SummaryPage;
