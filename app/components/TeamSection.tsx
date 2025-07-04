'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

interface TeamMember {
  id: number;
  name: string;
  role: string;
  bio: string;
  image: string;
  social: {
    twitter?: string;
    linkedin?: string;
    github?: string;
  };
}

const team: TeamMember[] = [
  {
    id: 1,
    name: 'Shriram Tiwari',
    role: '',
    bio: 'Experienced developer with expertise in React, Node.js, and cloud infrastructure.',
    image: '/team-member-1.svg',
    social: {
      twitter: 'https://x.com/Shriramt124',
      linkedin: 'https://www.linkedin.com/in/shriramt124/',
      github: 'https://github.com/shriramt124',
    },
  },
  {
    id: 2,
    name: 'Tushar Gour',
    role: '',
    bio: 'Creative designer focused on crafting intuitive user experiences and beautiful interfaces',
    image: '/team-member-2.svg',
    social: {
      twitter: '#',
      linkedin: '#',
      github: '#',
    },
  },
  {
    id: 3,
    name: 'Gouri Sharma',
    role: '',
    bio: 'Specialized in native and cross-platform mobile development with focus on performance.',
    image: '/team-member-3.svg',
    social: {
      twitter: '#',
      linkedin: '#',
      github: '#',
    },
  },
  {
    id: 4,
    name: 'Shrishti Namdeo',
    role: '',
    bio: 'Experienced in managing complex development projects from concept to completion.',
    image: '/team-member-4.svg',
    social: {
      twitter: '#',
      linkedin: '#',
      github: '#',
    },
  },
];

const TeamSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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
    <section id="team" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Team</h2>
          <p className="text-muted-foreground text-lg">
            We're a lean, driven team of self-taught developers who've turned our passion into purpose. 
            While we're fresh to the freelance world, we bring energy, creativity, and a commitment to excellence.
          </p>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {team.map((member) => (
            <motion.div
              key={member.id}
              className="bg-card rounded-lg border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-lg group p-6"
              variants={itemVariants}
            >
              <div className="flex flex-col items-center text-center">
                <div className="relative w-20 h-20 mb-4 rounded-full overflow-hidden bg-gradient-to-br from-primary/10 to-purple-500/10 flex items-center justify-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-purple-500/20 rounded-full flex items-center justify-center">
                    <svg className="w-8 h-8 text-primary/60" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                    </svg>
                  </div>
                </div>

                <h3 className="text-lg font-semibold mb-1 group-hover:text-primary transition-colors">
                  {member.name}
                </h3>
                <p className="text-primary/80 text-sm mb-3 font-medium">{member.role}</p>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{member.bio}</p>

                <div className="flex space-x-3 mt-auto">
                  {member.social.twitter && (
                    <a
                      href={member.social.twitter}
                      className="text-muted-foreground hover:text-primary transition-colors p-2 hover:bg-primary/10 rounded-full"
                      aria-label={`${member.name}'s Twitter`}
                    >
                      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                      </svg>
                    </a>
                  )}
                  {member.social.linkedin && (
                    <a
                      href={member.social.linkedin}
                      className="text-muted-foreground hover:text-primary transition-colors p-2 hover:bg-primary/10 rounded-full"
                      aria-label={`${member.name}'s LinkedIn`}
                    >
                      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                        <rect x="2" y="9" width="4" height="12" />
                        <circle cx="4" cy="4" r="2" />
                      </svg>
                    </a>
                  )}
                  {member.social.github && (
                    <a
                      href={member.social.github}
                      className="text-muted-foreground hover:text-primary transition-colors p-2 hover:bg-primary/10 rounded-full"
                      aria-label={`${member.name}'s GitHub`}
                    >
                      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-16 text-center">
          <a
            href="#contact"
            className="inline-flex items-center text-primary hover:text-primary/80 font-medium"
          >
            <span>Join our team</span>
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

export default TeamSection;