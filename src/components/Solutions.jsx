import React from 'react';
import { ArrowRight, Check } from 'lucide-react';
import { solutions } from '../data/mock';

export const Solutions = () => {
  return (
    <section id="solutions" className="section-padding">
      <div className="dark-content-container">
        <div className="section-header">
          <h2 className="display-large">Our Solutions</h2>
          <p className="body-large section-subtitle">
            Cutting-edge physical AI systems designed for real-world deployment
          </p>
        </div>

        <div className="dark-grid">
          {solutions.map((solution) => (
            <div key={solution.id} className="solution-card">
              <div className="solution-image-wrapper">
                <img 
                  src={solution.image} 
                  alt={solution.title}
                  className="solution-image"
                />
                <div className="solution-overlay"></div>
              </div>
              
              <div className="solution-content">
                <h3 className="heading-2">{solution.title}</h3>
                <p className="body-medium">{solution.description}</p>
                
                <div className="solution-features">
                  {solution.features.map((feature, index) => (
                    <div key={index} className="feature-item">
                      <Check size={16} className="feature-check" />
                      <span className="body-small">{feature}</span>
                    </div>
                  ))}
                </div>

                <button className="solution-cta">
                  Learn More
                  <ArrowRight size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
