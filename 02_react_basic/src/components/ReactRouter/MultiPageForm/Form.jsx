import { BrowserRouter, Routes } from "react-router";
import UserDetailsProvider from "./context/UserDetailsProvider";
import { Route } from "react-router";
import Personal from "./Pages/Personal";
import Education from "./Pages/Education";
import Skills from "./Pages/Skills";
import Review from "./Pages/Review";

const Form = () => {
    return (
        <UserDetailsProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Personal />} />
                    <Route path="/education" element={<Education />} />
                    <Route path="/skills" element={<Skills />} />
                    <Route path="/review" element={<Review />} />
                </Routes>
            </BrowserRouter>
        </UserDetailsProvider>
    );
};

export default Form;
