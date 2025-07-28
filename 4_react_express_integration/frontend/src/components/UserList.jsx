import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

const UserList = () => {
    const [users, setUsers] = useState([]);
    const [laoding, setLoading] = useState(true);
    const [error, setError] = useState(null);
    console.log(users[0]);

    useEffect(() => {
        axios
            .get("http://localhost:8000/users/")
            .then((response) => {
                setUsers(response?.data?.users);
                setLoading(false);
                setError(null);
            })
            .catch((error) => {
                setError(error.message);
                setLoading(false);
            });
    }, []);

    if (laoding)
        return (
            <div className="flex justify-center items-center h-64">
                <div className="w-12 h-12 border-4 border-solid border-blue-500 border-t-transparent rounded-full animate-spin"></div>
            </div>
        );

    if (error) {
        return <div className="w-full border-2 rounded border-red-800 bg-red-600 h-10 text-white text-2xl text-center font-bold underline my-5">{error}</div>;
    }

    return (
        <div className="mt-4 flex justify-center items-center flex-wrap gap-2">
            {users.map((user) => (
                <div className="max-w-sm border-1 border-gray-500 rounded p-2" key={user.id}>
                    <p>{user.name}</p>
                </div>
            ))}
        </div>
    );
};
export default UserList;
