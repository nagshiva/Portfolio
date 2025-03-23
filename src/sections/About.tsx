import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Database, LineChart, Cloud } from 'lucide-react';

const About = () => {
  const skills = [
    {
      icon: Code2,
      title: 'Frontend Development',
      description: 'Passionate about crafting intuitive and responsive frontend experiences.'
    },
    {
      icon: LineChart,
      title: 'Stock market investments',
      description: 'enthusiast in stock market analysis, investment strategies, and portfolio management.'
    },
    {
      icon: Database,
      title: 'Data Science',
      description: 'Data science enthusiast, exploring insights through analytics and machine learning.'
    },
    {
      icon: Cloud,
      title: 'Tech Explorer',
      description: 'Exploring and embracing new technologies with passion'
    }
    
  ];

  return (
    <div className="min-h-screen flex items-center py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
          My journey from mechanical engineering to computer science has been driven by curiosity and learning. 
          Starting with machines, I developed problem-solving skills that led me to explore programming, data science, 
          and cloud computing. Now, I combine engineering logic with technology to innovate and grow in the digital world.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-800 p-6 rounded-lg"
            >
              <skill.icon className="w-12 h-12 text-blue-500 mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-2">{skill.title}</h3>
              <p className="text-gray-400">{skill.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;