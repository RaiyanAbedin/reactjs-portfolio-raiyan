import React from 'react';
import { motion } from 'framer-motion';
import project1Image from './assets/images/horizontravels4portfolio.jpg';
import project2Image from './assets/images/watchmanapp.jpg';
import project3Image from './assets/images/Mockup.jpg'; // Ensure this path is correct
import project4Image from './assets/images/cityexplorer-thumb.jpg';

// Framer Motion Variants for animation
const projectVariants = {
  hidden: { opacity: 0, y: 100 }, // Initial state: invisible, from bottom
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.8,
      ease: 'easeInOut'
    }
  },
};

const ProjectCards = () => {
  return (
    <motion.div
      className="w-full custom-project-bg text-white py-8"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <section id="projects" className="py-8 mt-8 w-full">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-4">Take A Look At Some of My Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-center">
            
            {/* First Project */}
            <motion.div className="relative project-card" variants={projectVariants}>
              <img src={project1Image} alt="Travel Website" className="project-image" />
              <div className="project-content">
                <h3 className="project-title">Travel Website</h3>
                <p className="project-description">
                  Created a travel website with destination search, travel guides, and booking options.
                </p>
                <div className="tech-badges">
                  <span className="badge badge-tailwind">Python Flask</span>
                  <span className="badge badge-html">HTML</span>
                  <span className="badge badge-css">Bootstrap</span>
                  <span className="badge badge-js">JavaScript</span>
                </div>
              </div>
            </motion.div>

            {/* Second Project */}
            <motion.div className="relative project-card" variants={projectVariants}>
              <img src={project2Image} alt="Phishing Scanner" className="project-image" />
              <div className="project-content">
                <h3 className="project-title">Phishing Scanner</h3>
                <p className="project-description">
                  Developed a Phishing Detection App using Python, Flask, and Tailwind CSS.
                </p>
                <div className="tech-badges">
                  <span className="badge badge-tailwind">Python</span>
                  <span className="badge badge-html">JS</span>
                  <span className="badge badge-css">TailwindCSS</span>
                  <span className="badge badge-js">HTML</span>
                  <span className="badge badge-tailwind">Hunter.IO API</span>
                  <span className="badge badge-css">VirusTotal API</span>
                </div>
              </div>
            </motion.div>

            {/* Third Project */}
            <motion.div className="relative project-card" variants={projectVariants}>
              <img src={project3Image} alt="Front End Development" className="project-image" />
              <div className="project-content">
                <h3 className="project-title">Front End Development</h3>
                <p className="project-description">
                  Developed an interactive travel guide featuring major UK destinations like London and more.
                </p>
                <div className="tech-badges">
                  <span className="badge badge-tailwind">JavaScript</span>
                  <span className="badge badge-html">HTML</span>
                  <span className="badge badge-css">CSS</span>
                </div>
              </div>
            </motion.div>

            {/* Fourth Project */}
            <motion.div className="relative project-card" variants={projectVariants}>
              <img src={project4Image} alt="Twin City Explorer" className="project-image" />
              <div className="project-content">
                <h3 className="project-title">Twin City Explorer</h3>
                <p className="project-description">
                  Collaborated in a group project developing a City Explorer web app using JS and PHP.
                </p>
                <div className="tech-badges">
                  <span className="badge badge-tailwind">PHP</span>
                  <span className="badge badge-html">OpenWeather API</span>
                  <span className="badge badge-css">GoogleMaps API</span>
                  <span className="badge badge-js">Flickr API</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default ProjectCards;
