import React from 'react';
import { motion } from 'framer-motion';
import ApperIcon from '@/components/ApperIcon';

const CurriculumSection = () => {
  const curriculumItems = [
    {
      title: 'Introduction to AI & Automation',
      description: 'Foundational concepts and industry overview',
      icon: 'Lightbulb',
      duration: 'Week 1',
      gradient: 'from-primary-500 to-primary-600'
    },
    {
      title: 'Prompt Engineering Basics',
      description: 'Master effective communication with AI models',
      icon: 'MessageSquare',
      duration: 'Week 2',
      gradient: 'from-secondary-500 to-secondary-600'
    },
    {
      title: 'ChatGPT + Bard for Productivity',
      description: 'Leverage LLMs for maximum efficiency',
      icon: 'Bot',
      duration: 'Week 3-4',
      gradient: 'from-accent-500 to-accent-600'
    },
    {
      title: 'AI Image Generation Tools',
      description: 'DALL·E, Midjourney, Leonardo Mastery',
      icon: 'Image',
      duration: 'Week 5',
      gradient: 'from-primary-500 to-secondary-500'
    },
    {
      title: 'No-Code Automation',
      description: 'Zapier workflows and integration',
      icon: 'Zap',
      duration: 'Week 6',
      gradient: 'from-secondary-500 to-accent-500'
    },
    {
      title: 'AI Video & Voice Tools',
      description: 'Synthesia, Pictory, ElevenLabs deep dive',
      icon: 'Video',
      duration: 'Week 7-8',
      gradient: 'from-accent-500 to-primary-500'
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

return (
    <section id="curriculum" className="section-padding bg-white dark:bg-gray-900">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center space-x-2 bg-primary-100 dark:bg-primary-900/30 text-primary-800 dark:text-primary-200 px-6 py-3 rounded-full mb-6"
          >
            <ApperIcon name="BookOpen" size={20} />
            <span className="font-semibold">Comprehensive Curriculum</span>
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            <span className="gradient-text">What You'll Learn</span>
          </h2>
          
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Our carefully crafted curriculum covers everything from AI fundamentals to advanced automation workflows, ensuring you're job-ready in just 8 weeks.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {curriculumItems.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative"
            >
              <div className="glass-card glass-card-dark rounded-2xl p-8 h-full hover:scale-105 transition-all duration-300 cursor-pointer">
                {/* Duration Badge */}
                <div className="absolute top-4 right-4 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 px-3 py-1 rounded-full text-sm font-medium">
                  {item.duration}
                </div>

                {/* Icon */}
                <div className={`w-16 h-16 bg-gradient-to-r ${item.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <ApperIcon name={item.icon} size={28} className="text-white" />
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300">
                    {item.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary-500/5 to-secondary-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Real-World Projects Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-20"
        >
          <div className="glass-card glass-card-dark rounded-3xl p-8 md:p-12 bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-primary-900/20 dark:to-secondary-900/20">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-3xl flex items-center justify-center mx-auto mb-6">
                <ApperIcon name="Briefcase" size={32} className="text-white" />
              </div>
              
              <h3 className="text-3xl font-display font-bold mb-6 gradient-text">
                Hands-on Real World Tasks
              </h3>
              
              <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
                Practical projects mirroring real business environments to ensure you're ready for the workforce.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { icon: 'Target', title: 'Real-world simulations', description: 'Work on actual business scenarios' },
                  { icon: 'GitBranch', title: 'AI workflow building', description: 'Create automated processes' },
                  { icon: 'PenTool', title: 'Prompt crafting for business', description: 'Master professional AI communication' },
                ].map((project, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.7 + index * 0.1, duration: 0.6 }}
                    className="text-center p-6 rounded-2xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm"
                  >
                    <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <ApperIcon name={project.icon} size={20} className="text-white" />
                    </div>
                    <h4 className="font-bold text-gray-900 dark:text-white mb-2">{project.title}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{project.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CurriculumSection;