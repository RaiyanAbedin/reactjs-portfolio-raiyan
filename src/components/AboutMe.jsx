import React, { useEffect, useRef } from 'react';
import { GraduationCap, MapPin, Briefcase, Sparkles } from 'lucide-react';

const AboutMe = () => {
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

  const quickFacts = [
    { icon: GraduationCap, label: 'BSc Software Engineering', highlight: 'First Class Honours' },
    { icon: MapPin, label: 'Location', highlight: 'United Kingdom' },
    { icon: Briefcase, label: 'Role', highlight: ' Junior Software Engineer @ Cloud Excel' },
    { icon: Sparkles, label: 'Passion', highlight: 'Building Solutions' }
  ];

  return (
    <section 
      id="about" 
      className="about-me-section custom-project-bg py-24 sm:py-20 md:py-24 lg:py-28 overflow-x-hidden w-full"
      ref={sectionRef}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Section Title */}
        <div className="text-center mb-12 sm:mb-16 fade-in-element">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-3">
            About Me
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-pink-500 to-purple-600 mx-auto rounded-full"></div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center max-w-6xl mx-auto">
          {/* Photo */}
          <div className="flex justify-center lg:justify-end fade-in-element">
            <div className="about-photo-wrapper">
              <div className="about-photo">
                <span className="photo-initials">RA</span>
              </div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="space-y-8 fade-in-element text-center">
            {/* Bio Text */}
            <div className="bio-content space-y-4">
              <p className="text-gray-300 text-base sm:text-lg leading-relaxed font-semibold text-center">
                Hi, I'm <span className="text-pink-500 font-semibold">Raiyan Abedin</span>, 
                a passionate Software Engineer with a <span className="text-pink-500 font-semibold">First-Class</span> in BSc Software Engineering 
                from the University of the West of England.
              </p>
              <p className="text-gray-300 text-base sm:text-lg leading-relaxed font-semibold text-center">
              I build software with purpose, solving real-world problems through thoughtful design and clean engineering. From building GlowCrew, a mobile marketplace connecting users with local vendors, to developing NuroFit, a full-stack AI fitness app designed to help students start their fitness journey. I've learned that the best software doesn't just work well, it solves problems people actually care about.
              </p>
              <p className="text-gray-300 text-base sm:text-lg leading-relaxed font-semibold text-center">
              I'm drawn to teams where I can take ownership of features end-to-end and deepen my understanding of system design and scalable architectures. I'm focused on becoming a reliable engineer who doesn't just implement features, but understands the use cases behind them, anticipates edge cases, and writes code that's maintainable and built to last.
              </p>
            </div>

            {/* Quick Facts Grid */}
            <div className="quick-facts-grid gap-4 mt-8">
              {quickFacts.map((fact, index) => {
                const IconComponent = fact.icon;
                return (
                  <div 
                    key={index} 
                    className="quick-fact-card"
                    style={{ animationDelay: `${index * 0.3}s` }}
                  >
                    <div className="flex items-center gap-3 w-full justify-center">
                      <div className="icon-wrapper flex-shrink-0">
                        <IconComponent size={32} className="text-pink-500" strokeWidth={1.5} />
                      </div>
                      <div className="text-center flex-1">
                        <div className="text-xs text-gray-400 mb-1">{fact.label}</div>
                        <div className="text-white font-semibold text-sm">{fact.highlight}</div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        /* Prevent overflow in about section */
        .about-me-section {
          max-width: 100%;
          overflow-x: hidden;
        }

        .about-me-section * {
          max-width: 100%;
        }

        /* Quick Facts Grid - Responsive */
        .quick-facts-grid {
          display: grid;
          grid-template-columns: 1fr; /* Mobile: Stack vertically */
          gap: 1rem;
          width: 100%;
        }

        /* Desktop: 4 cards in one row */
        @media (min-width: 1024px) {
          .quick-facts-grid {
            grid-template-columns: repeat(4, 1fr);
          }
        }

        /* Tablet: 2 cards per row */
        @media (min-width: 768px) and (max-width: 1023px) {
          .quick-facts-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        /* Bio content styling */
        .bio-content p {
          font-weight: 600;
          text-align: center;
        }

        /* Fade-in animation setup */
        .fade-in-element {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.6s ease-out, transform 0.6s ease-out;
        }

        .fade-in-visible {
          opacity: 1;
          transform: translateY(0);
        }

        /* Photo wrapper and styling */
        .about-photo-wrapper {
          position: relative;
          width: 280px;
          height: 280px;
        }

        .about-photo {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          background: linear-gradient(135deg, #1a0b2e 0%, #3A0B5C 50%, #56127E 100%);
          border: 3px solid transparent;
          background-clip: padding-box;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 
            0 0 30px rgba(135, 40, 216, 0.4),
            0 0 60px rgba(255, 0, 255, 0.2),
            0 10px 40px rgba(0, 0, 0, 0.3);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .about-photo::before {
          content: '';
          position: absolute;
          inset: -3px;
          border-radius: 50%;
          background: linear-gradient(135deg, #FF00FF, #8728D8, #FF00FF);
          z-index: -1;
        }

        .photo-initials {
          font-size: 4rem;
          font-weight: bold;
          background: linear-gradient(135deg, #FF00FF, #8728D8);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        /* Icon wrapper styling */
        .icon-wrapper {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          transition: all 0.2s ease;
        }

        /* Floating animation keyframes */
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-8px);
          }
        }

        /* Quick fact cards */
        .quick-fact-card {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(135, 40, 216, 0.3);
          border-radius: 12px;
          padding: 1.25rem;
          transition: all 0.2s ease;
          backdrop-filter: blur(10px);
          animation: float 3s ease-in-out infinite;
          will-change: transform;
          min-height: 100px;
          display: flex;
          align-items: center;
          height: 100%;
        }

        .quick-fact-card:hover {
          border-color: rgba(255, 0, 255, 0.6);
          box-shadow: 
            0 0 20px rgba(135, 40, 216, 0.4),
            0 4px 15px rgba(0, 0, 0, 0.2);
          background: rgba(255, 255, 255, 0.08);
          animation-play-state: paused;
        }

        /* Desktop hover effects */
        @media (min-width: 1024px) {
          .about-photo:hover {
            transform: scale(1.02);
            box-shadow: 
              0 0 40px rgba(135, 40, 216, 0.6),
              0 0 80px rgba(255, 0, 255, 0.3),
              0 15px 50px rgba(0, 0, 0, 0.4);
          }
        }

        /* Tablet adjustments */
        @media (min-width: 768px) and (max-width: 1023px) {
          .about-photo-wrapper {
            width: 250px;
            height: 250px;
          }

          .photo-initials {
            font-size: 3.5rem;
          }
        }

        /* Mobile optimizations */
        @media (max-width: 767px) {
          .about-photo-wrapper {
            width: 200px;
            height: 200px;
          }

          .photo-initials {
            font-size: 3rem;
          }

          .quick-fact-card {
            min-height: 90px;
            touch-action: manipulation;
          }
        }

        /* Extra small screens */
        @media (max-width: 360px) {
          .about-photo-wrapper {
            width: 180px;
            height: 180px;
          }

          .photo-initials {
            font-size: 2.5rem;
          }
        }

        /* Performance optimization: will-change for animated elements */
        .about-photo {
          will-change: transform;
        }
      `}</style>
    </section>
  );
};

export default AboutMe;

