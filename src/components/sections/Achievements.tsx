'use client';

import { motion } from 'framer-motion';
import { Award } from 'lucide-react';
import Section from '../ui/Section';

const achievements = [
  {
    title: 'Azure Fundamentals (AZ-900)',
    issuer: 'Microsoft',
    date: '2023',
    icon: <Award className="h-5 w-5 text-accent" />
  },
  {
    title: 'Google Data Analytics',
    issuer: 'Google',
    date: '2023',
    icon: <Award className="h-5 w-5 text-accent" />
  },
  {
    title: 'Scrum Basics',
    issuer: 'Scrum.org',
    date: '2022',
    icon: <Award className="h-5 w-5 text-accent" />
  },
  {
    title: 'Cisco Networking Intro',
    issuer: 'Cisco',
    date: '2022',
    icon: <Award className="h-5 w-5 text-accent" />
  }
];

export default function Achievements() {
  return (
    <Section id="achievements" className="bg-soft-gradient">
      <motion.h2 
        className="text-3xl font-bold mb-12 text-center text-gradient-primary"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        Achievements & Certifications
      </motion.h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {achievements.map((achievement, index) => (
          <motion.div
            key={achievement.title}
            className="card hover-lift hover-glow p-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -6, scale: 1.015 }}
          >
            <div className="flex items-center mb-4">
              <div className="p-2 bg-primary/10 rounded-full mr-3">
                {achievement.icon}
              </div>
              <h3 className="font-semibold">{achievement.title}</h3>
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-300">
              <p>{achievement.issuer}</p>
              <p>{achievement.date}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}