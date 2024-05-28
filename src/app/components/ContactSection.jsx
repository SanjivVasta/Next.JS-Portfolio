"use client"
import React, { useState } from 'react';
import GithubIcon from "../../../public/images/github-icon.svg";
import LinkedinIcon from "../../../public/images/linkedin-icon.svg";
import Link from 'next/link';
import Image from 'next/image';

const ContactSection = () => {
  const [form, setForm] = useState({
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.email && form.subject && form.message) {
      setIsSubmitted(true);
      // Here you would typically handle the form submission, e.g., sending the data to an API.
    }
  };

  return (
    <section className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4">
      <div className="py-4">
        <h5 className="text-4xl font-bold text-white my-2">
          Let's Connect
        </h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          I'm currently looking for new opportunities, my inbox is always open.
          Whether you have any questions or just want to say hi, I'll try my best
          to get back to you.
        </p>
        <div className="socials flex flex-row gap-2">
          <Link href="https://github.com/SanjivVasta">
            <Image className="hover:scale-110 duration-200" src={GithubIcon} alt="Github Icon" />
          </Link>
          <Link href="https://www.linkedin.com/in/sanjiv-vasta-9980251b9/">
            <Image className="hover:scale-110 duration-200" src={LinkedinIcon} alt="Linkedin Icon" />
          </Link>
        </div>
      </div>
      <div>
        <form className="flex flex-col" onSubmit={handleSubmit}>
          <div className="mb-6">
            <label htmlFor="email" className="text-white block text-sm font-medium mb-2">Your email</label>
            <input
              type="email"
              id="email"
              value={form.email}
              onChange={handleChange}
              required
              className="bg-[#181919] border border-[#33353F] placeholder-[#585b5f] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="name@gmail.com"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="subject" className="text-white block text-sm font-medium mb-2">Subject</label>
            <input
              type="text"
              id="subject"
              value={form.subject}
              onChange={handleChange}
              required
              className="bg-[#181919] border border-[#33353F] placeholder-[#585b5f] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="Let's connect"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="message" className="text-white block text-sm mb-2 font-medium">Message</label>
            <textarea
              name="message"
              id="message"
              value={form.message}
              onChange={handleChange}
              required
              className="bg-[#181919] border border-[#33353F] placeholder-[#585b5f] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="Let's talk about..."
            ></textarea>
          </div>
          <button
            type="submit"
            className={`font-medium py-2.5 px-5 rounded-lg w-full ${isSubmitted ? 'bg-green-700' : 'bg-purple-700 hover:bg-purple-800'} text-white`}
            disabled={isSubmitted}
          >
            {isSubmitted ? 'Sent!' : 'Send'}
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;