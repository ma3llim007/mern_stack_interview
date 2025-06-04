import { useEffect, useState } from "react";

const UserList = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch("https://dummyjson.com/users")
            .then((response) => response.json())
            .then((data) => {
                setUsers(data.users);
            });
    }, []);

    return (
        <>
            <h1>User Listing</h1>
            {users?.map((user) => (
                <p key={user.id}>
                    {user.firstName} {user.lastName}
                </p>
            ))}
        </>
    );
};

export default UserList;
