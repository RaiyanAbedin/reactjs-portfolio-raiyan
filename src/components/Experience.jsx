import React, { useEffect, useRef } from 'react';
import { Building2, Calendar } from 'lucide-react';

const Experience = () => {
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

  const experiences = [
    {
      company: 'Cloud Excel Consultants',
      position: 'Junior Software Engineer',
      duration: 'June 2025 - Present',
      logo: 'CE',
      responsibilities: [
        'Full-Stack Mobile Developer for GlowCrew, a mobile marketplace connecting users with event service providers',
        'Contributed towards the development of the backend using TypeScript and PostgreSQL, building core features such as the booking system, location filtering and vendor listing management.',
        'Developed a shared library of reusable, responsive UI components, allowing for the development of user and vendor experiences to be seperate but functional.',
        'Worked within a small team with daily standups, PR reviews and collaborating with the lead engineer to ensure code quality.'
      ],
      techStack: ['React Native', 'Supabase', 'TypeScript', 'Expo', 'SQL']
    },
    {
      company: 'BSc (Hons) Software Engineering for Business - UWE',
      position: 'First-Class Honours',
      duration: 'September 2022 - May 2025',
      logo: 'UWE',
      responsibilities: [
        'Relevant Modules: Design and Analysis of Data Structures and Algorithms, Artificial Intelligence, Object Oritented Systems Development I and II, Advanced Databases, Software Development Project.',
        'Achieved a First-Class mark throughout penultimate and final year modules.',
        'Awarded A First-Class Grade of 71% for dissertation.',
      ],
      techStack: ['Education', 'Modules']
    },
    {
      company: 'Community Engaged Learning',
      position: 'Developer',
      duration: 'Dec 2024 - April 2025',
      logo: 'UP',
      responsibilities: [
        'Designed and built a functional website for the Community Engaged Learning Network, enabling UK Higher Education Institutions to share key resources, case-studies and opportunities into the community.',
        'Collaborated with University of Nottignham and more CEL stakeholders to allow students consideirng higher education to have access towards different pathways. The site now hosts 10+ educational resources and case-studies.',
      ],
      techStack: ['HTML', 'CSS', 'JavaScript']
    },
    {
      company: 'UWE IT Services',
      position: 'Programming Lead (Student Data Continuity Project)',
      duration: 'Sep 2023 - May 2024',
      logo: 'UWE',
      responsibilities: [
        'Project Lead for a  UWE ITs program to develop a phsihing detection tool to help students prevent phishing attacks from emails and URls',
        'Communicated with UWE ITS stakeholders through weekly sprints, presenting progress updates through live demos, gathering feedback and aligning technical goals with the client requirements.',
        'Wrote documentation covering system testing, use-case scenarios and future maintanbility with improvements for the future of the project.'
      ],
      techStack: ['Python', 'Flask', 'HTML', 'Tailwind CSS', 'APIs']
    }
  ];

  return (
    <section 
      id="experience" 
      className="experience-section custom-project-bg py-24 sm:py-20 md:py-24 lg:py-28 overflow-x-hidden w-full"
      ref={sectionRef}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Section Title */}
        <div className="text-center mb-16 fade-in-element">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-3">
            Experience
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-pink-500 to-purple-600 mx-auto rounded-full"></div>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line - hidden on mobile */}
          <div className="timeline-line hidden lg:block"></div>

          {/* Experience Cards */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div 
                key={index}
                className={`experience-card-wrapper fade-in-element ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <div className="timeline-dot hidden lg:flex">
                  <div className="dot-inner"></div>
                </div>

                {/* Card */}
                <div className="experience-card">
                  {/* Header */}
                  <div className="mb-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Building2 size={20} className="text-pink-500" />
                      <h3 className="text-xl font-bold text-white">{exp.company}</h3>
                    </div>
                    <p className="text-lg font-semibold text-pink-400 mb-2">{exp.position}</p>
                    <div className="flex items-center gap-2 text-gray-400 text-sm">
                      <Calendar size={16} />
                      <span>{exp.duration}</span>
                    </div>
                  </div>

                  {/* Responsibilities */}
                  <ul className="space-y-2 mb-4">
                    {exp.responsibilities.map((item, idx) => (
                      <li key={idx} className="text-gray-300 text-sm flex items-start gap-2">
                        <span className="text-pink-500 mt-1 flex-shrink-0">▹</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tech Stack - Commented out */}
                  {/* <div className="flex flex-wrap gap-2">
                    {exp.techStack.map((tech, idx) => (
                      <span 
                        key={idx}
                        className="tech-badge"
                      >
                        {tech}
                      </span>
                    ))}
                  </div> */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        /* Prevent overflow */
        .experience-section {
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

        /* Timeline line */
        .timeline-line {
          position: absolute;
          left: 50%;
          top: 0;
          bottom: 0;
          width: 2px;
          background: linear-gradient(to bottom, 
            rgba(135, 40, 216, 0.3), 
            rgba(255, 0, 255, 0.3),
            rgba(135, 40, 216, 0.3)
          );
          transform: translateX(-50%);
        }

        /* Experience card wrapper */
        .experience-card-wrapper {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        @media (min-width: 1024px) {
          .experience-card-wrapper {
            justify-content: space-between;
          }

          .experience-card-wrapper.lg\\:flex-row {
            padding-right: 50%;
            padding-right: calc(50% + 2rem);
          }

          .experience-card-wrapper.lg\\:flex-row-reverse {
            padding-left: 50%;
            padding-left: calc(50% + 2rem);
          }
        }

        /* Timeline dot */
        .timeline-dot {
          position: absolute;
          left: 50%;
          top: 2rem;
          transform: translateX(-50%);
          width: 20px;
          height: 20px;
          background: rgba(135, 40, 216, 0.2);
          border: 3px solid #FF00FF;
          border-radius: 50%;
          z-index: 10;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 0 20px rgba(255, 0, 255, 0.5);
        }

        .dot-inner {
          width: 8px;
          height: 8px;
          background: #FF00FF;
          border-radius: 50%;
          animation: pulse 2s ease-in-out infinite;
        }

        @keyframes pulse {
          0%, 100% {
            opacity: 1;
            transform: scale(1);
          }
          50% {
            opacity: 0.6;
            transform: scale(1.2);
          }
        }

        /* Experience card */
        .experience-card {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(135, 40, 216, 0.3);
          border-radius: 16px;
          padding: 2rem;
          backdrop-filter: blur(10px);
          transition: all 0.3s ease;
          position: relative;
          width: 100%;
          max-width: 600px;
        }

        .experience-card:hover {
          transform: translateY(-4px);
          border-color: rgba(255, 0, 255, 0.6);
          box-shadow: 
            0 0 30px rgba(135, 40, 216, 0.4),
            0 10px 25px rgba(0, 0, 0, 0.3);
          background: rgba(255, 255, 255, 0.08);
        }


        /* Tech badges */
        .tech-badge {
          background: linear-gradient(135deg, rgba(135, 40, 216, 0.3), rgba(255, 0, 255, 0.3));
          color: white;
          padding: 0.375rem 0.875rem;
          border-radius: 20px;
          font-size: 0.75rem;
          font-weight: 600;
          border: 1px solid rgba(255, 0, 255, 0.3);
          transition: all 0.2s ease;
        }

        .tech-badge:hover {
          background: linear-gradient(135deg, rgba(135, 40, 216, 0.5), rgba(255, 0, 255, 0.5));
          border-color: rgba(255, 0, 255, 0.6);
          transform: translateY(-2px);
        }

        /* Mobile optimizations */
        @media (max-width: 1023px) {
          .experience-card {
            max-width: 100%;
          }
        }

        /* Performance optimization */
        .experience-card {
          will-change: transform;
        }
      `}</style>
    </section>
  );
};

export default Experience;

