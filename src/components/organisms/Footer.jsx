import React from 'react';
import { motion } from 'framer-motion';
import ApperIcon from '@/components/ApperIcon';

const Footer = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const footerLinks = [
    { name: 'Home', id: 'hero' },
    { name: 'Curriculum', id: 'curriculum' },
    { name: 'Instructors', id: 'instructors' },
    { name: 'Pre-Enroll', id: 'pre-enroll' },
  ];

  const socialLinks = [
    { name: 'Facebook', icon: 'Facebook', url: '#' },
    { name: 'Twitter', icon: 'Twitter', url: '#' },
    { name: 'LinkedIn', icon: 'Linkedin', url: '#' },
    { name: 'Instagram', icon: 'Instagram', url: '#' },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2"
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-xl flex items-center justify-center">
                  <ApperIcon name="Brain" size={28} className="text-white" />
                </div>
                <div>
                  <div className="font-display font-bold text-2xl gradient-text">
                    Airam Tech
                  </div>
                  <div className="text-gray-400 text-sm">
                    AI Course - Wazirabad
                  </div>
                </div>
              </div>
              
              <p className="text-gray-400 text-lg leading-relaxed mb-6 max-w-md">
                Empowering the next generation of AI professionals in Wazirabad with cutting-edge technology education and practical skills.
              </p>
              
              {/* Contact Numbers */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-primary-500/20 rounded-lg flex items-center justify-center">
                    <ApperIcon name="Phone" size={16} className="text-primary-400" />
</div>
                  <div>
                    <a href="tel:+92000000000" className="font-semibold hover:text-primary-400 transition-colors duration-200">+92 000 000 0000</a>
                    <div className="text-sm text-gray-400">Primary Contact</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-secondary-500/20 rounded-lg flex items-center justify-center">
                    <ApperIcon name="Phone" size={16} className="text-secondary-400" />
</div>
                  <div>
                    <a href="tel:+92111111111" className="font-semibold hover:text-secondary-400 transition-colors duration-200">+92 111 111 1111</a>
                    <div className="text-sm text-gray-400">Alternative Contact</div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h4 className="text-xl font-bold mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {footerLinks.map((link) => (
                  <li key={link.id}>
                    <motion.button
                      onClick={() => scrollToSection(link.id)}
                      className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center space-x-2 group"
                      whileHover={{ x: 5 }}
                    >
                      <ApperIcon name="ChevronRight" size={16} className="text-primary-400 group-hover:text-primary-300" />
                      <span>{link.name}</span>
                    </motion.button>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h4 className="text-xl font-bold mb-6">Get In Touch</h4>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 bg-accent-500/20 rounded-lg flex items-center justify-center mt-1">
                    <ApperIcon name="MapPin" size={16} className="text-accent-400" />
                  </div>
                  <div>
                    <div className="font-semibold">Wazirabad</div>
                    <div className="text-sm text-gray-400">Punjab, Pakistan</div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 bg-primary-500/20 rounded-lg flex items-center justify-center mt-1">
                    <ApperIcon name="MessageCircle" size={16} className="text-primary-400" />
                  </div>
                  <div>
                    <div className="font-semibold">WhatsApp</div>
                    <div className="text-sm text-gray-400">+92 302 961 0096</div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 bg-secondary-500/20 rounded-lg flex items-center justify-center mt-1">
                    <ApperIcon name="Clock" size={16} className="text-secondary-400" />
                  </div>
                  <div>
                    <div className="font-semibold">Office Hours</div>
                    <div className="text-sm text-gray-400">Mon-Fri: 9AM-6PM</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Social Media & CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="border-t border-gray-800 py-8"
        >
          <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
            <div className="text-center md:text-left">
              <h4 className="text-xl font-bold mb-2">Ready to Transform Your Career?</h4>
              <p className="text-gray-400">Join the AI revolution and secure your future today!</p>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6">
              <motion.button
                onClick={() => scrollToSection('pre-enroll')}
                className="btn-primary px-8 py-3 rounded-xl"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="flex items-center space-x-2">
                  <span>Enroll Now</span>
                  <ApperIcon name="ArrowRight" size={16} />
                </span>
              </motion.button>
              
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    className="w-12 h-12 bg-gray-800 rounded-xl flex items-center justify-center hover:bg-primary-500 transition-colors duration-200"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <ApperIcon name={social.icon} size={20} className="text-gray-400 hover:text-white" />
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-gray-400">
                © 2025 Airam Tech. All rights reserved.
              </p>
            </div>
            
            <div className="text-center md:text-right">
              <p className="text-gray-400">
                Developed by <span className="font-semibold text-primary-400">Muhammad Ali</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;