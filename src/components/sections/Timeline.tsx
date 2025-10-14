'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
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
      
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Animated Avatar */}
          <motion.div 
            className="flex justify-center lg:justify-center"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <motion.div
              className="relative"
              animate={{ y: [0, -10, 0] }}
              transition={{ 
                repeat: Infinity, 
                duration: 3,
                ease: "easeInOut"
              }}
            >
              {/* Neumorphism glow effect */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-teal-400/20 to-cyan-400/20 dark:from-teal-500/30 dark:to-cyan-500/30 blur-2xl scale-110" />
              
              {/* Avatar image */}
              <motion.div
                className="relative w-64 h-80 sm:w-72 sm:h-[28rem] md:w-80 md:h-[32rem] lg:w-96 lg:h-[36rem] xl:w-[28rem] xl:h-[40rem]"
                whileHover={{ 
                  scale: 1.05,
                }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src="/projects/face2.png"
                  alt="Taha Yassine Neffai - Graduation"
                  fill
                  className="object-contain"
                  priority
                  sizes="(max-width: 768px) 288px, (max-width: 1024px) 320px, (max-width: 1280px) 384px, 448px"
                />
              </motion.div>

              {/* Floating particles */}
              {[...Array(4)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-gradient-to-r from-teal-400 to-cyan-400 rounded-full"
                  style={{
                    top: `${20 + (i * 20)}%`,
                    left: `${15 + (i * 15)}%`,
                  }}
                  animate={{
                    y: [-15, 15, -15],
                    x: [-8, 8, -8],
                    opacity: [0.4, 1, 0.4],
                    scale: [0.8, 1.2, 0.8],
                  }}
                  transition={{
                    duration: 4 + i * 0.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: i * 0.5,
                  }}
                />
              ))}
            </motion.div>
          </motion.div>
          
          {/* Right Side - Timeline */}
          <div className="lg:col-span-1">
            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-6 h-full w-0.5 bg-gradient-to-b from-teal-500/30 via-cyan-500/30 to-teal-500/30"></div>
              
              {timelineItems.map((item, index) => (
                <motion.div 
                  key={item.title}
                  className="relative mb-8 ml-12"
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  {/* Timeline marker */}
                  <div className="absolute -left-6 top-4 w-4 h-4 rounded-full bg-gradient-to-r from-teal-500 to-cyan-500 shadow-lg shadow-teal-500/30"></div>
                  
                  {/* Content Card */}
                  <motion.div 
                    className="card hover-lift hover-glow p-6"
                    whileHover={{ 
                      scale: 1.02,
                      boxShadow: "0 20px 40px rgba(20, 184, 166, 0.15)"
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="flex items-center mb-3 justify-between">
                      <span className="inline-block px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r from-teal-500/20 to-cyan-500/20 text-teal-600 dark:text-teal-400 border border-teal-500/30">
                        Education
                      </span>
                      <span className="text-2xl">{item.icon}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-gradient-primary">{item.title}</h3>
                    <p className="text-sm font-semibold text-teal-600 dark:text-teal-400 mb-2">{item.institution}</p>
                    <p className="text-sm text-muted-foreground mb-3">{item.period}</p>
                    <p className="text-foreground font-medium">{item.description}</p>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}