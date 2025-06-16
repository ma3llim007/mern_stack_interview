import { useContext, useState } from "react";
import UserDetails from "./UserDetails";

const UserDetailsProvider = ({ children }) => {
    const [formData, setFormData] = useState({
        name: "",
        phoneNumber: "",
        email: "",
        education: "",
        skills: "",
    });

    const updateDetails = (data) => {
        setFormData((Prev) => ({ ...Prev, ...data }));
    };

    return <UserDetails.Provider value={{ formData, updateDetails }}>{children}</UserDetails.Provider>;
};

export default UserDetailsProvider;

export const useFormContext = () => useContext(UserDetails);
