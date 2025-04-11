import React from 'react';
import { motion } from 'framer-motion';

const Achievements = () => {
  const achievements = [
    {
      title: 'From Tools to Tech – My Journey.',
      image: 'Designer.jpeg',
      description: 'Transitioned from a Diploma in Mechanical Engineering to B.Tech in Computer Science Engineering, combining hands-on technical experience with a passion for coding and technology to build innovative solutions for real-world challenges.'
    },
    {
      title: 'Investing with Insight, Learning with Passion.',
      image: 'market.jpeg',
      description: 'A passionate investment enthusiast with 2 years of hands-on experience in the stock market. Skilled in equity investments, market analysis, and spotting investment opportunities. Continuously learning and evolving with market trends to build long-term financial growth strategies.'
    },
    {
      title: 'Merit Recognized, Future Unlocked.',
      image: 'merit.jpeg',
      description: 'Awarded a 40% merit-based scholarship from KL University for securing 80% in Diploma academics, recognizing consistent academic performance and dedication to learning.'
    },
    
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Journey & Achievements</h2>
          <p className="text-gray-400">Highlighting key milestones and recognition</p>
        </motion.div>

        <div className="grid md:grid-cols- lg:grid-cols-3 gap-6">
            
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-800 rounded-lg overflow-hidden"
            >
              <img
                src={achievement.image}
                alt={achievement.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{achievement.title}</h3>
                <p className="text-gray-400">{achievement.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Achievements;