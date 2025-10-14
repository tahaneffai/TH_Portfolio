'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { ExternalLink, Github, Play, X } from 'lucide-react';
import Section from '../ui/Section';

type Project = {
  title: string;
  description: string;
  stack: string[];
  images: string[];
  liveUrl: string;
  githubUrl: string;
  demo?: { type: 'video' | 'iframe'; src: string };
  imageClassName?: string;
};

const projects: Project[] = [
  {
    title: 'Optical Center Management App',
    description:
      'A complete desktop application for optical centers, featuring client management, product tracking, automated invoices, and a dynamic dashboard with sales analytics. Designed for efficiency and a smooth, intuitive user experience.',
    stack: ['Electron', 'React', 'SQLite', 'MVVM', 'Material-UI', 'Vite'],
    images: ['/projects/image.png', '/projects/image1.PNG', '/projects/image2.PNG', '/projects/image3.PNG', '/projects/image4.PNG'],
    liveUrl: '/projects/OpticalVideo.mp4',
    githubUrl: '#',
    demo: { type: 'video', src: '/projects/OpticalVideo.mp4' },
  },
  {
    title: 'Taxi OBC (On-Board Computer) System',
    description:
      'Designed and implemented an intelligent embedded system for taxi vehicles, integrating real-time route tracking, automated fare computation, and telematics data acquisition. The system supports seamless communication between sensors, GPS modules, and a central management server, ensuring accurate trip monitoring and efficient fleet management.',
    stack: ['Embedded', 'C/C++', 'Hardware', 'UI'],
    images: ['/projects/obc.PNG', '/projects/obc1.PNG', '/projects/obc2.PNG', '/projects/obc3.PNG'],
    liveUrl: '/projects/EMFDJNAGO.mp4',
    githubUrl: '#',
    demo: { type: 'video', src: '/projects/EMFDJNAGO.mp4' },
  },
  {
    title: 'Interactive Digital Menu System',
    description:
      'A responsive digital menu platform designed to enhance the restaurant experience. It allows customers to browse menu items effortlessly through dynamic visuals, clear categories, and smooth interactions. The interface offers an elegant, user-friendly way to explore dishes, ingredients, and prices across all devices, combining modern design with fluid navigation.',
    stack: ['React', 'Next.js', 'HTML', 'CSS'],
    images: ['/projects/menu.jpg', '/projects/menu1.jpg', '/projects/menu2.jpg'],
    imageClassName: 'scale-95',
    liveUrl: 'https://marina-bowls-menu.vercel.app/',
    githubUrl: '#',
  },
  {
    title: 'TrainSight - Tanger Station AR',
    description:
      'Immersive AR mobile app enhancing traveler experience at Tanger Station , By pointing the camera, users see live train schedules, platforms, and directions to services like cafés or ticket counters directly in the real world making navigation intuitive and futuristic..',
    stack: ['Flutter', 'Dart', 'Unity 3D','ARCore', 'Node.js', 'Express', 'PostgreSQL', 'Google Maps API'],
    images: ['/projects/ra.PNG', '/projects/ra1.PNG', '/projects/ra2.PNG'],
    liveUrl: '#',
    githubUrl: '#',
  },
];

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [hoverIndex, setHoverIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const [isDemoOpen, setIsDemoOpen] = useState(false);
  const [demoError, setDemoError] = useState(false);

  useEffect(() => {
    if (!isHovering || project.images.length <= 1) return;
    const interval = setInterval(() => {
      setHoverIndex((i) => (i + 1) % project.images.length);
    }, 800);
    return () => clearInterval(interval);
  }, [isHovering, project.images.length]);

  const currentSrc = project.images[hoverIndex] || project.images[0];

  return (
    <motion.div
      className="card hover-lift hover-glow overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -6, scale: 1.015 }}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => {
        setIsHovering(false);
        setHoverIndex(0);
      }}
    
    >
      <div className="h-48 bg-gray-200 dark:bg-gray-700 relative">
        <Image
          src={currentSrc}
          alt={`${project.title} screenshot`}
          fill
          sizes="(min-width:1024px) 33vw, (min-width:768px) 50vw, 100vw"
          className={`object-cover ${project.imageClassName ?? ''}`}
          priority={index === 0}
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-6">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1.5 bg-gradient-to-r from-teal-500/10 to-cyan-500/10 text-teal-600 dark:text-teal-400 rounded-full text-xs font-medium border border-teal-500/20"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex flex-wrap gap-3 justify-between">
          <motion.a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary btn-sm group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <ExternalLink size={16} className="group-hover:rotate-12 transition-transform duration-300" />
            Live Demo
          </motion.a>
          {project.demo && (
            <motion.button
              type="button"
              onClick={() => { setIsDemoOpen(true); setDemoError(false); }}
              className="btn btn-ghost btn-sm group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label={`Open ${project.title} demo`}
            >
              <Play size={16} className="group-hover:scale-110 transition-transform duration-300" />
              Demo
            </motion.button>
          )}
          <motion.a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-ghost btn-sm group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Github size={16} className="group-hover:rotate-12 transition-transform duration-300" />
            GitHub
          </motion.a>
        </div>
      </div>
      {isDemoOpen && project.demo && (
        <motion.div
          className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg max-w-3xl w-[90%] overflow-hidden"
            initial={{ scale: 0.95, y: 10, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            transition={{ duration: 0.2 }}
          >
            <div className="flex justify-between items-center p-3 border-b border-gray-200 dark:border-gray-800">
              <h4 className="text-sm font-semibold">{project.title} Demo</h4>
              <button
                className="p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800"
                onClick={() => setIsDemoOpen(false)}
                aria-label="Close demo"
              >
                <X size={16} />
              </button>
            </div>
            <div className="p-4">
              {project.demo.type === 'video' ? (
                demoError ? (
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Demo media not found. Add the video at <code>/public{project.demo.src}</code> or provide an embed link.
                  </p>
                ) : (
                  <video
                    src={project.demo.src}
                    controls
                    className="w-full h-auto rounded"
                    onError={() => setDemoError(true)}
                  />
                )
              ) : (
                <div className="w-full" style={{ aspectRatio: '16/9' }}>
                  <iframe
                    src={project.demo.src}
                    className="w-full h-full rounded"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title={`${project.title} demo`}
                  />
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </motion.div>
  );
}

export default function Projects() {
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
    <Section id="projects" className="bg-soft-gradient">
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
          Featured Projects
        </motion.h2>
        
        <motion.p 
          className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed text-balance"
          variants={itemVariants}
        >
          A collection of projects that showcase my skills in full-stack development, embedded systems, and user experience design.
        </motion.p>
      </motion.div>
      
      <motion.div 
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        {projects.map((project, index) => (
          <motion.div
            key={`${project.title}-${index}`}
            variants={itemVariants}
          >
            <ProjectCard project={project} index={index} />
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}