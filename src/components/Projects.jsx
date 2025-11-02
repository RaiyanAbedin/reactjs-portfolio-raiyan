import React, { useEffect, useRef } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import nuroFitImage from '../assets/images/NuroAnalytics.jpg';
import NuroFitLanding from '../assets/images/NF-PIC.jpg';
import WatchEmail from '../assets/images/WatchEmail.png';
import GlowSearch from '../assets/images/GlowSearch.jpeg';
import GlowCDash from '../assets/images/GlowCDash.jpeg';


const Projects = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-visible');
          }
        });
      },
      { threshold: 0.2 }
    );

    const elements = sectionRef.current?.querySelectorAll('.fade-in-element');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const featuredProjects = [
      {
       id: 1,
       label: 'Featured Project',
       title: 'GlowCrew: A Mobile Marketplace',
       description: 'A Cross-Platform Mobile Marketplace connecting users with local event service providers. Built using React Native and TypeScript. Handles booking, image uploads and geolocation filtering with Supabase (PostgreSQL). Includes real-time messaging through Supabase Real-Time, Expo Push Notifications for booking and messaging alerts and secure payment processing through Stripe API. Designed to replace finding services through word-of-mouth and social media, allowing users to find and book services based on their location and needs whilst allowing vendors to list their services, upload images and manage bookings.',
       images: [GlowSearch, GlowCDash],
       imageFit: 'contain', // Show full mobile screenshot
       techStack: ['React Native', 'TypeScript', 'Supabase', 'Mobile Development', 'PostgreSQL'],
       liveDemo: '#',
       github: '#'
    },
    {
        id: 2,
        label: 'Dissertation Project: Awarded First-Class',
        title: 'NuroFit - AI Fitness & Nutrition App',
        description: 'Full-Stack AI-powered Fitness and Nutrition application delivering personalised workouts and meal plans. Built with React, Python Flask, and MongoDB. Implemented OpenAIs API for self-learning recommendations based on user progress and engagement data through PyMongo. Allows a user to build personalised workout splits, track their activity, visualise their progress through real-time dynamic charts using ReCharts and optimise their journey on one platform.  ',
        image: NuroFitLanding,
        techStack: ['React', 'Python Flask', 'NoSQL', 'OpenAI', 'MongoDB', 'Tailwind CSS', 'Recharts'],
        liveDemo: '#',
        github: '#'
      },
    {
      id: 3,
      label: 'UWE ITS DATA CONTINUITY PROJECT',
      title: 'Phishing Detection Tool',
      description: 'Phshing Detection tool designed to identify and prevent malicious email and URL attacks. Built using Python, uses RESTFUL API integration to scan emails and URLs using Hunter.io and VirusTotal. Provides a detailed report with threat scores and real-time email/URL validation. URL scanner is backed by cybersecurity intelligence sources such as Google Safebrowsing, Kaspersky and more.',
      image: WatchEmail,
      imageFit: 'contain', // Show full image without cropping
      techStack: ['Python', 'Hunter.IO', 'VirusTotal', 'Google Safebrowsing', 'Kaspersky', 'APIs'],
      liveDemo: '#',
      github: '#'
    }
  ];


  return (
    <section 
      id="projects" 
      className="projects-section custom-project-bg py-24 sm:py-20 md:py-24 lg:py-28 overflow-x-hidden w-full"
      ref={sectionRef}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Section Title */}
        <div className="text-center mb-16 fade-in-element">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-3">
            Projects
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-pink-500 to-purple-600 mx-auto rounded-full"></div>
        </div>

        {/* Featured Projects */}
        <div className="space-y-24 mb-32">
          {featuredProjects.map((project, index) => (
            <div 
              key={project.id}
              className={`featured-project fade-in-element ${
                index % 2 === 0 ? '' : 'reverse'
              }`}
            >
              {/* Image */}
              <div className="featured-image-container">
                {project.images ? (
                  // Multiple images - side by side
                  <div className="multiple-images">
                    {project.images.map((img, idx) => (
                      <img 
                        key={idx}
                        src={img} 
                        alt={`${project.title} ${idx + 1}`}
                        className="featured-image-multiple"
                        style={{ objectFit: project.imageFit || 'cover' }}
                        loading="lazy"
                      />
                    ))}
                  </div>
                ) : (
                  // Single image
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="featured-image"
                    style={{ objectFit: project.imageFit || 'cover' }}
                    loading="lazy"
                  />
                )}
              </div>

              {/* Content */}
              <div className="featured-content">
                <p className="featured-label">{project.label}</p>
                <h3 className="featured-title">{project.title}</h3>
                <p className="featured-description">{project.description}</p>

                {/* Tech Stack */}
                <div className="tech-stack-featured">
                  {project.techStack.map((tech, idx) => (
                    <span key={idx} className="tech-badge">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Buttons - Commented out for now */}
                {/* <div className="featured-actions">
                  <a 
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="featured-button primary"
                  >
                    <ExternalLink size={18} />
                    <span>Live Demo</span>
                  </a>
                  <a 
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="featured-button secondary"
                  >
                    <Github size={18} />
                    <span>GitHub</span>
                  </a>
                </div> */}
              </div>
            </div>
          ))}
        </div>

      </div>

      <style>{`
        /* Prevent overflow */
        .projects-section {
          max-width: 100%;
          overflow-x: hidden;
        }

        /* Fade-in animation */
        .fade-in-element {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.6s ease-out, transform 0.6s ease-out;
        }

        .fade-in-visible {
          opacity: 1;
          transform: translateY(0);
        }

        /* Featured Project Layout */
        .featured-project {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3rem;
          align-items: center;
        }

        .featured-project.reverse {
          direction: rtl;
        }

        .featured-project.reverse > * {
          direction: ltr;
        }

        /* Featured Image */
        .featured-image-container {
          position: relative;
          width: 100%;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
        }

        .featured-image {
          width: 100%;
          height: auto;
          display: block;
          aspect-ratio: 3/2;
          background: #1a0b2e;
        }

        /* Multiple Images Container */
        .multiple-images {
          display: flex;
          gap: 1rem;
          align-items: center;
          justify-content: center;
          padding: 1rem;
          background: #1a0b2e;
          min-height: 400px;
        }

        .featured-image-multiple {
          height: 100%;
          max-height: 500px;
          width: auto;
          object-fit: contain;
        }

        /* Featured Content */
        .featured-content {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .featured-label {
          color: #FF00FF;
          font-size: 0.875rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.1em;
        }

        .featured-title {
          font-size: 1.75rem;
          font-weight: bold;
          color: white;
          line-height: 1.3;
        }

        .featured-description {
          color: #d1d5db;
          font-size: 1rem;
          line-height: 1.7;
        }

        /* Tech Stack Featured */
        .tech-stack-featured {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-top: 0.5rem;
        }

        .tech-badge {
          background: rgba(135, 40, 216, 0.3);
          color: #e5e5e5;
          padding: 0.375rem 0.875rem;
          border-radius: 16px;
          font-size: 0.8rem;
          font-weight: 600;
          border: 1px solid rgba(255, 0, 255, 0.3);
        }

        /* Featured Actions */
        .featured-actions {
          display: flex;
          gap: 1rem;
          margin-top: 1rem;
        }

        .featured-button {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.75rem 1.5rem;
          border-radius: 8px;
          font-size: 0.95rem;
          font-weight: 600;
          transition: all 0.2s ease;
          text-decoration: none;
        }

        .featured-button.primary {
          background: linear-gradient(135deg, #FF00FF, #8728D8);
          color: white;
        }

        .featured-button.primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(255, 0, 255, 0.4);
        }

        .featured-button.secondary {
          background: rgba(255, 255, 255, 0.1);
          color: white;
          border: 1px solid rgba(255, 255, 255, 0.2);
        }

        .featured-button.secondary:hover {
          background: rgba(255, 255, 255, 0.15);
          border-color: rgba(255, 0, 255, 0.5);
        }

        /* Tablet Responsive */
        @media (max-width: 1023px) {
          .featured-project {
            gap: 2rem;
          }

          .featured-title {
            font-size: 1.5rem;
          }

          .featured-description {
            font-size: 0.95rem;
          }
        }

        /* Mobile Responsive */
        @media (max-width: 767px) {
          .featured-project {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }

          .featured-project.reverse {
            direction: ltr;
          }

          .featured-title {
            font-size: 1.35rem;
          }

          .featured-description {
            font-size: 0.9rem;
          }

          .featured-actions {
            flex-direction: column;
          }

          .featured-button {
            justify-content: center;
          }
        }
      `}</style>
    </section>
  );
};

export default Projects;

