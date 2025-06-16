import { useFormContext } from "../context/UserDetailsProvider";

const Review = () => {
    const {formData} = useFormContext();
    return <div className="flex flex-col justify-center items-center w-full h-screen container mx-auto">{JSON.stringify(formData)}</div>;
};

export default Review;
