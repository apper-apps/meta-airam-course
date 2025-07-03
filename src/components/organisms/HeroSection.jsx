import React from "react";
import { motion } from "framer-motion";
import ApperIcon from "@/components/ApperIcon";

const HeroSection = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
    id="hero"
    className="relative min-h-screen flex items-center justify-center overflow-hidden">
    {/* Animated Background */}
    <div className="absolute inset-0 hero-gradient">
        <div className="absolute inset-0 animated-gradient opacity-20" />
        {/* Floating Elements */}
        <div
            className="absolute top-1/4 left-1/4 w-20 h-20 bg-primary-500/20 rounded-full animate-float" />
        <div
            className="absolute top-1/3 right-1/4 w-16 h-16 bg-secondary-500/20 rounded-full animate-float"
            style={{
                animationDelay: "1s"
            }} />
        <div
            className="absolute bottom-1/4 left-1/3 w-24 h-24 bg-accent-500/20 rounded-full animate-float"
            style={{
                animationDelay: "2s"
            }} />
        {/* Grid Pattern */}
        <div
            className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%236366f1%22 fill-opacity=%220.05%22%3E%3Cpath d=%22M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30" />
    </div>
    <div className="relative z-10 container-custom text-center">
        <motion.div
            initial={{
                opacity: 0,
                y: 50
            }}
            animate={{
                opacity: 1,
                y: 0
            }}
            transition={{
                duration: 0.8
            }}
            className="max-w-4xl mx-auto"
            className="max-w-4xl mx-auto">
            {/* Main Headline */}
            <motion.h1
                initial={{
                    opacity: 0,
                    y: 30
                }}
                animate={{
                    opacity: 1,
                    y: 0
                }}
                transition={{
                    delay: 0.3,
                    duration: 0.8
                }}
                className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 leading-tight">
                {/* Location Badge integrated into heading */}
                <motion.div
                    initial={{
                        opacity: 0,
                        scale: 0.8
                    }}
                    animate={{
                        opacity: 1,
                        scale: 1
                    }}
                    transition={{
                        delay: 0.2,
                        duration: 0.5
                    }}
                    className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 mb-4 border border-white/30">
                    <ApperIcon name="MapPin" size={20} className="text-primary-600" />
                    <span className="text-primary-800 dark:text-primary-200 font-semibold text-lg">First Time in WAZIRABAD
                                      </span>
                </motion.div>
                <br />
                <span className="gradient-text">Master AI Tools</span>
                <br />
                <span className="text-gray-800 dark:text-gray-200">& Workflow Automation
                                </span>
                <br />
                <span
                    className="text-gray-600 dark:text-gray-400 text-3xl md:text-4xl lg:text-5xl">in Just 2 Months
                                </span>
                {/* Subtitle */}
                <motion.p
                    initial={{
                        opacity: 0,
                        y: 20
                    }}
                    animate={{
                        opacity: 1,
                        y: 0
                    }}
                    transition={{
                        delay: 0.5,
                        duration: 0.8
                    }}
                    className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">A practical, hands-on course covering <span className="font-semibold text-primary-600">ChatGPT</span>, <span className="font-semibold text-secondary-600">Bard</span>, <span className="font-semibold text-accent-600">n8n</span>, <span className="font-semibold text-primary-600">Leonardo</span>, <span className="font-semibold text-secondary-600">Pictory</span>, and more.
                              </motion.p>
                {/* CTA Button */}
                <motion.div
                    initial={{
                        opacity: 0,
                        y: 20
                    }}
                    animate={{
                        opacity: 1,
                        y: 0
                    }}
                    transition={{
                        delay: 0.7,
                        duration: 0.8
                    }}
                    className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                    <motion.button
                        onClick={() => scrollToSection("pre-enroll")}
                        className="btn-primary text-lg px-10 py-4 rounded-2xl shadow-2xl hover:shadow-3xl animate-glow group"
                        whileHover={{
                            scale: 1.05
                        }}
                        whileTap={{
                            scale: 0.95
                        }}>
                        <span className="flex items-center space-x-2">
                            <span>Pre-Enroll Now</span>
                            <ApperIcon
                                name="ArrowRight"
                                size={20}
                                className="group-hover:translate-x-1 transition-transform duration-200" />
                        </span>
                    </motion.button>
                    <motion.button
                        onClick={() => scrollToSection("curriculum")}
                        className="btn-secondary text-lg px-8 py-4 rounded-2xl group"
                        whileHover={{
                            scale: 1.05
                        }}
                        whileTap={{
                            scale: 0.95
                        }}>
                        <span className="flex items-center space-x-2">
                            <ApperIcon name="BookOpen" size={20} />
                            <span>View Curriculum</span>
                        </span>
                    </motion.button>
                </motion.div>
                {/* Stats Cards */}
                <motion.div
                    initial={{
                        opacity: 0,
                        y: 30
                    }}
                    animate={{
                        opacity: 1,
                        y: 0
                    }}
                    transition={{
                        delay: 0.9,
                        duration: 0.8
                    }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
                    {[{
                        number: "2",
                        label: "Months Duration",
                        icon: "Clock"
                    }, {
                        number: "6+",
                        label: "AI Tools Covered",
                        icon: "Bot"
                    }, {
                        number: "100%",
                        label: "Practical Learning",
                        icon: "Target"
                    }].map((stat, index) => <motion.div
                        key={index}
                        initial={{
                            opacity: 0,
                            y: 20
                        }}
                        animate={{
                            opacity: 1,
                            y: 0
                        }}
                        transition={{
                            delay: 1 + index * 0.1,
                            duration: 0.6
                        }}
                        className="glass-card glass-card-dark rounded-2xl p-6 text-center hover:scale-105 transition-transform duration-300">
                        <div
                            className="w-12 h-12 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                            <ApperIcon name={stat.icon} size={24} className="text-white" />
                        </div>
                        <div className="text-3xl font-bold gradient-text mb-2">{stat.number}</div>
                        <div className="text-gray-600 dark:text-gray-400 font-medium">{stat.label}</div>
                    </motion.div>)}
                </motion.div>
            </motion.h1></motion.div>
    </div>
    {/* Scroll Indicator */}
    <motion.div
        initial={{
            opacity: 0
        }}
        animate={{
            opacity: 1
        }}
        transition={{
            delay: 1.5,
            duration: 0.8
        }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <motion.div
            animate={{
                y: [0, 10, 0]
            }}
            transition={{
                duration: 2,
                repeat: Infinity
            }}
            className="w-6 h-10 border-2 border-primary-400 rounded-full flex justify-center">
            <motion.div
                animate={{
                    y: [0, 12, 0]
                }}
                transition={{
                    duration: 2,
                    repeat: Infinity
                }}
                className="w-1 h-3 bg-primary-400 rounded-full mt-2" />
        </motion.div>
    </motion.div>
</section>
  );
};

export default HeroSection;