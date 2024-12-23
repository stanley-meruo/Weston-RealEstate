import { useState } from "react";


const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    setSubmitted(true);

    // clear the form after submitting
    setFormData({
      name: "",
      email: "",
      message: "",
    });

    // Hide message after a few seconds (optional)
    setTimeout(() => setSubmitted(false), 5000);
  };
  

    return (
      <section className="relative px-5 py-10 bg-contactbg bg-no-repeat bg-cover bg-center bg-gray-500 bg-blend-multiply md:py-16 lg:flex lg:items-center lg:px-28 lg:gap-10 xl:px-44 xl:gap-28">
        <div className="text-white text-center pb-10 lg:text-start">
          <p className="text-xl py-4 font-semibold md:text-2xl xl:text-3xl">
            We Help You Buy Or Sell Property Quickly
          </p>
          <p className="text-sm md:text-base md:py-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
            vitae veritatis ex sapiente autem ipsa vero libero sunt.
          </p>
        </div>

        <div className="bg-black bg-opacity-50 w-full p-4 py-8">
          {/* Success Message */}
          {submitted && (
            <div className="fixed top-16 left-1/2 transform -translate-x-1/2 w-full mx-auto p-2 text-center shadow-md text-xs bg-gray-100 z-50">
              ✅ Thank you! Your message has been sent successfully!
            </div>
          )}

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-4 grid text-white">
            {/* Name Input */}
            <div>
              <label htmlFor="name" className="sr-only">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="FullName"
                className="mt-1 block w-full p-2 border border-gray-500 bg-gray-400 bg-opacity-50 placeholder:text-white"
              />
            </div>

            {/* Email Input */}
            <div>
              <label htmlFor="email" className="sr-only">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Your Email"
                className="mt-1 block w-full p-2 border border-gray-500 bg-gray-400 bg-opacity-50 placeholder:text-white"
              />
            </div>

            {/* Subject Input */}
            <div>
              <label htmlFor="Subject" className="sr-only">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Subject"
                className="mt-1 block w-full p-2 border border-gray-500 bg-gray-400 bg-opacity-50 placeholder:text-white"
              />
            </div>

            {/* Message Input */}
            <div>
              <label htmlFor="message" className="sr-only">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                cols="20"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Message"
                className="mt-1 block w-full p-2 border border-gray-500 bg-gray-400 bg-opacity-50 resize-none placeholder:text-white"
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="border border-white py-3 px-10 mx-auto bg-black text-white hover:bg-white hover:text-black"
            >
              SUBMIT
            </button>
          </form>
        </div>
      </section>
    );
}
export default ContactForm