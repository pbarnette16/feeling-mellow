import { create } from 'zustand';

export interface Exercise {
  id: number;
  type: 'habit' | 'once';
  exerciseId: number;
  time?: string;
  date?: string;
  days?: number[];
}

interface AppState {
  exercises: Exercise[];
  addExercise: (exercise: Exercise) => void;
  clearExercises: () => void;
}

export const useStore = create<AppState>((set) => ({
  exercises: [],
  addExercise: (exercise) => 
    set((state) => ({ exercises: [...state.exercises, exercise] })),
  clearExercises: () => set({ exercises: [] }),
}));