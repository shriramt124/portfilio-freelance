'use client';

import { motion } from 'framer-motion';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Priya Sharma',
    role: 'Founder',
    company: 'TechStart Solutions',
    content: 'Working with this team was exceptional. They delivered our e-commerce platform ahead of schedule and exceeded our expectations. Despite being new to freelancing, their technical skills and dedication really impressed us.',
    rating: 5,
    image: '/client-1.svg',
  },
  {
    id: 2,
    name: 'Arjun Patel',
    role: 'Product Manager',
    company: 'HealthTech Inc',
    content: 'The mobile app they developed for us has received great feedback from our users. The UI/UX design is intuitive and performs well. They were very responsive to our feedback throughout the project.',
    rating: 4,
    image: '/client-2.svg',
  },
  {
    id: 3,
    name: 'Kavya Reddy',
    role: 'Operations Director',
    company: 'EduLearn Platform',
    content: 'Their automation solutions helped streamline our workflow significantly. The team was eager to learn and adapt to our specific requirements. Good value for money and timely delivery.',
    rating: 4,
    image: '/client-3.svg',
  },
];

const TestimonialsSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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

  const renderStars = (rating: number) => {
    return (
      <div className="flex space-x-1 mb-4">
        {[...Array(5)].map((_, index) => (
          <svg
            key={index}
            className={`h-5 w-5 ${
              index < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
            }`}
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
    );
  };

  return (
    <section id="testimonials" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-muted-foreground text-lg">
            Don't just take our word for it. Here's what our clients have to say about working with us.
          </p>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              className="bg-card rounded-lg border border-border p-6 hover:border-primary/30 transition-all duration-300 hover:shadow-lg"
              variants={itemVariants}
            >
              {renderStars(testimonial.rating)}

              <blockquote className="text-foreground mb-6 leading-relaxed">
                "{testimonial.content}"
              </blockquote>

              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-purple-500/20 rounded-full flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-primary/60" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                  </svg>
                </div>
                <div>
                  <div className="font-semibold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.role} at {testimonial.company}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-6">
            Ready to join our list of satisfied clients?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-md font-medium transition-colors"
          >
            <span>Start Your Project</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 ml-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H3a1 1 0 110-2h9.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;