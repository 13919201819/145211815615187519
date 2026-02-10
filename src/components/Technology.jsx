import React from 'react';
import { Brain, Scan, Zap, Cpu, Layers, Target } from 'lucide-react';
import { techStack, stats } from '../data/mock';

const iconMap = {
  Brain: Brain,
  Scan: Scan,
  Zap: Zap,
  Cpu: Cpu,
  Layers: Layers,
  Target: Target
};

export const Technology = () => {
  return (
    <section id="technology" className="section-padding tech-section">
      <div className="dark-content-container">
        <div className="section-header">
          <h2 className="display-large">Technology Stack</h2>
          <p className="body-large section-subtitle">
            Powered by cutting-edge AI and robotics technologies
          </p>
        </div>

        {/* Tech Stack Grid */}
        <div className="tech-grid">
          {techStack.map((tech, index) => {
            const Icon = iconMap[tech.icon];
            return (
              <div key={index} className="tech-card">
                <div className="tech-icon-wrapper">
                  <Icon size={32} className="tech-icon" />
                </div>
                <h4 className="heading-3">{tech.name}</h4>
              </div>
            );
          })}
        </div>

        {/* Stats */}
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div key={index} className="stat-card">
              <div className="stat-value">{stat.value}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
