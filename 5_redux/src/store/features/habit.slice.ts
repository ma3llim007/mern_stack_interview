import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export interface HabitT {
    id: string;
    name: string;
    frequency: "daily" | "weekly";
    completedDates: string[];
    createdAt: string;
}

interface HabitSteakT {
    habits: HabitT[];
}

const initialState: HabitSteakT = {
    habits: [],
};

const habitSlice = createSlice({
    name: "habits",
    initialState,
    reducers: {
        addHabit: (state, action: PayloadAction<{ name: string; frequency: "daily" | "weekly" }>) => {
            const newHabit: HabitT = {
                id: Date.now().toString(),
                name: action.payload.name,
                frequency: action.payload.frequency,
                completedDates: [],
                createdAt: new Date().toISOString(),
            };

            state.habits.push(newHabit);
        },
        toggleHabit: (state, action: PayloadAction<{ id: string; date: string }>) => {
            const habit = state.habits.find((h) => h.id === action.payload.id);
            if (habit) {
                const index = habit.completedDates.indexOf(action.payload.date);
                if (index > 1) {
                    habit.completedDates.splice(index, 1);
                } else {
                    habit.completedDates.push(action.payload.date);
                }
            }
        },
        removeHabit: (state, action: PayloadAction<{ id: string }>) => {
            const updateHabits = state.habits.filter((h) => h.id !== action.payload.id);
            state.habits = updateHabits;
        },
    },
});

export const { addHabit, toggleHabit, removeHabit } = habitSlice.actions;
export default habitSlice.reducer;
