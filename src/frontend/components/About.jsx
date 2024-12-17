import React from "react";
import { motion } from "framer-motion";
import "../styles/About.css"; // Asegúrate de tener este archivo para los estilos

const About = () => {
    return (
        <section className="about">
            <motion.div
                className="about-content"
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 3, ease: "easeOut" }}
            >
                <motion.h2
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 1 }}
                >
                    About Me
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 1 }}
                    className="about-text"
                >
                    I'm a passionate Fullstack Developer with a love for building dynamic and scalable web applications.
                    With experience in both front-end and back-end technologies, I strive to create seamless user experiences
                    and robust, efficient systems. Let's build something amazing together!
                </motion.p>
                <motion.div
                    className="about-icons"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.7, duration: 1 }}
                >
                    <motion.i
                        className="fab fa-react"
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                    />
                    <motion.i
                        className="fab fa-node-js"
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                    />
                    <motion.i
                        className="fab fa-github"
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                    />
                </motion.div>
            </motion.div>
        </section>
    );
};

export default About;
