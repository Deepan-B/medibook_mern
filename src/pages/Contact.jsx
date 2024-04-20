import { useState } from "react";
import { toast } from "react-toastify";
// import HashLoader from "react-spinners/HashLoader";
import { BASE_URL } from "../../config";

const Contact = () => {
  const [formData, setFormData] = useState({
    email: "",
    subject: "",
    message: "",
  });

  const handleFormDataChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    const emailPattern = /\S+@\S+\.\S+/;
    if (!emailPattern.test(formData.email)) {
      setFormData({ ...formData, [e.target.name]: "" });
      return toast.error("Please enter a valid email address");
    }

    if (!formData.subject || !formData.message) {
      if (!formData.subject) {
        setFormData({ ...formData, [formData.subject]: "" });
        return toast.error("all the fields are mandatory")
      }
      else {
        setFormData({ ...formData, [formData.message]: "" });
        return toast.error("all the fields are mandatory")
      }
    }

    try {
      const response = await fetch(`${BASE_URL}/send-email`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success("Email sent successfully");
      } else {
        toast.error("Failed to send email");
      }
    } catch (error) {
      console.error("Error sending email:", error);
      toast.error("Failed to send email");
    }
  };

  return (
    <section>
      <div className="px-4 mx-auto max-w-screen-md">
        <h2 className="heading text-center ">Contact us</h2>
        <p className="mb-8 lg:mb-16 font-light text-center text__para">
          Got a technical issue? Want to send feedback about a beta feature? Let
          us Know.
        </p>
        <form className="space-y-8">
          <div>
            <label htmlFor="email" className="form__label">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="example@gmail.com"
              onChange={handleFormDataChange}
              value={formData.email}
              className="form__input mt-1"
              name="email"
            />
          </div>
          <div>
            <label htmlFor="Subject" className="form__label">
              Subject
            </label>
            <input
              type="text"
              id="Subject"
              onChange={handleFormDataChange}
              value={formData.subject}
              placeholder="Let us know how we can help you"
              className="form__input mt-1"
              name="subject"
            />
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="Message" className="form__label">
              Your Message
            </label>
            <textarea
              rows="6"
              type="text"
              onChange={handleFormDataChange}
              value={formData.message}
              id="Message"
              placeholder="Leave a Comment...."
              className="form__input mt-1"
              name="message"
            />
          </div>
          <button onClick={submitHandler} className="btn rounded sm:w-fill">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
