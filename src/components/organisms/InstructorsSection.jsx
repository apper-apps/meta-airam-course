import React from 'react';
import { motion } from 'framer-motion';
import ApperIcon from '@/components/ApperIcon';

const InstructorsSection = () => {
  const instructors = [
    {
      name: 'Muhammad Ali',
      title: 'Lead Instructor',
      bio: 'AI & Automation Expert with 5+ years of experience in developing cutting-edge AI solutions and training professionals worldwide.',
      image: '/instructor-1.jpg',
      expertise: ['AI Strategy', 'Prompt Engineering', 'Automation'],
      social: {
        linkedin: '#',
        twitter: '#',
        github: '#'
      }
    },
    {
      name: 'Muhammad Sufyan',
      title: 'Managing Director',
      bio: 'Visionary leader and technology strategist with extensive experience in AI implementation and business transformation.',
      image: '/instructor-2.jpg',
      expertise: ['Business Strategy', 'AI Implementation', 'Leadership'],
      social: {
        linkedin: '#',
        twitter: '#',
        github: '#'
      }
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
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
    <section id="instructors" className="section-padding bg-gray-50 dark:bg-gray-800">
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
            className="inline-flex items-center space-x-2 bg-secondary-100 dark:bg-secondary-900/30 text-secondary-800 dark:text-secondary-200 px-6 py-3 rounded-full mb-6"
          >
            <ApperIcon name="Users" size={20} />
            <span className="font-semibold">Meet Your Instructors</span>
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            <span className="gradient-text">Learn from the Best</span>
          </h2>
          
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Our expert instructors bring years of real-world experience and deep expertise in AI and automation technologies.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12"
        >
          {instructors.map((instructor, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group"
            >
              <div className="glass-card glass-card-dark rounded-3xl p-8 h-full hover:scale-105 transition-all duration-300 cursor-pointer overflow-hidden relative">
                {/* Background Pattern */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-secondary-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="relative z-10">
                  {/* Instructor Image */}
                  <div className="relative mb-8">
                    <div className="w-32 h-32 mx-auto rounded-3xl bg-gradient-to-br from-primary-500 to-secondary-500 p-1 group-hover:scale-110 transition-transform duration-300">
                      <div className="w-full h-full rounded-3xl bg-gray-200 dark:bg-gray-700 flex items-center justify-center overflow-hidden">
                        <ApperIcon name="User" size={48} className="text-gray-400 dark:text-gray-500" />
                      </div>
                    </div>
                    
                    {/* Floating Badge */}
                    <div className="absolute -top-2 -right-2 w-12 h-12 bg-gradient-to-r from-accent-500 to-accent-600 rounded-2xl flex items-center justify-center">
                      <ApperIcon name="Award" size={20} className="text-white" />
                    </div>
                  </div>

                  {/* Instructor Info */}
                  <div className="text-center space-y-6">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300">
                        {instructor.name}
                      </h3>
                      <p className="text-primary-600 dark:text-primary-400 font-semibold text-lg">
                        {instructor.title}
                      </p>
                    </div>
                    
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                      {instructor.bio}
                    </p>
                    
                    {/* Expertise Tags */}
                    <div className="flex flex-wrap justify-center gap-2">
                      {instructor.expertise.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-800 dark:text-primary-200 rounded-full text-sm font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                    
                    {/* Social Links */}
                    <div className="flex justify-center space-x-4 pt-4">
                      {Object.entries(instructor.social).map(([platform, url]) => (
                        <motion.a
                          key={platform}
                          href={url}
                          className="w-10 h-10 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center hover:bg-primary-100 dark:hover:bg-primary-900/30 transition-colors duration-200"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <ApperIcon 
                            name={platform === 'linkedin' ? 'Linkedin' : platform === 'twitter' ? 'Twitter' : 'Github'} 
                            size={16} 
                            className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400" 
                          />
                        </motion.a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <div className="glass-card glass-card-dark rounded-2xl p-8 bg-gradient-to-r from-primary-50 to-secondary-50 dark:from-primary-900/20 dark:to-secondary-900/20">
            <div className="flex items-center justify-center space-x-4 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center">
                <ApperIcon name="MessageCircle" size={24} className="text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  Personal Mentorship
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Get one-on-one guidance throughout your learning journey
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { icon: 'Clock', title: 'Weekly 1:1 Sessions', description: 'Personalized guidance every week' },
                { icon: 'HelpCircle', title: 'Q&A Support', description: '24/7 access to instructor support' },
                { icon: 'Trophy', title: 'Career Guidance', description: 'Job placement assistance included' },
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.7 + index * 0.1, duration: 0.6 }}
                  className="text-center p-4 rounded-xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm"
                >
                  <div className="w-10 h-10 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <ApperIcon name={feature.icon} size={18} className="text-white" />
                  </div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-1">{feature.title}</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default InstructorsSection;