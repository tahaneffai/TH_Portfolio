'use client';

import { motion } from 'framer-motion';
import { Palette, Video, Smartphone, Instagram } from 'lucide-react';
import Section from '../ui/Section';

const achievements = [
  {
    title: 'Flyer Design & Branding',
    description: 'Created visually appealing flyers and event posters with modern layouts and color harmony.',
    icon: <Palette className="h-6 w-6" />
  },
  {
    title: 'Video Editing',
    description: 'Produced and edited short promotional videos with smooth transitions and synced soundtracks.',
    icon: <Video className="h-6 w-6" />
  },
  {
    title: 'UI/UX Design',
    description: 'Designed clean mobile and web interfaces using Figma and modern design principles.',
    icon: <Smartphone className="h-6 w-6" />
  },
  {
    title: 'Creative Visuals for Social Media',
    description: 'Built cohesive design themes and templates for online campaigns.',
    icon: <Instagram className="h-6 w-6" />
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
        Versatility & Skills Beyond Code
      </motion.h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {achievements.map((achievement, index) => (
          <motion.div
            key={achievement.title}
            className="group relative overflow-hidden rounded-2xl bg-white/80 dark:bg-black/60 backdrop-blur-xl border border-white/20 dark:border-white/10 shadow-lg hover:shadow-xl transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ 
              y: -8, 
              scale: 1.02,
              transition: { duration: 0.3, ease: "easeOut" }
            }}
          >
            {/* Teal Gradient Overlay on Hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-teal-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            {/* Content */}
            <div className="relative p-6">
              {/* Icon */}
              <motion.div 
                className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-teal-500 to-cyan-500 text-white shadow-lg mb-4"
                whileHover={{ 
                  scale: 1.1, 
                  rotate: 5,
                  transition: { duration: 0.2 }
                }}
              >
                {achievement.icon}
              </motion.div>
              
              {/* Title */}
              <h3 className="text-lg font-semibold mb-3 text-foreground group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors duration-300">
                {achievement.title}
              </h3>
              
              {/* Description */}
              <p className="text-sm text-muted-foreground leading-relaxed">
                {achievement.description}
              </p>
              
              {/* Decorative Line */}
              <motion.div 
                className="mt-4 w-8 h-0.5 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full"
                whileHover={{ width: "2rem" }}
                transition={{ duration: 0.3 }}
              />
            </div>
            
            {/* Subtle Glow Effect */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-teal-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </motion.div>
        ))}
      </div>
    </Section>
  );
}