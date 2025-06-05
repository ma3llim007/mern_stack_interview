import useFetch from "../hooks/useFetch";

const Users = () => {
    const { data, error, loading } = useFetch("https://dummyjson.com/users");
    
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error Loading User: {error.message}</p>;

    return (
        <>
            <h1>User Listing</h1>
            {data?.users?.map((user) => (
                <p key={user.id}>
                    {user.firstName} {user.lastName}
                </p>
            ))}
        </>
    );
};

export default Users;
