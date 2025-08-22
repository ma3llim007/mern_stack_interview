import { useEffect, useState } from "react";

const AsyncElement = () => {
    const [data, setData] = useState(false);
    useEffect(() => {
        setTimeout(() => {
            setData(true);
        }, 1000);
    }, []);

    return (
        <div className="container">
            <h1>FindBy And FindAllBy</h1>
            {data ? <h1>Data Found</h1> : <h1>No Data Found</h1>}
        </div>
    );
};

export default AsyncElement;
