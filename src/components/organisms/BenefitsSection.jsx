import React from 'react';
import { motion } from 'framer-motion';
import ApperIcon from '@/components/ApperIcon';

const BenefitsSection = () => {
  const benefits = [
    {
      title: 'Completion Certificate',
      description: 'Recognized credential for your portfolio',
      icon: 'Award',
      gradient: 'from-primary-500 to-primary-600',
      features: ['Industry-recognized certificate', 'Digital badge for LinkedIn', 'Portfolio enhancement']
    },
    {
      title: 'Lifetime Access',
      description: 'Continuous updates and resource access',
      icon: 'Infinity',
      gradient: 'from-secondary-500 to-secondary-600',
      features: ['Course content forever', 'Regular updates included', 'Community access']
    },
    {
      title: 'Real Use Cases',
      description: 'Learn with practical examples',
      icon: 'Lightbulb',
      gradient: 'from-accent-500 to-accent-600',
      features: ['Industry case studies', 'Hands-on projects', 'Real-world applications']
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
    <section id="benefits" className="section-padding bg-white dark:bg-gray-900">
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
            className="inline-flex items-center space-x-2 bg-accent-100 dark:bg-accent-900/30 text-accent-800 dark:text-accent-200 px-6 py-3 rounded-full mb-6"
          >
            <ApperIcon name="Gift" size={20} />
            <span className="font-semibold">Course Benefits</span>
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            <span className="gradient-text">What You'll Get</span>
          </h2>
          
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Comprehensive learning experience with industry-recognized certification, lifetime access, and real-world practical applications.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative"
            >
              <div className="glass-card glass-card-dark rounded-3xl p-8 h-full hover:scale-105 transition-all duration-300 cursor-pointer overflow-hidden">
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${benefit.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                
                <div className="relative z-10 text-center">
                  {/* Icon */}
                  <div className={`w-20 h-20 bg-gradient-to-r ${benefit.gradient} rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <ApperIcon name={benefit.icon} size={32} className="text-white" />
                  </div>

                  {/* Content */}
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300">
                        {benefit.title}
                      </h3>
                      
                      <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>
                    
                    {/* Features List */}
                    <div className="space-y-3">
                      {benefit.features.map((feature, featureIndex) => (
                        <motion.div
                          key={featureIndex}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.5 + featureIndex * 0.1, duration: 0.6 }}
                          className="flex items-center space-x-3 text-left"
                        >
                          <div className="w-6 h-6 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center flex-shrink-0">
                            <ApperIcon name="Check" size={12} className="text-white" />
                          </div>
                          <span className="text-gray-700 dark:text-gray-300 font-medium">
                            {feature}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Value Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-20"
        >
          <div className="glass-card glass-card-dark rounded-3xl p-8 md:p-12 bg-gradient-to-br from-gray-50 to-primary-50 dark:from-gray-800 dark:to-primary-900/20">
            <div className="text-center mb-12">
              <div className="w-20 h-20 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-3xl flex items-center justify-center mx-auto mb-6">
                <ApperIcon name="Star" size={32} className="text-white" />
              </div>
              
              <h3 className="text-3xl font-display font-bold mb-6 gradient-text">
                Exclusive Course Features
              </h3>
              
              <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Additional benefits that set our course apart from the competition.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: 'Users', title: 'Small Class Size', description: 'Maximum 15 students per batch' },
                { icon: 'Headphones', title: '24/7 Support', description: 'Round-the-clock assistance' },
                { icon: 'BookOpen', title: 'Course Materials', description: 'Downloadable resources & templates' },
                { icon: 'Video', title: 'Recorded Sessions', description: 'Review lessons anytime' },
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.7 + index * 0.1, duration: 0.6 }}
                  className="text-center p-6 rounded-2xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm hover:scale-105 transition-transform duration-300"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <ApperIcon name={feature.icon} size={20} className="text-white" />
                  </div>
                  <h4 className="font-bold text-gray-900 dark:text-white mb-2">{feature.title}</h4>
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

export default BenefitsSection;