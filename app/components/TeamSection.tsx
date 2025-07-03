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
    name: 'Alex Johnson',
    role: 'Full Stack Developer',
    bio: 'Experienced developer with expertise in React, Node.js, and cloud infrastructure. Passionate about creating scalable and performant web applications.',
    image: '/team-member-1.svg',
    social: {
      twitter: '#',
      linkedin: '#',
      github: '#',
    },
  },
  {
    id: 2,
    name: 'Sarah Chen',
    role: 'UI/UX Designer',
    bio: 'Creative designer focused on crafting intuitive user experiences and beautiful interfaces. Combines aesthetics with functionality to create engaging designs.',
    image: '/team-member-2.svg',
    social: {
      twitter: '#',
      linkedin: '#',
      github: '#',
    },
  },
  {
    id: 3,
    name: 'Michael Rodriguez',
    role: 'Mobile Developer',
    bio: 'Specialized in native and cross-platform mobile development. Builds high-performance apps with a focus on user experience and technical excellence.',
    image: '/team-member-3.svg',
    social: {
      twitter: '#',
      linkedin: '#',
      github: '#',
    },
  },
  {
    id: 4,
    name: 'Emily Taylor',
    role: 'Project Manager',
    bio: 'Experienced in managing complex development projects from concept to completion. Ensures timely delivery and effective communication throughout the process.',
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
    <section id="team" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Team</h2>
          <p className="text-muted-foreground text-lg">
            We're a lean, driven team of self-taught developers who've turned our passion into purpose. 
            While we're fresh to the freelance world, we bring energy, creativity, and a commitment to excellence in everything we do.
          </p>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {team.map((member) => (
            <motion.div
              key={member.id}
              className="bg-card rounded-lg overflow-hidden border border-border hover:border-primary/20 transition-all duration-300 hover:shadow-lg group"
              variants={itemVariants}
            >
              <div className="relative h-64 w-full overflow-hidden bg-gradient-to-br from-primary/5 to-purple-500/5">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1 group-hover:text-primary transition-colors">
                  {member.name}
                </h3>
                <p className="text-primary/80 text-sm mb-4">{member.role}</p>
                <p className="text-muted-foreground text-sm mb-6">{member.bio}</p>
                <div className="flex space-x-4">
                  {member.social.twitter && (
                    <a
                      href={member.social.twitter}
                      className="text-muted-foreground hover:text-primary transition-colors"
                      aria-label={`${member.name}'s Twitter`}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-5 w-5"
                      >
                        <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                      </svg>
                    </a>
                  )}
                  {member.social.linkedin && (
                    <a
                      href={member.social.linkedin}
                      className="text-muted-foreground hover:text-primary transition-colors"
                      aria-label={`${member.name}'s LinkedIn`}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-5 w-5"
                      >
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                        <rect x="2" y="9" width="4" height="12" />
                        <circle cx="4" cy="4" r="2" />
                      </svg>
                    </a>
                  )}
                  {member.social.github && (
                    <a
                      href={member.social.github}
                      className="text-muted-foreground hover:text-primary transition-colors"
                      aria-label={`${member.name}'s GitHub`}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-5 w-5"
                      >
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