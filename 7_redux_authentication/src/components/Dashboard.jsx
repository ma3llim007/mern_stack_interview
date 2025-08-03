import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser, logOutUser } from "../features/auth.slice";

const Dashboard = () => {
    const { isLogin, userData } = useSelector((state) => state.auth);
    const dispatch = useDispatch();

    if (!isLogin) {
        return (
            <div className="w-full h-screen flex justify-center items-center container mx-auto">
                <div className="w-sm text-center px-5 pt-4 pb-2 border rounded bg-red-500 border-red-700 space-y-5">
                    <h2 className="text-xl font-bold underline">Login First To Access Dashboard</h2>
                    <button
                        type="button"
                        onClick={() => dispatch(loginUser({ id: "1142", name: "Mohd Sameer", email: "mohdsameer68257@gmail.com" }))}
                        className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-900 cursor-pointer"
                    >
                        Login to Access
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="w-full h-screen flex justify-center items-center container mx-auto">
            <div className="w-sm p-3 border rounded bg-slate-800 border-slate-400 space-y-5">
                <h1 className="text-center text-xl underline font-bold">User Login</h1>
                <h3>
                    <strong>Name: </strong>
                    {userData.name}
                </h3>
                <p>
                    <strong>Email: </strong>
                    {userData.email}
                </p>
                <button
                    type="button"
                    onClick={() => dispatch(logOutUser())}
                    className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-green-900 cursor-pointer"
                >
                    Log-out
                </button>
            </div>
        </div>
    );
};

export default Dashboard;
