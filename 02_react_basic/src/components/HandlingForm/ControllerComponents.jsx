import { useState } from "react";

const ControllerComponents = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
    });

    const handleOnChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };
    const handleOnSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };
    return (
        <form onSubmit={handleOnSubmit} style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "11px" }}>
                <label style={{ fontSize: "22px", textAlign: "start" }} htmlFor="name">
                    Name
                </label>
                <input value={formData.name} onChange={handleOnChange} style={{ fontSize: "20px" }} id="name" name="name" placeholder="Enter Your Name" />
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "11px" }}>
                <label style={{ fontSize: "22px", textAlign: "start" }} htmlFor="email">
                    E-Mail
                </label>
                <input value={formData.email} onChange={handleOnChange} style={{ fontSize: "20px" }} id="email" name="email" placeholder="Enter E-Mail Name" />
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "11px" }}>
                <label style={{ fontSize: "22px", textAlign: "start" }} htmlFor="phone">
                    phone
                </label>
                <input value={formData.phone} onChange={handleOnChange} style={{ fontSize: "20px" }} id="phone" name="phone" placeholder="Enter Your Phone Number" />
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "11px" }}>
                <label style={{ fontSize: "22px", textAlign: "start" }} htmlFor="subject">
                    Subject
                </label>
                <input value={formData.subject} onChange={handleOnChange} style={{ fontSize: "20px" }} id="subject" name="subject" placeholder="Enter Your Subject" />
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "11px" }}>
                <label style={{ fontSize: "22px", textAlign: "start" }} htmlFor="message">
                    Message
                </label>
                <textarea value={formData.message} onChange={handleOnChange} style={{ fontSize: "20px" }} id="message" name="message" cols={23} rows={4} placeholder="Enter Your Message" />
            </div>
            <br />
            <button>Submit</button>
        </form>
    );
};

export default ControllerComponents;
