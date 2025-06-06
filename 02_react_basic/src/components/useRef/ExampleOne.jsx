import { useRef } from "react";

const ExampleOne = () => {
    const inputRef = useRef(null);

    const handleClick = () => {
        inputRef.current.focus();
    };
    return (
        <div className="h-screen w-full flex justify-center items-center">
            <div class="relative mb-4 space-y-3">
                <label for="email" class="leading-7 text-base text-gray-600">
                    Email
                </label>
                <input
                    ref={inputRef}
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter Your E-Mail"
                    className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
                <button onClick={handleClick} className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-base cursor-pointer">
                    Change Theme
                </button>
            </div>
        </div>
    );
};

export default ExampleOne;
