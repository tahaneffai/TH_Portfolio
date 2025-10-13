'use client';

import { motion } from 'framer-motion';
import { Code, Database, Cpu, Zap, Users, Target } from 'lucide-react';
import Section from '../ui/Section';

const skills = [
  'Flutter', 'Next.js', 'Flask', 'React', 'Node.js', 'Angular', 
  'Power BI', 'SQL', 'Electron', 'TypeScript', 'Python', 'JavaScript'
];

const values = [
  {
    icon: Code,
    title: 'Clean Code',
    description: 'Writing maintainable, readable, and efficient code that stands the test of time.'
  },
  {
    icon: Database,
    title: 'Robust Architecture',
    description: 'Designing scalable systems that can grow with your business needs.'
  },
  {
    icon: Users,
    title: 'User-Centric',
    description: 'Creating intuitive experiences that users love and find effortless.'
  },
  {
    icon: Zap,
    title: 'Performance',
    description: 'Optimizing for speed and efficiency in every solution I build.'
  },
  {
    icon: Target,
    title: 'Problem Solving',
    description: 'Turning complex challenges into elegant, simple solutions.'
  },
  {
    icon: Cpu,
    title: 'Innovation',
    description: 'Staying ahead with cutting-edge technologies and best practices.'
  }
];

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <Section id="about" className="bg-soft-gradient">
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-6 text-gradient-primary tracking-tight"
            variants={itemVariants}
          >
            About Me
          </motion.h2>
          
          <motion.p 
            className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed text-balance"
            variants={itemVariants}
          >
            I&apos;m a Software Engineer and Freelance Developer who loves solving real-world problems with code. I turn ideas into smart, intuitive, and seamless digital experiences — from web applications and desktop tools to automated systems.
          </motion.p>
        </motion.div>

        {/* Values Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {values.map((value) => (
            <motion.div
              key={value.title}
              className="card p-8 hover-lift group"
              variants={itemVariants}
              whileHover={{ y: -8 }}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-2xl bg-gradient-to-br from-teal-500/20 to-cyan-500/20 group-hover:scale-110 transition-transform duration-300">
                  <value.icon className="h-6 w-6 text-teal-600 dark:text-teal-400" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">{value.title}</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">{value.description}</p>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Skills Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="text-center"
        >
          <motion.h3 
            className="text-2xl font-semibold mb-8 text-foreground"
            variants={itemVariants}
          >
            Technologies I Work With
          </motion.h3>
          
          <motion.div 
            className="flex flex-wrap gap-4 justify-center"
            variants={itemVariants}
          >
            {skills.map((skill, index) => (
              <motion.span
                key={skill}
                className="btn btn-ghost btn-sm group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.05, y: -2 }}
                transition={{ 
                  duration: 0.4, 
                  delay: index * 0.05,
                  ease: "easeOut" 
                }}
                viewport={{ once: true }}
              >
                <span className="group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors duration-300">
                  {skill}
                </span>
              </motion.span>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </Section>
  );
}