'use client';

import { motion } from 'framer-motion';
import Section from '../ui/Section';

const skills = [
  'Flutter', 'next.js', 'Flask', 'React', 'Node.js', 'Angular', 
  'Power BI', 'SQL', 'Electron'
];

export default function About() {
  return (
    <Section id="about" className="bg-soft-gradient">
      <div className="max-w-4xl mx-auto">
        <motion.h2 
          className="text-3xl font-bold mb-8 text-center text-gradient-primary"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          About Me
        </motion.h2>
        
        <motion.p 
          className="text-lg mb-8 text-gray-700 dark:text-gray-300"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
        >
         I’m a Software Engineer and Freelance Developer who loves solving real-world problems with code. I turn ideas into smart, intuitive, and seamless digital experiences — from web applications and desktop tools to automated systems.

I focus on clean code, efficient architecture, and smooth user experiences, always aiming to make technology simpler, faster, and effortless for those who use it.
        </motion.p>
        
        <div className="flex flex-wrap gap-3 justify-center">
          {skills.map((skill, index) => (
            <motion.span
              key={skill}
              className="btn btn-outline btn-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.5, 
                delay: 0.2 + (index * 0.1),
                ease: "easeOut" 
              }}
              viewport={{ once: true }}
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </div>
    </Section>
  );
}