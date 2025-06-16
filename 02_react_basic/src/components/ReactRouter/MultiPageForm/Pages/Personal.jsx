import { Link, useNavigate } from "react-router";
import { useFormContext } from "../context/UserDetailsProvider";

const Personal = () => {
    const { formData, updateDetails } = useFormContext();
    const navigate = useNavigate();

    const handleOnChange = (e) => {
        updateDetails({ [e.target.name]: e.target.value });
    };
    const moveToNext = (e) => {
        e.preventDefault();
        navigate("/education");
    };
    return (
        <form onSubmit={moveToNext} className="flex flex-col justify-center items-center w-full h-screen container mx-auto">
            <div className="relative mb-4">
                <label htmlFor="name" className="leading-7 text-sm text-gray-600">
                    Name
                </label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleOnChange}
                    className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
            </div>
            <div className="relative mb-4">
                <label htmlFor="phoneNumber" className="leading-7 text-sm text-gray-600">
                    Phone Number
                </label>
                <input
                    type="text"
                    id="phoneNumber"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleOnChange}
                    className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
            </div>
            <div className="relative mb-4">
                <label htmlFor="email" className="leading-7 text-sm text-gray-600">
                    E-Mail
                </label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleOnChange}
                    className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
            </div>
            <button type="submit" className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                Next
            </button>
        </form>
    );
};

export default Personal;
