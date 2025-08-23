import { useState } from "react";

const Input = () => {
    const [email, setEmail] = useState("");
    return (
        <div>
            <div className="relative mb-4">
                <h2>{email}</h2>
                <label htmlFor="email" className="leading-7 text-base">
                    Email
                </label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter Your Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
            </div>
        </div>
    );
};

export default Input;
