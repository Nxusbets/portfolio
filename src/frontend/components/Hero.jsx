import React from "react";
import { motion } from "framer-motion";
import "../styles/Hero.css";

const project = {
    title: "Project",
    description: "Petwalker is a web application where pet owners can register and add their pets, allowing pet walkers to take care of them when the owners are unavailable. Additionally, anyone interested can sign up as a walker to help the community. Users can schedule walks, select the type of walk, and filter members' locations, among other features. The app was built using React, Bootstrap, Python with Flask, bcrypt, fetch, and other technologies.",
    link: "https://github.com/Nxusbets"
    
};

const Hero = () => {
    return (
        <section className="hero">
            <motion.div
                className="hero-background"
                initial={{ y: -200 }}
                animate={{ y: 0 }}
                transition={{ duration: 2, ease: "easeOut" }}
            />
            <motion.h1
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 1 }}
            >
                Hello, I'm <span>Juan Carlos Díaz Mendoza</span>
            </motion.h1>
            <motion.p
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 1 }}
            >
                Fullstack Developer | Building modern and scalable web applications.
            </motion.p>
            <motion.a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              
            >
                View Projects
            </motion.a>
        </section>
    );
};

export default Hero;
