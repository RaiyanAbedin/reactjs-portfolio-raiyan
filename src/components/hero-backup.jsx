import React from 'react';
import { motion } from 'framer-motion';

// Define animations for the text and icons
const HeroSection = () => {
  // Shimmer effect for "Raiyan Abedin" using Framer Motion
  const shimmerAnimation = {
    initial: { backgroundPosition: "200% center" },
    animate: {
      backgroundPosition: "-200% center",
      transition: {
        duration: 6,
        ease: "linear",
        repeat: Infinity,
      },
    },
  };

  // Entrance animation for the hero section
  const entranceAnimation = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1.5, ease: "easeInOut" },
    },
  };

  // Typewriter effect for "Student Developer"
  const typewriterEffect = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: 1,
        duration: 4,
        ease: "easeInOut",
      },
    },
  };

  // Drop-in animation for icons
  const iconAnimation = {
    hidden: { opacity: 0, y: -20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.7, // Stagger effect: delay increases for each icon
        duration: 2,
        ease: "easeOut",
      },
    }),
  };

  return (
    <motion.div
      className="relative min-h-screen flex flex-col items-center justify-center text-center custom-hero-bg"
      variants={entranceAnimation}
      initial="hidden"
      animate="visible"
    >
      {/* Floating SVG Orbs */}
      <svg className="absolute top-0 left-0 w-full h-full floating-orbs z-0">
        <defs>
          <filter id="blurFilter">
            <feGaussianBlur in="SourceGraphic" stdDeviation="10" />
          </filter>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: "#FF00FF", stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: "#8728D8", stopOpacity: 1 }} />
          </linearGradient>
        </defs>

        <circle cx="15%" cy="25%" r="40" fill="url(#gradient)" className="floating-orb" />
        <circle cx="80%" cy="75%" r="70" fill="url(#gradient)" className="floating-orb" />
      </svg>

      {/* Apply shimmer effect to this text */}
      <motion.h1
        className="hero-heading font-bold text-white line-height-fix relative z-10"
        style={{
          background: "linear-gradient(90deg, #8728D8, #FF00FF, #8728D8)",
          backgroundClip: "text",
          WebkitBackgroundClip: "text",
          color: "transparent",
          display: "inline-block",
          backgroundSize: "200% auto",
        }}
        initial="initial"
        animate="animate"
        variants={shimmerAnimation}
      >
        Hey! I'm Raiyan Abedin
      </motion.h1>

      {/* Typewriter effect for "Student Developer" */}
      <motion.p
        className="hero-subheading font-bold text-white mt-4"
        initial="hidden"
        animate="visible"
        variants={typewriterEffect}
      >
        Software Engineer
      </motion.p>

      {/* Social Media Icons with Drop-In Effect */}
      <div className="mt-8 flex justify-center space-x-4 relative z-10 icon-container">
        {["https://www.linkedin.com/in/raiyan-abedin-4b63672b0/", "https://github.com/RaiyanAbedin", "mailto:raiyanabedinn@gmail.com"].map((link, index) => (
          <motion.a
            key={index}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            custom={index}
            initial="hidden"
            animate="visible"
            variants={iconAnimation}
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {index === 0 && <i className="fab fa-linkedin text-4xl text-white"></i>}
            {index === 1 && <i className="fab fa-github text-4xl text-white"></i>}
            {index === 2 && <i className="fas fa-envelope text-4xl text-white"></i>}
          </motion.a>
        ))}
      </div>
    </motion.div>
  );
};

export default HeroSection;

