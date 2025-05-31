import { useForm } from "react-hook-form";

const ReactHookForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset,
    } = useForm();

    const onSubmit = (data) => {
        console.log(data);
        reset();
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
            {/* Name */}
            <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                <label style={{ fontSize: "22px", textAlign: "start" }} htmlFor="name">
                    Name
                </label>
                <input
                    {...register("name", { required: "Name is required", minLength: { value: 2, message: "Name must be at least 2 characters" } })}
                    id="name"
                    placeholder="Enter Your Name"
                    style={{ fontSize: "20px" }}
                />
                {errors.name && <span style={{ color: "red", textAlign: "start", fontSize: "16px", fontWeight: "bold" }}>{errors.name.message}</span>}
            </div>
            {/* Email */}
            <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                <label style={{ fontSize: "22px", textAlign: "start" }} htmlFor="email">
                    Email
                </label>
                <input
                    {...register("email", {
                        required: "Email is required",
                        pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: "Invalid email address",
                        },
                    })}
                    id="email"
                    placeholder="Enter Your Email"
                    style={{ fontSize: "20px" }}
                />
                {errors.email && <span style={{ color: "red", textAlign: "start", fontSize: "16px", fontWeight: "bold" }}>{errors.email.message}</span>}
            </div>

            {/* Phone */}
            <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                <label style={{ fontSize: "22px", textAlign: "start" }} htmlFor="phone">
                    Phone
                </label>
                <input
                    {...register("phone", {
                        required: "Phone number is required",
                        pattern: {
                            value: /^\+?[0-9]{10,15}$/,
                            message: "Invalid phone number",
                        },
                    })}
                    id="phone"
                    placeholder="Enter Your Phone"
                    style={{ fontSize: "20px" }}
                />
                {errors.phone && <span style={{ color: "red", textAlign: "start", fontSize: "16px", fontWeight: "bold" }}>{errors.phone.message}</span>}
            </div>

            {/* Subject */}
            <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                <label style={{ fontSize: "22px", textAlign: "start" }} htmlFor="subject">
                    Subject
                </label>
                <input
                    {...register("subject", {
                        required: "Subject is required",
                        minLength: { value: 5, message: "Subject must be at least 5 characters" },
                    })}
                    id="subject"
                    placeholder="Enter Your Subject"
                    style={{ fontSize: "20px" }}
                />
                {errors.subject && <span style={{ color: "red", textAlign: "start", fontSize: "16px", fontWeight: "bold" }}>{errors.subject.message}</span>}
            </div>

            {/* Message */}
            <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                <label style={{ fontSize: "22px", textAlign: "start" }} htmlFor="message">
                    Message
                </label>
                <textarea
                    {...register("message", {
                        required: "Message is required",
                        minLength: { value: 5, message: "Message must be at least 5 characters" },
                    })}
                    id="message"
                    rows={4}
                    cols={23}
                    placeholder="Enter Your Message"
                    style={{ fontSize: "20px" }}
                />
                {errors.message && <span style={{ color: "red", textAlign: "start", fontSize: "16px", fontWeight: "bold" }}>{errors.message.message}</span>}
            </div>
            <button type="submit" disabled={isSubmitting}>
                Submit
            </button>
        </form>
    );
};

export default ReactHookForm;
