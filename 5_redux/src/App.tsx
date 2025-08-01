import { Provider } from "react-redux";
import "./App.css";
import { Container, Typography } from "@mui/material";
import store from "./store/store";
import AddHabit from "./components/AddHabit";
import HabitList from "./components/HabitList";
import ExtraHabit from "./components/ExtraHabit";

function App() {
    return (
        <Provider store={store}>
            <Container maxWidth="md">
                <Typography component={"h1"} variant="h1" align="center">
                    Habit Tracker
                </Typography>
                <AddHabit />
                <HabitList />
                <ExtraHabit />
            </Container>
        </Provider>
    );
}

export default App;
