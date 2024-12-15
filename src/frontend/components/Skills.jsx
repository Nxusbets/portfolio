import React from "react";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaPython, FaBootstrap, FaGithub, FaFlask } from "react-icons/fa"; // Usando FaFlask
import { ProgressBar } from "react-bootstrap"; // Usamos react-bootstrap para las barras de progreso
import "../styles/Skills.css"; // Asegúrate de tener los estilos adecuados

const Skills = () => {
    return (
        <section className="skills">
            {/* React */}
            <motion.div
                className="skill"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >
                <FaReact size={40} />
                <h3>React</h3>
                <ProgressBar now={90} label="90%" />
            </motion.div>

            {/* Node.js */}
            <motion.div
                className="skill"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >
                <FaNodeJs size={40} />
                <h3>Node.js</h3>
                <ProgressBar now={85} label="85%" />
            </motion.div>

            {/* Python */}
            <motion.div
                className="skill"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >
                <FaPython size={40} />
                <h3>Python</h3>
                <ProgressBar now={80} label="80%" />
            </motion.div>

            {/* Bootstrap */}
            <motion.div
                className="skill"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >
                <FaBootstrap size={40} />
                <h3>Bootstrap</h3>
                <ProgressBar now={75} label="75%" />
            </motion.div>

            {/* Flask */}
            <motion.div
                className="skill"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >
                <FaFlask size={40} />
                <h3>Flask</h3>
                <ProgressBar now={70} label="70%" />
            </motion.div>

            {/* GitHub */}
            <motion.div
                className="skill"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >
                <FaGithub size={40} />
                <h3>GitHub</h3>
                <ProgressBar now={95} label="95%" />
            </motion.div>
        </section>
    );
};

export default Skills;
