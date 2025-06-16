import { createContext } from "react";

const initialState = {
    formData: {},
    updateDetails: () => {},
};

const UserDetails = createContext(initialState);

export default UserDetails;
