import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import Link from "next/link";
import SectionHeading from "../Helper/SectionHeading"; // Import SectionHeading

export default function Project() {
  const projects = [
    {
      title: "Foodie Frenzy",
      image: "/food.png",
      description:
        "A modern and elegant restaurant website showcasing delicious cuisines, online reservations, and an engaging user interface for food lovers.",
      link: "https://bari-food.vercel.app/",
      color: "from-orange-500 to-red-500",
    },
    {
      title: "Shopcart",
      image: "/shop.png",
      description:
        "An advanced eCommerce platform for electronics and accessories — featuring add-to-cart, checkout, and product management functionality.",
      link: "https://shop-nk56.vercel.app/",
      color: "from-blue-500 to-cyan-400",
    },
    {
      title: "Doctor Appointment",
      image: "/doctor.png",
      description:
        "A complete healthcare platform allowing patients to book appointments, view doctor details, and access personal dashboards for medical records.",
      link: "https://doctor-apoitment.vercel.app/",
      color: "from-green-500 to-emerald-400",
    },
    {
      title: "Pet Narian",
      image: "/pet.png",
      description:
        "A pet-centered storytelling platform sharing inspiring animal stories, adoption journeys, and veterinary blogs to celebrate pet love.",
      link: "https://petnarianpets.com/",
      color: "from-yellow-500 to-orange-400",
    },
    {
      title: "Ghouri Nexus",
      image: "/nexus.png",
      description:
        "A sleek, animated portfolio website showcasing modern design aesthetics and creative web experience with smooth transitions and animations.",
      link: "https://ghouri-nexus-2-8529.vercel.app/",
      color: "from-purple-500 to-pink-400",
    },
    {
      title: "AI Assistant",
      image: "/chainlit.png",
      description:
        "An intelligent conversational assistant powered by Chainlit and OpenAI API — enabling human-like interaction for tasks, Q&A, and automation.",
      link: "https://sharjeelalibari-simple-chatbot.hf.space/",
      color: "from-indigo-500 to-sky-400",
    },
  ];

  return (
    <section id="projects" className="min-h-screen bg-[#050709] text-white px-6 py-20">
      {/* ===== Top Section ===== */}
      <div className="max-w-7xl mx-auto text-center mb-16 max-[330px]:mt-10">
        <SectionHeading>My Projects</SectionHeading> 
      </div>

      {/* ===== Projects Grid ===== */}
      <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-10 max-w-7xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: index * 0.15 }}
            viewport={{ once: true }}
            className="bg-gray-800 hover:bg-gray-700 transition-all duration-300 rounded-2xl overflow-hidden shadow-lg border border-gray-700 hover:border-indigo-500"
          >
            {/* Project Image */}
            <div className="relative w-full h-56 overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>

            {/* Project Info */}
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-3 bg-gradient-to-r from-indigo-400 to-blue-300 text-transparent bg-clip-text">
                {project.title}
              </h3>
              <p className="text-gray-300 mb-5 leading-relaxed">
                {project.description}
              </p>

              <Link
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 bg-gradient-to-r ${project.color} hover:opacity-90 transition-all duration-300 text-white px-5 py-2 rounded-full font-medium`}
              >
                Live Demo <ExternalLink size={18} />
              </Link>
            </div>
          </motion.div>
        ))}
      </div>

      {/* ===== Call To Action ===== */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mt-20"
      >
        <h3 className="text-3xl font-bold mb-4">
          Want to Build Something{" "}
          <span className="text-indigo-500">Amazing?</span>
        </h3>
        <p className="text-gray-300 mb-6">
          We turn your vision into reality with cutting-edge design and
          technology.
        </p>
        <Link
          href="#contact"
          className="inline-block bg-indigo-600 hover:bg-indigo-700 transition-all duration-300 text-white px-8 py-3 rounded-full text-lg font-medium shadow-md hover:shadow-lg"
        >
          Let’s Work Together
        </Link>
      </motion.div>
    </section>
  );
}