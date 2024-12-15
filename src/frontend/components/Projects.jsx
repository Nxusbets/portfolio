import React from "react";
import { motion } from "framer-motion";
import "../styles/Projects.css";

const project = {
    title: "Petwalker",
    description: "Petwalker is a web application where pet owners can register and add their pets, allowing pet walkers to take care of them when the owners are unavailable. Additionally, anyone interested can sign up as a walker to help the community. Users can schedule walks, select the type of walk, and filter members' locations, among other features. The app was built using React, Bootstrap, Python with Flask, bcrypt, fetch, and other technologies.",
    link: "https://github.com/Nxusbets/Pet_Walker",
    image: "https://bestinau.com.au/wp-content/uploads/2019/07/Laughing-man-and-woman-dog-walkers-1280x720.jpg", // Cambia esto con la ruta de la imagen de tu proyecto
};

const Projects = () => {
    return (
        <section className="projects">
            <h2>My Featured Project</h2>
            <motion.div
                className="project-card"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >
                <motion.img
                    src={project.image}
                    alt={project.title}
                    initial={{ scale: 0.9 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="project-image"
                />
                <motion.h3
                    initial={{ x: -50 }}
                    animate={{ x: 0 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                >
                    {project.title}
                </motion.h3>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                >
                    {project.description}
                </motion.p>
                <motion.a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                >
                    View Project
                </motion.a>
            </motion.div>
        </section>
    );
};

export default Projects;
