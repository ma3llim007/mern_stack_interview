const If = (props) => {
    if (props.isLoggedIn) {
        return <h1>Welcome Back!</h1>;
    }
    return <h1>Please Sign In.</h1>;
};

export default If;
