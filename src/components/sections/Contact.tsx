'use client';

import { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Send, Github, Linkedin, Mail, Phone, MapPin, Clock, MessageCircle } from 'lucide-react';
import Section from '../ui/Section';

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    topics: [],
    projectType: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<null | 'success' | 'error'>(null);
  
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, -50]);
  const opacity = useTransform(scrollY, [0, 1000], [1, 0.8]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          fullName: '',
          email: '',
          topics: [],
          projectType: '',
          message: ''
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

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
    <Section id="contact" className="bg-soft-gradient relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <motion.div 
          style={{ y, opacity }}
          className="absolute top-1/4 -left-32 w-64 h-64 rounded-full bg-gradient-to-br from-teal-500/20 to-cyan-500/20 blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360]
          }}
          transition={{ 
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div 
          style={{ y: y, opacity }}
          className="absolute bottom-1/4 -right-32 w-80 h-80 rounded-full bg-gradient-to-br from-cyan-500/15 to-blue-500/15 blur-3xl"
          animate={{ 
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0]
          }}
          transition={{ 
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

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
          Let's Work Together
        </motion.h2>
        
        <motion.p 
          className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed text-balance drop-shadow-sm"
          variants={itemVariants}
        >
          Ready to bring your ideas to life? I'm always excited to discuss new projects, creative challenges, and opportunities to collaborate.
        </motion.p>
      </motion.div>
      
      <motion.div 
        className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        {/* Enhanced Contact Form */}
        <motion.div
          variants={itemVariants}
          className="relative"
        >
          <motion.div
            className="card p-8 hover-lift"
            whileHover={{ y: -8, rotateX: 2 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-2xl bg-gradient-to-br from-teal-500/20 to-cyan-500/20">
                <MessageCircle className="h-6 w-6 text-teal-600 dark:text-teal-400" />
              </div>
              <h3 className="text-2xl font-semibold text-foreground">Send a Message</h3>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <motion.div
                  whileFocus={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <label htmlFor="fullName" className="block text-sm font-medium mb-2 text-foreground">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-2xl border border-white/20 bg-white/10 dark:bg-white/5 backdrop-blur-xl focus:outline-none focus:ring-2 focus:ring-teal-500/60 focus:border-teal-500/50 transition-all duration-300"
                    placeholder="Your full name"
                  />
                </motion.div>
                
                <motion.div
                  whileFocus={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <label htmlFor="email" className="block text-sm font-medium mb-2 text-foreground">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-2xl border border-white/20 bg-white/10 dark:bg-white/5 backdrop-blur-xl focus:outline-none focus:ring-2 focus:ring-teal-500/60 focus:border-teal-500/50 transition-all duration-300"
                    placeholder="your.email@example.com"
                  />
                </motion.div>
              </div>
              
              <motion.div
                whileFocus={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <label htmlFor="projectType" className="block text-sm font-medium mb-2 text-foreground">
                  Project Type
                </label>
                <select
                  id="projectType"
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-2xl border border-white/20 bg-white/10 dark:bg-white/5 backdrop-blur-xl focus:outline-none focus:ring-2 focus:ring-teal-500/60 focus:border-teal-500/50 transition-all duration-300"
                >
                  <option value="">Select a project type</option>
                  <option value="web">Web Development</option>
                  <option value="mobile">Mobile App</option>
                  <option value="desktop">Desktop Application</option>
                  <option value="data">Data Analysis</option>
                  <option value="consulting">Consulting</option>
                  <option value="other">Other</option>
                </select>
              </motion.div>
              
              <motion.div
                whileFocus={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <label htmlFor="message" className="block text-sm font-medium mb-2 text-foreground">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  required
                  className="w-full px-4 py-3 rounded-2xl border border-white/20 bg-white/10 dark:bg-white/5 backdrop-blur-xl focus:outline-none focus:ring-2 focus:ring-teal-500/60 focus:border-teal-500/50 transition-all duration-300 resize-none"
                  placeholder="Tell me about your project, ideas, or how I can help you..."
                />
              </motion.div>
              
              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="btn btn-primary w-full group"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {isSubmitting ? (
                  <>
                    <motion.div
                      className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
                  </>
                )}
              </motion.button>
              
              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 rounded-2xl bg-green-500/10 border border-green-500/20 text-green-600 dark:text-green-400 text-center"
                >
                  ✅ Message sent successfully! I'll get back to you soon.
                </motion.div>
              )}
              
              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 rounded-2xl bg-red-500/10 border border-red-500/20 text-red-600 dark:text-red-400 text-center"
                >
                  ❌ Failed to send message. Please try again or contact me directly.
                </motion.div>
              )}
            </form>
          </motion.div>
        </motion.div>
        
        {/* Enhanced Contact Info */}
        <motion.div
          variants={itemVariants}
          className="space-y-8"
        >
          <motion.div
            className="card p-8 hover-lift"
            whileHover={{ y: -8, rotateX: -2 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-2xl bg-gradient-to-br from-teal-500/20 to-cyan-500/20">
                <Mail className="h-6 w-6 text-teal-600 dark:text-teal-400" />
              </div>
              <h3 className="text-2xl font-semibold text-foreground">Get in Touch</h3>
            </div>
            
            <p className="text-muted-foreground mb-8 leading-relaxed">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Let's create something amazing together!
            </p>
            
            <div className="space-y-4">
              <motion.a 
                href="mailto:contact@tahaneffai.com" 
                className="btn btn-ghost justify-start group"
                whileHover={{ x: 8, scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <Mail className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                <span>contact@tahaneffai.com</span>
              </motion.a>
              
              <motion.a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-ghost justify-start group"
                whileHover={{ x: 8, scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <Github className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                <span>GitHub Profile</span>
              </motion.a>
              
              <motion.a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-ghost justify-start group"
                whileHover={{ x: 8, scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <Linkedin className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                <span>LinkedIn Profile</span>
              </motion.a>
            </div>
          </motion.div>

          {/* Contact Stats */}
          <motion.div
            className="grid grid-cols-2 gap-4"
            variants={itemVariants}
          >
            <motion.div
              className="card p-6 text-center hover-lift"
              whileHover={{ y: -4, scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <Clock className="h-8 w-8 text-teal-500 mx-auto mb-2" />
              <div className="text-2xl font-bold text-foreground">24h</div>
              <div className="text-sm text-muted-foreground">Response Time</div>
            </motion.div>
            
            <motion.div
              className="card p-6 text-center hover-lift"
              whileHover={{ y: -4, scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <MapPin className="h-8 w-8 text-cyan-500 mx-auto mb-2" />
              <div className="text-2xl font-bold text-foreground">Remote</div>
              <div className="text-sm text-muted-foreground">Available</div>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </Section>
  );
}