import React from "react";


const Contact = () => {


  return (
    <section
      className="py-16 px-4 sm:px-6 bg-white"
      id="contact"
    >
      <h2 className="text-3xl sm:text-4xl font-bold text-center text-purple-600 mb-10">
        Contact Me
      </h2>

      <div className="max-w-xl mx-auto bg-gray-100 p-6 sm:p-8 rounded-lg shadow-md">
        <form action="https://formspree.io/f/your-form-id" method="POST">
          <div className="mb-5">
            <label className="block mb-2 font-semibold text-sm sm:text-base">
              Name
            </label>
            <input
              type="text"
              name="name"
              required
              className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-purple-500 text-sm sm:text-base"
            />
          </div>

          <div className="mb-5">
            <label className="block mb-2 font-semibold text-sm sm:text-base">
              Email
            </label>
            <input
              type="email"
              name="email"
              required
              className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-purple-500 text-sm sm:text-base"
            />
          </div>

          <div className="mb-6">
            <label className="block mb-2 font-semibold text-sm sm:text-base">
              Message
            </label>
            <textarea
              name="message"
              rows="5"
              required
              className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-purple-500 text-sm sm:text-base resize-none"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full sm:w-auto bg-purple-600 text-white px-6 py-2 rounded hover:bg-purple-700 transition-colors duration-200 text-sm sm:text-base"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
