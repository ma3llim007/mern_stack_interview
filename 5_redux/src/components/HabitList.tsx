import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../store/store";
import { Box, Button, Grid, Paper, Typography } from "@mui/material";
import { CheckCircleRounded, DeleteRounded } from "@mui/icons-material";
import { removeHabit, toggleHabit } from "../store/features/habit.slice";

const HabitList = () => {
    const { habits } = useSelector((state: RootState) => state.habits);
    const dispatch = useDispatch<AppDispatch>();
    const today = new Date().toISOString().split("T")[0];

    return (
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 4 }}>
            {habits.map((habit) => (
                <Paper key={habit.id} elevation={2} sx={{ p: 2 }}>
                    <Grid container alignItems="center">
                        <Grid size={{ xs: 12, sm: 6 }}>
                            <Typography variant="h6">{habit.name}</Typography>
                            <Typography variant="body2" color="textSecondary" sx={{ textTransform: "capitalize" }}>
                                {habit.frequency}
                            </Typography>
                        </Grid>
                        <Grid size={{ xs: 12, sm: 6 }}>
                            <Box sx={{ display: "flex", justifyContent: "flex-end", gap: 1 }}>
                                <Button
                                    startIcon={<CheckCircleRounded />}
                                    variant="outlined"
                                    color={habit.completedDates.includes(today) ? "success" : "primary"}
                                    onClick={() => {
                                        dispatch(toggleHabit({ id: habit.id, date: today }));
                                    }}
                                >
                                    {habit.completedDates.includes(today) ? "Completed" : "Mark Complete"}
                                </Button>
                                <Button startIcon={<DeleteRounded />} variant="outlined" color="error" onClick={() => dispatch(removeHabit({ id: habit.id }))}>
                                    Remove
                                </Button>
                            </Box>
                        </Grid>
                    </Grid>
                </Paper>
            ))}
        </Box>
    );
};

export default HabitList;
