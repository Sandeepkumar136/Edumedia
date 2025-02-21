import React, { useState } from "react";
import emailjs from "emailjs-com";
import validator from "validator";

const Support = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    message: "",
  });

  const [emailValid, setEmailValid] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateEmail = () => {
    if (validator.isEmail(formData.email)) {
      setEmailValid(true);
    } else {
      setEmailValid(false);
    }
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
  
    // Send email to admin (you)
    emailjs
      .send(
        "service_uro8zbs",
        "template_xlwojy6", // Template for admin notification
        {
          user_name: formData.firstName + " " + formData.lastName,
          user_email: formData.email,
          user_phone: formData.phone,
          user_message: formData.message,
        },
        "CY9OzP5uATTExwVyV"
      )
      .then((result) => {
        console.log("Admin email sent:", result.text);
  
        // Send thank-you email to the user
        return emailjs.send(
          "YOUR_SERVICE_ID",
          "template_0zzm3em", // Template for user confirmation
          {
            user_email: formData.email, // User's email
            user_name: formData.firstName, // User's first name
          },
          "CY9OzP5uATTExwVyV"
        );
      })
      .then((result) => {
        console.log("User confirmation email sent:", result.text);
        alert("Your message has been sent! Thank you.");
      })
      .catch((error) => {
        console.error("Error sending emails:", error.text);
        alert("Failed to send emails.");
      })
      .finally(() => setLoading(false));
  };
  
  return (
    <form onSubmit={sendEmail} className="email-form">
      <input
        type="text"
        name="firstName"
        placeholder="First Name"
        value={formData.firstName}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="lastName"
        placeholder="Last Name"
        value={formData.lastName}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="phone"
        placeholder="Phone Number"
        value={formData.phone}
        onChange={handleChange}
        required
      />
      <div className="email-input-container">
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <button type="button" onClick={validateEmail} className="validate-btn">
          Validate
        </button>
      </div>
      {emailValid === false && <p className="error-msg">Invalid Email Format</p>}
      {emailValid === true && <p className="success-msg">Valid Email ✅</p>}

      <textarea
        name="message"
        placeholder="Your Message"
        value={formData.message}
        onChange={handleChange}
        required
      />

      <button type="submit" disabled={loading}>
        {loading ? "Sending..." : "Submit"}
      </button>
    </form>
  );
};

export default Support;
