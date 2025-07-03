'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
}

const services: Service[] = [
  {
    id: 1,
    title: 'Web Development',
    description: 'We build responsive, high-performance websites and web applications using the latest technologies and best practices.',
    icon: '/service-web.svg',
  },
  {
    id: 2,
    title: 'Mobile App Development',
    description: 'Native and cross-platform mobile applications that deliver exceptional user experiences across all devices.',
    icon: '/service-mobile.svg',
  },
  {
    id: 3,
    title: 'UI/UX Design',
    description: 'User-centered design that combines aesthetics with functionality to create intuitive and engaging digital experiences.',
    icon: '/service-design.svg',
  },
  {
    id: 4,
    title: 'Cloud Solutions',
    description: 'Scalable, secure, and reliable cloud infrastructure and services tailored to your business needs.',
    icon: '/service-cloud.svg',
  },
];

const ServicesSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="services" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-muted-foreground text-lg">
            We offer a comprehensive range of development and design services to help you build and grow your digital presence.
          </p>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              className="bg-card hover:bg-card/80 rounded-lg p-6 transition-all duration-300 hover:shadow-lg border border-border hover:border-primary/20 group"
              variants={itemVariants}
            >
              <div className="mb-4 w-16 h-16 relative">
                <Image
                  src={service.icon}
                  alt={service.title}
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-16 text-center">
          <a
            href="#contact"
            className="inline-flex items-center text-primary hover:text-primary/80 font-medium"
          >
            <span>Discuss your project with us</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 ml-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;