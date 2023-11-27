'use client';
import Link from 'next/link';
import { Button } from './ui/button';

// import swiper react components
import { Swiper, SwiperSlide } from 'swiper/react';

// import swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';

// component
import ProjectCard from './ProjectCard';

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

const Work = () => {
  return (
    <section className='relative mb-12 xl:mb-48'>
      <div className='container mx-auto'>
        {/* text */}
        <div className='max-w-[400px] mx-auto xl:mx-0 text-center xl:text-left mb-12 xl:h-[400px] flex flex-col justify-center items-center xl:items-start'>
          <h2 className='section-title mb-4'>Latest Projects</h2>
          <p className='subtitle mb-8'>
            Here are some recent projects that my team and I have completed, if you are interested
            please click the button below.
          </p>
          <Link href='/projects'>
            <Button>All projects</Button>
          </Link>
        </div>
        {/* slider */}
        <div className='xl:max-w-[1000px] xl:absolute right-0 top-0 '>
          <Swiper
            className='h-[480px] '
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
            }}
            spaceBetween={30}
            modules={[Pagination]}
            pagination={{ clickable: true }}
          >
            {/* show only the first 4 projects for the slides */}
            {projectData.slice(0, 4).map((project, index) => {
              return (
                <SwiperSlide key={index}>
                  <ProjectCard project={project} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Work;
