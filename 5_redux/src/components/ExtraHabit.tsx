import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../store/store";
import { useEffect } from "react";
import { fetchHabits } from "../store/features/habit.slice";

const ExtraHabit: React.FC = () => {
    const { habits, error, isLoading } = useSelector((state: RootState) => state.habits);
    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        dispatch(fetchHabits());
    }, []);
    return <>{JSON.stringify(habits)}</>;
};

export default ExtraHabit;
