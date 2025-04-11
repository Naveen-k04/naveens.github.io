import React, { useRef, useState } from "react";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // Simulate sending logic (e.g., using emailjs or API call)
    setTimeout(() => {
      alert("Message sent!");
      setLoading(false);
      setForm({
        name: "",
        email: "",
        message: "",
      });
    }, 1000);
  };

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      className="mt-12 flex flex-col gap-8"
    >
      <label className="flex flex-col" htmlFor="name">
        <span className="text-white font-medium mb-4">Your Name</span>
        <input
          type="text"
          id="name"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="What's your good name?"
          className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
        />
      </label>

      <label className="flex flex-col" htmlFor="email">
        <span className="text-white font-medium mb-4">Your Email</span>
        <input
          type="email"
          id="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="What's your web address?"
          className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
        />
      </label>

      <label className="flex flex-col" htmlFor="message">
        <span className="text-white font-medium mb-4">Your Message</span>
        <textarea
          id="message"
          name="message"
          rows={7}
          value={form.message}
          onChange={handleChange}
          placeholder="What do you want to say?"
          className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
        />
      </label>

      <button
        type="submit"
        className="bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary"
      >
        {loading ? "Sending..." : "Send"}
      </button>
    </form>
  );
};

export default Contact;
