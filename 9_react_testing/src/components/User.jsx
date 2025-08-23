const User = ({ username, changeUsername }) => {
    return (
        <>
            <h1>{username}</h1>
            <button onClick={changeUsername}>Change Name</button>
        </>
    );
};

export default User;
