import React from "react";
import { motion } from "framer-motion";
import "../styles/Hero.css";

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
            <motion.button
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                className="cta-button"
            >
                View Projects
            </motion.button>
        </section>
    );
};

export default Hero;
