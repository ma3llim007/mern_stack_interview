import { useEffect, useState } from "react";

const CleanUpAbortController = () => {
    const [users, setUsers] = useState([]);
    const [error, setError] = useState(null);
    useEffect(() => {
        const controller = new AbortController();
        const signal = controller.signal;

        fetch("https://dummyjson.com/users", { signal })
            .then((response) => response.json())
            .then((data) => setUsers(data.users))
            .catch((error) => {
                if (error.name === "AbortError") {
                    console.log("fetch Abort");
                } else {
                    setError("Failed To Fetch User");
                }
            });

        // Cleanup function to abort the fetch if component unmounts
        return () => {
            controller.abort();
        };
    }, []);
    return (
        <>
            <h1>User Listing</h1>
            {error && <p>{error}</p>}
            {users?.map((user) => (
                <p key={user.id}>
                    {user.firstName} {user.lastName}
                </p>
            ))}
        </>
    );
};

export default CleanUpAbortController;
