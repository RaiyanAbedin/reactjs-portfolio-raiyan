import React from 'react';

const Section = ({ id, title, children }) => {
  return (
    <section id={id} className="py-8 -mt-11">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-white">{title}</h2>
        <div className="text-lg text-white mt-4 font-bold">
          {children}
        </div>
      </div>
    </section>
  );
};

export default Section;
