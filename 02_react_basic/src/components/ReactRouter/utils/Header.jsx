import React from "react";
import { Link } from "react-router";

const Header = () => {
    return (
        <header className="text-gray-800 body-font">
            <div className="container mx-auto flex flex-wrap p-5 flex-col items-center">
                <nav className="flex flex-wrap items-center text-base justify-center">
                    <Link to={"/"} className="mr-5 hover:text-gray-900 font-bold cursor-pointer">
                        Home
                    </Link>
                    <Link to={"/about-us"} className="mr-5 hover:text-gray-900 font-bold cursor-pointer">
                        About
                    </Link>
                    <Link to={"/blogs"} className="mr-5 hover:text-gray-900 font-bold cursor-pointer">
                        Blogs
                    </Link>
                    <Link to={"/contact-us"} className="mr-5 hover:text-gray-900 font-bold cursor-pointer">
                        Contact Us
                    </Link>
                </nav>
            </div>
        </header>
    );
};

export default Header;
