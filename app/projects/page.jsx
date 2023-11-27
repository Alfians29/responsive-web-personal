'use client';

import React, { useState } from 'react';
import { Tabs, TabsList, TabsContent, TabsTrigger } from '@/components/ui/tabs';
import ProjectCard from '@/components/ProjectCard';

const projectData = [
  {
    image: '/work/1.png',
    category: 'vue js',
    name: 'QuantumVista.com',
    description: 'Unlocking the Quantum World: Where Vision Meets the Future.',
    link: '/',
    github: '/',
  },
  {
    image: '/work/2.png',
    category: 'next js',
    name: 'LunaHarbor.org',
    description: 'Dock into Discovery: Navigating the Seas of Lunar Knowledge.',
    link: '/',
    github: '/',
  },
  {
    image: '/work/3.png',
    category: 'angular js',
    name: 'VelvetPenguin.net',
    description: 'Soft Elegance, Cozy Charm: Velvet Creations for Penguin Lovers.',
    link: '/',
    github: '/',
  },
  {
    image: '/work/4.png',
    category: 'react js',
    name: 'PixelPioneer.io',
    description: 'Forge Your Digital Frontier: Pixel Art Adventure Awaits.',
    link: '/',
    github: '/',
  },
  {
    image: '/work/5.png',
    category: 'angular js',
    name: 'ZenithMingle.com',
    description: 'Serene Connections, Mindful Conversations: Where Zenith Meets Community.',
    link: '/',
    github: '/',
  },
  {
    image: '/work/6.png',
    category: 'vue js',
    name: 'EmberEchoes.net',
    description: 'Ignite Imagination: Tales and Tidings from the Embered Realm.',
    link: '/',
    github: '/',
  },
  {
    image: '/work/7.png',
    category: 'react js',
    name: 'NebulaNectar.org',
    description: 'Sip from the Cosmic Cup: A Universe of Knowledge in Every Drop.',
    link: '/',
    github: '/',
  },
  {
    image: '/work/8.png',
    category: 'next js',
    name: 'StellarStratos.com',
    description: 'Beyond the Stars: Gaming Excellence in the Stellar Stratosphere.',
    link: '/',
    github: '/',
  },
  {
    image: '/work/9.png',
    category: 'react js',
    name: 'AuroraAlchemy.io',
    description: 'Illuminate Your Path: Empowering Journeys of Self-Discovery.',
    link: '/',
    github: '/',
  },
];

// remove category duplicate
const uniqueCategory = ['all projects', ...new Set(projectData.map((item) => item.category))];

const Projects = () => {
  const [categies, setCategories] = useState(uniqueCategory);
  const [category, setCategory] = useState('all projects');

  const filteredProjects = projectData.filter((project) => {
    // if category is 'all projects' return all projects, else filter by category
    return category === 'all projects' ? project : project.category === category;
  });

  return (
    <section className='min-h-screen pt-12'>
      <div className='container mx-auto'>
        <h2 className='section-title mb-8 xl:mb-16 text-center mx-auto'>My Projects</h2>
        {/* tabs */}
        <Tabs defaultValue={category} className='mb-24 xl:mb-48'>
          <TabsList className='w-full grid h-full md:grid-cols-5 lg:max-w-[640px] mb-12 mx-auto md:border dark:border-none'>
            {categies.map((category, index) => {
              return (
                <TabsTrigger
                  onClick={() => setCategory(category)}
                  value={category}
                  key={index}
                  className='capitalize w-[162px] md:w-auto'
                >
                  {category}
                </TabsTrigger>
              );
            })}
          </TabsList>
          {/* tabs content */}
          <div className='text-lg xl:mt-8 grid grid-cols-1 lg:grid-cols-3 gap-4'>
            {filteredProjects.map((project, index) => {
              return (
                <TabsContent value={category} key={index}>
                  <ProjectCard project={project} />
                </TabsContent>
              );
            })}
          </div>
        </Tabs>
      </div>
    </section>
  );
};

export default Projects;
