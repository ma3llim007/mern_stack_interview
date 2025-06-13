import React from "react";
import { Link } from "react-router";

const NotFound = () => {
    return (
        <section className="text-gray-600 body-font flex justify-center items-center h-full">
            <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
                <div className="text-center w-full space-y-4">
                    <h1 className="title-font sm:text-5xl text-7xl mb-4 font-medium text-gray-900">404 Not Found</h1>
                    <div className="flex justify-center">
                        <Link to={"/"} className="inline-flex text-white bg-gray-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg cursor-pointer">
                            Back To Home 🏠
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default NotFound;
