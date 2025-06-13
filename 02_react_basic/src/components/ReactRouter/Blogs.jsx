import { Link } from "react-router";

const Blogs = () => {
    return (
        <div className="flex flex-wrap justify-center gap-4 mt-44">
            <div className="w-sm border border-gray-600 rounded-sm px-4 py-2 space-y-3">
                <h1 className="text-2xl">How React Works?</h1>
                <Link to={"/blog-details/how-react-works"} className="inline-flex text-white bg-gray-500 border-0 py-1 px-2 focus:outline-none hover:bg-indigo-600 rounded text-base cursor-pointer">
                    View More
                </Link>
            </div>
            <div className="w-sm border border-gray-600 rounded-sm px-4 py-2 space-y-3">
                <h1 className="text-2xl">What is useState?</h1>
                <Link to={"/blog-details/what-is-usestate"} className="inline-flex text-white bg-gray-500 border-0 py-1 px-2 focus:outline-none hover:bg-indigo-600 rounded text-base cursor-pointer">
                    View More
                </Link>
            </div>
            <div className="w-sm border border-gray-600 rounded-sm px-4 py-2 space-y-3">
                <h1 className="text-2xl">What is the useEffect?</h1>
                <Link to={"/blog-details/what-is-the-useeffect"} className="inline-flex text-white bg-gray-500 border-0 py-1 px-2 focus:outline-none hover:bg-indigo-600 rounded text-base cursor-pointer">
                    View More
                </Link>
            </div>
            <div className="w-sm border border-gray-600 rounded-sm px-4 py-2 space-y-3">
                <h1 className="text-2xl">Why is React is so popular?</h1>
                <Link to={"/blog-details/why-is-react-is-so-popular"} className="inline-flex text-white bg-gray-500 border-0 py-1 px-2 focus:outline-none hover:bg-indigo-600 rounded text-base cursor-pointer">
                    View More
                </Link>
            </div>
            <div className="w-sm border border-gray-600 rounded-sm px-4 py-2 space-y-3">
                <h1 className="text-2xl">new features of reacts?</h1>
                <Link to={"/blog-details/new-features-of-reacts"} className="inline-flex text-white bg-gray-500 border-0 py-1 px-2 focus:outline-none hover:bg-indigo-600 rounded text-base cursor-pointer">
                    View More
                </Link>
            </div>
            <div className="w-sm border border-gray-600 rounded-sm px-4 py-2 space-y-3">
                <h1 className="text-2xl">useState Vs useRef?</h1>
                <Link to={"/blog-details/usestate-vs-useref"} className="inline-flex text-white bg-gray-500 border-0 py-1 px-2 focus:outline-none hover:bg-indigo-600 rounded text-base cursor-pointer">
                    View More
                </Link>
            </div>
        </div>
    );
};

export default Blogs;
