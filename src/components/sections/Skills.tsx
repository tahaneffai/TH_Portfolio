'use client';

import { motion } from 'framer-motion';
import Section from '../ui/Section';

const skillCategories = [
  {
    title: 'Frontend',
    skills: ['React', 'Angular', 'TypeScript', 'HTML/CSS', 'Tailwind CSS', 'Framer Motion']
  },
  {
    title: 'Backend',
    skills: ['Django', 'Python', 'Node.js', 'Flask', 'Express', 'RESTful APIs']
  },
  {
    title: 'Database',
    skills: ['SQL', 'MongoDB', 'Firebase', 'PostgreSQL', 'Entity Framework']
  },
  {
    title: 'Tools',
    skills: ['Git', 'Docker', 'Power BI', 'Visual Studio', 'VS Code', 'Azure DevOps']
  },
  {
    title: 'Other',
    skills: ['Agile/Scrum', 'UI/UX Design', 'System Architecture', 'CI/CD', 'Testing']
  },
  {
    title: 'DevOps',
    skills: ['Jira', 'GitHub Actions', 'Containerization', 'Deployment Automation']
  }
];

export default function Skills() {
  return (
    <Section id="skills">
      <motion.h2 
        className="text-3xl font-bold mb-12 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        Skills
      </motion.h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {skillCategories.map((category, index) => (
          <motion.div
            key={category.title}
            className="card hover-lift hover-glow overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -6, scale: 1.015 }}
          >
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-4 text-primary">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span 
                    key={skill} 
                    className="px-3 py-1 bg-secondary/30 dark:bg-secondary/20 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}