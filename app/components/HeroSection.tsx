'use client';

import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      {/* Background grid pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-500">
                Transforming Ideas
              </span>{' '}
              into Exceptional Digital Experiences
            </h1>
          </motion.div>
          
          <motion.p 
            className="text-xl text-muted-foreground mb-8 max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            We're a team of passionate developers and designers creating custom solutions 
            that drive business growth and deliver outstanding user experiences.
          </motion.p>
          
          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <a 
              href="#contact" 
              className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-md font-medium transition-colors"
            >
              Get Started
            </a>
            <a 
              href="#portfolio" 
              className="border border-border hover:border-primary hover:text-primary px-8 py-3 rounded-md font-medium transition-colors"
            >
              View Our Work
            </a>
          </motion.div>
          
          <motion.div 
            className="mt-16 flex items-center justify-center gap-8 flex-wrap"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.7 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <p className="text-sm text-muted-foreground font-medium">Trusted by innovative companies</p>
            <div className="flex flex-wrap justify-center gap-8">
              {['Google', 'Microsoft', 'Airbnb', 'Spotify', 'Slack'].map((company) => (
                <span key={company} className="text-muted-foreground/70 font-semibold">
                  {company}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Gradient blob */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary/20 rounded-full filter blur-3xl opacity-50"></div>
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-purple-500/20 rounded-full filter blur-3xl opacity-50"></div>
    </section>
  );
};

export default HeroSection;