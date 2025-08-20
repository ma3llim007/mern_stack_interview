import { useState } from "react";

const Button = () => {
    const [addHeading, setAddHeading] = useState("");
    return (
        <div className="text-center space-y-4 my-6">
            <h1>Test Click Event With Button</h1>
            <button className="cursor-pointer text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" onClick={() => setAddHeading("New Heading Append")}>Add Heading</button>
            {addHeading ? <h1>{addHeading}</h1> : null}
        </div>
    );
};

export default Button;
