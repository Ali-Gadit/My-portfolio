"use client";
import React, { useRef, useState } from "react";
import { servicesData } from "@/data/data";
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const form = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<string>("");

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Sending...");

    if (form.current) {
        // REPLACE THESE WITH YOUR ACTUAL EMAILJS KEYS
        const SERVICE_ID = "service_pwcrkxd";
        const TEMPLATE_ID = "template_ie6sgif";
        const PUBLIC_KEY = "nvIOX9X-aZ6UMz2_1";

      emailjs
        .sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
        .then(
          (result) => {
            console.log(result.text);
            setStatus("Message sent successfully!");
            if (form.current) form.current.reset();
          },
          (error) => {
            console.log(error.text);
            setStatus("Failed to send message. Please try again.");
          }
        );
    }
  };

  return (
    <div className="bg-[#140c1c] rounded-lg p-4 sm:p-10">
      <h1
        className=" bg-gradient-to-r from-[#8750f7] bg-clip-text
         text-transparent   to-[#ffffff] 
         text-2xl md:text-3xl lg:text-[2.5rem]
          font-bold pb-2"
      >
        Lets work together!
      </h1>
      <p className="text-gray-200 mt-3 lg:text-base text-xs md:text-sm ">
        Hi, I&apos;m Ali. I&apos;m excited to collaborate with you! If you&apos;re looking for modern web development or AI solutions, please fill out the form below or reach out via email/phone. Let&apos;s build something amazing together.
      </p>
      {/* Input fields */}
      <form ref={form} onSubmit={sendEmail} className="mt-8 block w-full overflow-hidden">
        <div className="flex flex-col  items-center justify-between gap-4 ">
          <input
            type="text"
            name="from_name"
            placeholder="Your Name"
            required
            className="flex-1 bg-black text-white placeholder:text-gray-600 px-6 py-3 rounded-md border-[1.5px] border-gray-200 border-opacity-15 outline-none w-full"
          />
        </div>
        <div className="flex flex-col  mt-5 md:flex-row items-center justify-between gap-4 ">
          <input
            type="email"
            name="from_email"
            placeholder="Email address"
            required
            className="flex-1  bg-black text-white placeholder:text-gray-600 px-6 py-3 rounded-md border-[1.5px] border-gray-200 border-opacity-15 outline-none w-full"
          />
          <input
            type="text"
            name="phone"
            placeholder="Phone number (Optional)" 
            className="flex-1 bg-black text-white placeholder:text-gray-600 px-6 py-3 rounded-md border-[1.5px] border-gray-200 border-opacity-15 outline-none w-full"
          />
        </div>
        <div>
            <select name="service" defaultValue="" required className="w-full mt-5 bg-black text-white placeholder:text-gray-600 px-4 py-3.5 rounded-md 
            border-[1.5px] border-gray-200 border-opacity-15 outline-none ">
                <option value="" disabled>Service Required</option>
                {servicesData.map((service) => (
                    <option key={service.id} value={service.title}>{service.title}</option>
                ))}
            </select>
        </div>
        <textarea name="message" rows={7} placeholder="Message" required className="w-full mt-5 bg-black text-white placeholder:text-gray-600 px-4 py-3.5 rounded-md 
            border-[1.5px] border-gray-200 border-opacity-15 outline-none">
            </textarea>
            <div className="mt-4 ">
                <button className="px-8 py-3.5 bg-[#7946df] text-white hover:bg-[#5c2fb7] transition-all duration-150 rounded-full">
                    {status ? status : "Send Message"}
                </button>
            </div>
      </form>
    </div>
  );
};

export default ContactForm;