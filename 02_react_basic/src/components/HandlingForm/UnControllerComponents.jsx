import { useRef } from "react";

const UnControllerComponents = () => {
    const formRef = useRef(null);

    const handleOnSubmit = (e) => {
        e.preventDefault();
        const form = formRef.current;
        const data = {
            name: form.name.value,
            email: form.email.value,
            phone: form.phone.value,
            subject: form.subject.value,
            message: form.message.value,
        };
        console.log(data);
    };
    return (
        <form ref={formRef} onSubmit={handleOnSubmit} style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "11px" }}>
                <label style={{ fontSize: "22px", textAlign: "start" }} htmlFor="name">
                    Name
                </label>
                <input style={{ fontSize: "20px" }} id="name" name="name" placeholder="Enter Your Name" />
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "11px" }}>
                <label style={{ fontSize: "22px", textAlign: "start" }} htmlFor="email">
                    E-Mail
                </label>
                <input style={{ fontSize: "20px" }} id="email" name="email" placeholder="Enter E-Mail Name" />
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "11px" }}>
                <label style={{ fontSize: "22px", textAlign: "start" }} htmlFor="phone">
                    phone
                </label>
                <input style={{ fontSize: "20px" }} id="phone" name="phone" placeholder="Enter Your Phone Number" />
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "11px" }}>
                <label style={{ fontSize: "22px", textAlign: "start" }} htmlFor="subject">
                    Subject
                </label>
                <input style={{ fontSize: "20px" }} id="subject" name="subject" placeholder="Enter Your Subject" />
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "11px" }}>
                <label style={{ fontSize: "22px", textAlign: "start" }} htmlFor="message">
                    Message
                </label>
                <textarea style={{ fontSize: "20px" }} id="message" name="message" cols={23} rows={4} placeholder="Enter Your Message" />
            </div>
            <br />
            <button>Submit</button>
        </form>
    );
};

export default UnControllerComponents;
