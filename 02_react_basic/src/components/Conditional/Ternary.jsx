const Ternary = ({ isLoggedIn }) => {
    return <>{isLoggedIn ? <h1>Welcome Back!</h1> : <h1>Please Login</h1>}</>;
};

export default Ternary;
