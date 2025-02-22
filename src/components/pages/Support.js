import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import validator from "validator";
import Loader from "../utility/Spinner";
import ImageProvider from "../assets/ImageProvider";
import { motion } from "framer-motion";

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
  const [submitted, setSubmitted] = useState(false); // Track submission
  const pftRef = useRef(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateEmail = () => {
    setEmailValid(validator.isEmail(formData.email));
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_uro8zbs", // Your EmailJS service ID
        "template_xlwojy6", // Your admin email template ID
        {
          user_name: `${formData.firstName} ${formData.lastName}`,
          user_email: formData.email,
          user_phone: formData.phone,
          user_message: formData.message,
        },
        "CY9OzP5uATTExwVyV" // Your EmailJS public key
      )
      .then(() => {
        setSubmitted(true); // Hide form and show thank you message
      })
      .catch((error) => {
        console.error("Error sending email:", error);
        alert("Failed to send email. Please try again later.");
      })
      .finally(() => setLoading(false));
  };
  const handleScroll = () => {
    pftRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  return (
    <div className="support-container">
      {loading && <Loader />}

      {!submitted ? (
        <>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="form-container"
          >
            <div className="overlay-form">
              <div className="form-contain">
                <motion.div
                  initial={{ y: 100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="align-form-right-contain"
                >
                  <img
                    src={ImageProvider[10].form_input_img}
                    alt={ImageProvider[10].form_input_img}
                    className="img-form"
                    loading="lazy"
                  />
                </motion.div>
                <motion.div                   initial={{ y: 100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5 }} className="align-form-left-contain">
                  <form onSubmit={sendEmail} className="email-form">
                    <div className="form-name-content">
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
                    </div>
                    <input
                      type="text"
                      className="input-num"
                      name="phone"
                      placeholder="Phone Number"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                    <div className="email-input-container">
                      <div className="form-email-input-contain">
                        <input
                          type="email"
                          name="email"
                          placeholder="Email Address"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="email-inp-form"
                        />
                        <button
                          type="button"
                          onClick={validateEmail}
                          className="validate-btn"
                        >
                          <i class="bx bx-right-arrow-alt"></i>
                        </button>
                      </div>
                      {emailValid === false && (
                        <p style={{ color: "red" }} className="error-msg">
                          Incorrect Email.
                        </p>
                      )}
                      {emailValid === true && (
                        <p style={{ color: "green" }} className="success-msg">
                          Correct Email.
                        </p>
                      )}
                    </div>

                    <textarea
                      name="message"
                      placeholder="Your Message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="textarea"
                    />

                    <button className="btn-submit" type="submit">
                      Submit
                    </button>
                  </form>
                </motion.div>
              </div>
            </div>
          </motion.div>
          <div className="pft-container" ref={pftRef} >
            <button onClick={handleScroll} >arrow</button>
            <div className="pft-contain-one">
              <h5 className="heading-pft-one">Benefits of Joining EduMedia</h5>
              <ol className="pft-list-o">
                <li className="pft-items-o">
                  Gain access to high-quality educational resources.
                </li>
                <li className="pft-items-o">
                  Receive personalized recommendations based on your interests.
                </li>
                <li className="pft-items-o">
                  Be the first to know about new courses, books, and study
                  materials.
                </li>
                <li className="pft-items-o">
                  Connect with a community of learners and educators.
                </li>
              </ol>
            </div>
            <div className="pft-contain-one">
              <h5 className="heading-pft-one">Terms & Privacy Policy</h5>
              <ol className="pft-list-o">
                <li className="pft-items-o">
                  Your Every Data will be store in LocalStorage.
                </li>
                <li className="pft-items-o">
                  when you fill out the form after submit the credential will be
                  pass out in our admin mail
                </li>
                <li className="pft-items-o">
                  Assured users that their information is protected.
                </li>
                <li className="pft-items-o">
                  Read Our Privacy Policy in About Page.
                </li>
              </ol>
            </div>
            <div className="pft-contain-two">
              <h5 className="heading-pft-t">FAQ</h5>
              <div className="pft-q-contain-t">
                <div className="pft-q-contain">
                  <h5 className="heading-q-pft">
                    Is this the Application Free?
                  </h5>
                  <p className="text-p-t">
                    Yes, But After some time it will turn into in paid Program.
                  </p>
                </div>
                <div className="pft-q-contain">
                  <h5 className="heading-q-pft">How will I receive updates?</h5>
                  <p className="text-p-t">
                    Yes, via Email, Notification or Message.
                  </p>
                </div>
                <div className="pft-q-contain">
                  <h5 className="heading-q-pft">Can I delete my data later?</h5>
                  <p className="text-p-t">
                    Yes, You can dalete your credential after request in email.
                  </p>
                </div>
              </div>
            </div>
            <div className="pft-contain-three">
              <h5 className="pft-heading-three">Contact us</h5>
              <div className="pft-three-contain">
                <h5 className="q-pft-three">Have questions?</h5>
                <p className="ans-q-pft">
                  Email us on{" "}
                  <a
                    href="mailto:SandeepKumar136@yandex.com"
                    className="link-gmail"
                  >
                    Support@yandex.com
                  </a>
                </p>
              </div>
              <div className="pft-three-contain">
                <h5 className="q-pft-three">Follow us on:</h5>
                <p className="ans-q-pft">
                  <a href="" className="link-social-f">
                    <i className="bx bxl-facebook-circle"></i>
                  </a>
                  <a href="" className="link-social-f">
                    <i className="bx bxl-twitter"></i>
                  </a>
                  <a href="" className="link-social-f">
                    <i className="bx bxl-instagram"></i>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className="thank-you">
          <h2>🎉 Thank You!</h2>
          <p>
            Your message has been successfully sent. We'll get back to you soon!
          </p>
        </div>
      )}
    </div>
  );
};

export default Support;
