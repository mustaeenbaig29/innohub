import React from 'react';

const CTA = () => {
  const bg = {
    backgroundImage: `url(${require('../images/cta-bg.jpg')})`,
  };

  return (
    <section className="section cta" aria-label="cta" style={bg}>
      <div className="container">
        <p className="cta-subtitle">So What is Next?</p>
        <h2 className="h2 section-title">Are You Ready? Let's get to Work!</h2>
        <a href="#" className="btn btn-secondary">
          Get Started
        </a>
      </div>
    </section>
  );
};

export default CTA;
