'use client';

import { motion } from 'framer-motion';
import Section from '../ui/Section';

const timelineItems = [
  {
    title: 'Physical Sciences',
    period: 'September 2019 - July 2020',
    description: 'Baccalaureate',
    institution: 'RAWAFID Oued Zem, Morocco',
    icon: '🎓',
    type: 'education'
  },
  {
    title: 'Web Development and Telecommunication Networks',
    period: 'September 2020 - June 2023',
    description: 'Bachelor\'s degree',
    institution: 'Vinci Rabat, Morocco',
    icon: '🎓',
    type: 'education'
  },
  {
    title: 'Computer Engineering and Telecom Networks',
    period: 'September 2023 – December 2025 (ongoing)',
    description: 'Engineering Degree',
    institution: 'Ensi Tangier, Morocco',
    icon: '🎓',
    type: 'education'
  }
];

export default function Timeline() {
  return (
    <Section id="timeline" className="bg-soft-gradient">
      <motion.h2 
        className="text-3xl font-bold mb-12 text-center text-gradient-primary"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        Timeline
      </motion.h2>
      
      <div className="max-w-3xl mx-auto">
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-0 md:left-1/2 h-full w-0.5 bg-primary/30 transform -translate-x-1/2"></div>
          
          {timelineItems.map((item, index) => (
            <motion.div 
              key={item.title}
              className="relative mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className={`flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                {/* Timeline marker */}
                <div className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-primary transform -translate-x-1/2"></div>
                
                {/* Content */}
                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                  <div className="p-4 card hover-lift hover-glow">
                    <div className="flex items-center mb-2 justify-between">
                      <span className={`inline-block px-3 py-1 rounded-full text-xs ${
                        'bg-accent/20 text-accent'
                      }`}>
                        Education
                      </span>
                      <span className="text-xl">{item.icon}</span>
                    </div>
                    <h3 className="text-lg font-semibold">{item.title}</h3>
                    <p className="text-sm text-primary dark:text-primary mb-2">{item.institution}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">{item.period}</p>
                    <p className="text-gray-600 dark:text-gray-300 font-medium">{item.description}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}