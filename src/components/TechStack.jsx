import React from 'react';
import { FaJava, FaPython } from 'react-icons/fa';
import {
  SiJavascript,
  SiTypescript,
  SiNodedotjs,
  SiExpress,
  SiReact,
  SiMongodb,
  SiPostgresql,
  SiDocker,
  SiGit,
  SiGithub,
  SiFigma,
  SiCanva,
  SiPostman,
  SiVercel,
  SiNetlify,
  SiGoogle,
  SiTailwindcss,
  SiRazorpay,
  SiRailway,
  SiCss3,
  SiHtml5,
  SiShadcnui,
  SiFastapi
} from 'react-icons/si';

const TechStack = () => {
  const techCategories = [
    {
      title: 'Programming Languages',
      items: [
        { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
        { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
        { name: 'Python', icon: FaPython, color: '#3776AB' },
        { name: 'Java', icon: FaJava, color: '#EA2D2E' },
      ]
    },
    {
      title: 'Frontend Development',
      items: [
        { name: 'React.js', icon: SiReact, color: '#61DAFB' },       // Official React blue
        { name: 'HTML', icon: SiHtml5, color: '#E34F26' },           // Official HTML5 orange
        { name: 'CSS', icon: SiCss3, color: '#1572B6' },             // Official CSS3 blue
        { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' }, // Tailwind cyan
        { name: 'ShadCN UI', icon: SiShadcnui, color: '#000000' },   // ShadCN’s minimal black theme

      ]
    },
    {
      title: 'Backend Development',
      items: [
        { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
        { name: 'Express.js', icon: SiExpress, color: '#000000' },
        { name: 'FastAPI', icon: SiFastapi, color: '#009688' },
      ]
    },
    {
      title: 'Databases',
      items: [
        { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
        { name: 'PostgreSQL', icon: SiPostgresql, color: '#336791' }
      ]
    },
    {
      title: 'DevOps & Tools',
      items: [
        { name: 'Docker', icon: SiDocker, color: '#2496ED' },
        { name: 'Git', icon: SiGit, color: '#F05032' },
        { name: 'GitHub', icon: SiGithub, color: '#181717' },
        { name: 'Postman', icon: SiPostman, color: '#FF6C37' },
        { name: 'Vercel', icon: SiVercel, color: '#000000' },
        { name: 'Netlify', icon: SiNetlify, color: '#00C7B7' },
        { name: 'Railway', icon: SiRailway, color: '#fffff' }
      ]
    },
    {
      title: 'Design & Other',
      items: [
        { name: 'Figma', icon: SiFigma, color: '#F24E1E' },
        { name: 'Canva', icon: SiCanva, color: '#00C4CC' },
        { name: 'Razorpay', icon: SiRazorpay, color: '#0D2444' }
      ]
    }
  ];

  return (
    <section className="tech-stack-section section">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>Tech Stack</h2>
          <p>Technologies & Tools I Work With</p>
        </div>

        <div className="row">
          {techCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="col-lg-6 mb-4">
              <div className="tech-category">
                <h3>{category.title}</h3>
                <div className="tech-items">
                  {category.items.map((item, itemIndex) => {
                    const IconComponent = item.icon;
                    return (
                      <div key={itemIndex} className="tech-item" style={{ '--tech-color': item.color }}>
                        <IconComponent className="tech-icon" />
                        <span className="tech-name">{item.name}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack; 