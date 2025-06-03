import React from "react";

const Contact = () => {
  return (
    <section className="py-16 px-6 bg-white" id="contact">
      <h2 className="text-4xl font-bold text-center text-purple-600 mb-10">Contact Me</h2>

      <div className="max-w-xl mx-auto bg-gray-100 p-8 rounded-lg shadow-md">
        <form action="https://formspree.io/f/{your-id}" method="POST">
          <div className="mb-4">
            <label className="block mb-2 font-semibold">Name</label>
            <input
              type="text"
              name="name"
              required
              className="w-full px-4 py-2 rounded border focus:outline-none focus:border-purple-500"
            />
          </div>

          <div className="mb-4">
            <label className="block mb-2 font-semibold">Email</label>
            <input
              type="email"
              name="email"
              required
              className="w-full px-4 py-2 rounded border focus:outline-none focus:border-purple-500"
            />
          </div>

          <div className="mb-4">
            <label className="block mb-2 font-semibold">Message</label>
            <textarea
              name="message"
              rows="5"
              required
              className="w-full px-4 py-2 rounded border focus:outline-none focus:border-purple-500"
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-purple-600 text-white px-6 py-2 rounded hover:bg-purple-700 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
