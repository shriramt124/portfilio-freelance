'use client';

import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      {/* Background grid pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Hero Header */}
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
              <span className="relative inline-block">
                {/* Shadow layer for better visibility */}
                <span className="absolute inset-0 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 blur-[2px] opacity-70 transform translate-y-[2px]">Building Digital Solutions</span>
                {/* Main text layer */}
                <span className="relative bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-500 text-shadow">Building Digital Solutions</span>
              </span>{' '}
              <span className="text-foreground">with Purpose and Precision</span>
            </h1>
          </motion.div>
          
          <motion.p 
            className="text-xl text-muted-foreground mb-8 max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            We're not a big agency — and that's our strength. We're a lean, driven team of developers 
            who've turned our passion into purpose. While we're fresh to the freelance world, we come with 
            the hunger, creativity, and discipline that only self-taught builders and problem-solvers possess.
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
        </div>
        
        {/* Feature Cards */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.6,
            staggerChildren: 0.1,
            delayChildren: 0.5
          }}
        >
          {/* Who We Are Card */}
          <motion.div 
            className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6 shadow-sm hover:shadow-md transition-all"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex flex-col h-full">
              <div className="text-3xl mb-4">🚀</div>
              <h2 className="text-2xl font-bold mb-4">Who We Are</h2>
              <p className="text-muted-foreground flex-grow">
                We don't have decades of experience — but we do have the energy to outwork expectations, 
                the curiosity to keep learning, and the focus to deliver results that matter.
              </p>
            </div>
          </motion.div>

          {/* What Makes Us Different Card */}
          <motion.div 
            className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6 shadow-sm hover:shadow-md transition-all"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="flex flex-col h-full">
              <div className="text-3xl mb-4">💡</div>
              <h2 className="text-2xl font-bold mb-4">What Makes Us Different</h2>
              <ul className="text-muted-foreground space-y-2 flex-grow">
                <li><span className="font-semibold">We build with intent.</span> Every line of code we write is crafted with clarity and care.</li>
                <li><span className="font-semibold">We treat your project like our own.</span> Your vision becomes our mission.</li>
                <li><span className="font-semibold">We're agile and fast.</span> We adapt to your needs and iterate quickly.</li>
              </ul>
            </div>
          </motion.div>

          {/* Why Work With Us Card */}
          <motion.div 
            className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6 shadow-sm hover:shadow-md transition-all"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="flex flex-col h-full">
              <div className="text-3xl mb-4">🤝</div>
              <h2 className="text-2xl font-bold mb-4">Why Work With Us?</h2>
              <p className="text-muted-foreground flex-grow">
                We're looking for partnerships, for clients who believe in potential 
                and are open to discovering what fresh minds can bring to the table. If you give us a shot — we'll give it everything.
              </p>
              <p className="text-lg font-semibold text-primary mt-4">✉️ Let's Build Something Worth Remembering.</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Gradient blobs */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary/20 rounded-full filter blur-3xl opacity-50"></div>
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-purple-500/20 rounded-full filter blur-3xl opacity-50"></div>
    </section>
  );
};

export default HeroSection;