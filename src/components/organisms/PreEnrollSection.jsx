import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { toast } from 'react-toastify';
import ApperIcon from '@/components/ApperIcon';

const PreEnrollSection = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.fullName || !formData.email || !formData.phoneNumber) {
      toast.error('Please fill in all required fields');
      return;
    }

    setIsSubmitting(true);
    
    try {
      // Simulate form processing
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Create WhatsApp message
      const whatsappMessage = `I want to pre-enroll for the AI course. My details are:
Name: ${formData.fullName}
Email: ${formData.email}
Phone: ${formData.phoneNumber}`;
      
      const whatsappURL = `https://wa.me/923029610096?text=${encodeURIComponent(whatsappMessage)}`;
      
      // Show success message
      toast.success('Form submitted successfully! Redirecting to WhatsApp...');
      
      // Reset form
      setFormData({
        fullName: '',
        email: '',
        phoneNumber: ''
      });
      
      // Redirect to WhatsApp after a short delay
      setTimeout(() => {
        window.open(whatsappURL, '_blank');
      }, 1500);
      
    } catch (error) {
      toast.error('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputFields = [
    { 
      name: 'fullName', 
      label: 'Full Name', 
      type: 'text', 
      icon: 'User',
      placeholder: 'Enter your full name'
    },
    { 
      name: 'email', 
      label: 'Email Address', 
      type: 'email', 
      icon: 'Mail',
      placeholder: 'Enter your email address'
    },
    { 
      name: 'phoneNumber', 
      label: 'Phone Number', 
      type: 'tel', 
      icon: 'Phone',
      placeholder: 'Enter your phone number'
    },
  ];

  return (
    <section id="pre-enroll" className="section-padding bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-primary-900/20 dark:to-secondary-900/20">
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
            <ApperIcon name="UserPlus" size={20} />
            <span className="font-semibold">Limited Seats Available</span>
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            <span className="gradient-text">Secure Your Spot</span>
          </h2>
          
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Don't miss this opportunity to transform your career with AI. Pre-enroll now and get priority access to our exclusive course.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Form Section */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="glass-card glass-card-dark rounded-3xl p-8 lg:p-10">
                <div className="text-center mb-8">
                  <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <ApperIcon name="FileText" size={24} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    Pre-Enrollment Form
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Fill out the form below to secure your spot
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {inputFields.map((field, index) => (
                    <motion.div
                      key={field.name}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + index * 0.1, duration: 0.6 }}
                      className="relative"
                    >
                      <label 
                        htmlFor={field.name}
                        className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                      >
                        {field.label} *
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                          <ApperIcon name={field.icon} size={20} className="text-gray-400" />
                        </div>
                        <input
                          type={field.type}
                          id={field.name}
                          name={field.name}
                          value={formData[field.name]}
                          onChange={handleInputChange}
                          placeholder={field.placeholder}
                          className="form-input pl-12 pr-4"
                          required
                        />
                      </div>
                    </motion.div>
                  ))}

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full btn-primary py-4 text-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
                    whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                    whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center space-x-2">
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        <span>Submitting...</span>
                      </span>
                    ) : (
                      <span className="flex items-center justify-center space-x-2">
                        <ApperIcon name="Send" size={20} />
                        <span>Submit Application</span>
                      </span>
                    )}
                  </motion.button>
                </form>

                <div className="mt-6 text-center">
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    By submitting this form, you agree to be contacted via WhatsApp for enrollment details.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Info Section */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              {/* Course Info */}
              <div className="glass-card glass-card-dark rounded-2xl p-6">
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  Course Information
                </h4>
                <div className="space-y-4">
                  {[
                    { icon: 'Calendar', label: 'Duration', value: '2 Months' },
                    { icon: 'Users', label: 'Class Size', value: 'Max 15 Students' },
                    { icon: 'Clock', label: 'Schedule', value: 'Flexible Timings' },
                    { icon: 'MapPin', label: 'Location', value: 'Wazirabad' },
                  ].map((info, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 + index * 0.1, duration: 0.6 }}
                      className="flex items-center space-x-3"
                    >
                      <div className="w-10 h-10 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center">
                        <ApperIcon name={info.icon} size={16} className="text-white" />
                      </div>
                      <div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">{info.label}</div>
                        <div className="font-semibold text-gray-900 dark:text-white">{info.value}</div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Contact Info */}
              <div className="glass-card glass-card-dark rounded-2xl p-6">
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  Have Questions?
                </h4>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-secondary-500 to-accent-500 rounded-xl flex items-center justify-center">
                      <ApperIcon name="Phone" size={16} className="text-white" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">Call us</div>
                      <div className="font-semibold text-gray-900 dark:text-white">
                        +92 000 000 0000
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-accent-500 to-primary-500 rounded-xl flex items-center justify-center">
                      <ApperIcon name="MessageCircle" size={16} className="text-white" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">WhatsApp</div>
                      <div className="font-semibold text-gray-900 dark:text-white">
                        +92 302 961 0096
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Urgency */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7, duration: 0.6 }}
                className="bg-gradient-to-r from-accent-500 to-accent-600 rounded-2xl p-6 text-white text-center"
              >
                <ApperIcon name="Clock" size={32} className="mx-auto mb-3" />
                <h4 className="text-xl font-bold mb-2">Limited Time Offer!</h4>
                <p className="text-accent-100">
                  Only 15 seats available for the first batch. Secure your spot before it's too late!
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PreEnrollSection;