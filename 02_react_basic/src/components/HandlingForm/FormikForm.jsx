import { Formik } from "formik";

const FormikForm = () => {
    return (
        <Formik
            initialValues={{ name: "", email: "", phone: "", subject: "", message: "" }}
            validate={(values) => {
                const errors = {};

                // Name validation
                if (!values.name) {
                    errors.name = "Name is required";
                } else if (values.name.length < 2) {
                    errors.name = "Name must be at least 2 characters";
                }
                // Email validation
                if (!values.email) {
                    errors.email = "Email is required";
                } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
                    errors.email = "Invalid email address";
                }
                // Phone number validation
                if (!values.phone) {
                    errors.phone = "Phone number is required";
                } else if (!/^\+?[0-9]{10,15}$/.test(values.phone)) {
                    errors.phone = "Invalid phone number";
                }
                // Subject validation
                if (!values.subject) {
                    errors.subject = "Subject is required";
                } else if (values.subject.length < 5) {
                    errors.subject = "Subject must be at least 5 characters";
                }
                // Message validation
                if (!values.message) {
                    errors.message = "Subject is required";
                } else if (values.message.length < 5) {
                    errors.message = "Message must be at least 5 characters";
                }

                return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                    console.log(JSON.stringify(values, null, 2));
                    setSubmitting(false);
                }, 400);
            }}
        >
            {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
                <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
                    <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                        <label style={{ fontSize: "22px", textAlign: "start" }} htmlFor="name">
                            Name
                        </label>
                        <input onChange={handleChange} onBlur={handleBlur} value={values.name} style={{ fontSize: "20px" }} id="name" name="name" placeholder="Enter Your Name" />
                        <span style={{ color: "red", fontSize: "16px", fontWeight: "bold", textAlign: "start" }}>{errors.name && touched.name && errors.name}</span>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                        <label style={{ fontSize: "22px", textAlign: "start" }} htmlFor="email">
                            Email
                        </label>
                        <input onChange={handleChange} onBlur={handleBlur} value={values.email} style={{ fontSize: "20px" }} id="email" name="email" placeholder="Enter Your Email" />
                        <span style={{ color: "red", fontSize: "16px", fontWeight: "bold", textAlign: "start" }}>{errors.email && touched.email && errors.email}</span>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                        <label style={{ fontSize: "22px", textAlign: "start" }} htmlFor="phone">
                            Phone
                        </label>
                        <input onChange={handleChange} onBlur={handleBlur} value={values.phone} style={{ fontSize: "20px" }} id="phone" name="phone" placeholder="Enter Your Phone" />
                        <span style={{ color: "red", fontSize: "16px", fontWeight: "bold", textAlign: "start" }}>{errors.phone && touched.phone && errors.phone}</span>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                        <label style={{ fontSize: "22px", textAlign: "start" }} htmlFor="subject">
                            subject
                        </label>
                        <input onChange={handleChange} onBlur={handleBlur} value={values.subject} style={{ fontSize: "20px" }} id="subject" name="subject" placeholder="Enter Your Subject" />
                        <span style={{ color: "red", fontSize: "16px", fontWeight: "bold", textAlign: "start" }}>{errors.subject && touched.subject && errors.subject}</span>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                        <label style={{ fontSize: "22px", textAlign: "start" }} htmlFor="message">
                            Message
                        </label>
                        <textarea
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.message}
                            style={{ fontSize: "20px" }}
                            id="message"
                            name="message"
                            cols={23}
                            rows={4}
                            placeholder="Enter Your Message"
                        />
                        <span style={{ color: "red", fontSize: "16px", fontWeight: "bold", textAlign: "start" }}>{errors.message && touched.message && errors.message}</span>
                        <button type="submit" disabled={isSubmitting}>
                            Submit
                        </button>
                    </div>
                </form>
            )}
        </Formik>
    );
};

export default FormikForm;
