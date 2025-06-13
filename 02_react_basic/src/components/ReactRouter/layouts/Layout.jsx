import Footer from "../utils/Footer";
import Header from "../utils/Header";
import { Outlet } from "react-router";

const Layout = () => {
    return (
        <div className="w-full h-screen flex flex-col gap-4">
            <Header />
            <div className="container mx-auto grow">
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default Layout;
