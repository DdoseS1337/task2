
export enum NoteCategory {
  Task = "Task",
  RandomThought = "Random Thought",
  Idea = "Idea",
}

export interface Note {
  id: number;
  time: Date;
  content: string;
  category: NoteCategory;
  datesMentioned: string[];
  archived: boolean;
}

export interface SummaryData {
  [category: string]: {
    activeNotesCount: number;
    archivedNotesCount: number;
  };
}