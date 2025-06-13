import { useParams } from "react-router";

const BlogDetails = () => {
    const { blogSlug } = useParams();
    return (
        <div className="flex justify-center items-center h-full">
            <h1 className="text-6xl font-semibold">Blog Details: {blogSlug}</h1>
        </div>
    );
};

export default BlogDetails;
