const SwitchComponent = ({ status }) => {
    switch (status) {
        case "loading":
            return <h1>Loading....</h1>;
        case "success":
            return <h1>Success....</h1>;
        case "error":
            return <h1>Error....</h1>;
        default:
            return null;
    }
};

export default SwitchComponent;
