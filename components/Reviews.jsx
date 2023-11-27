'use client';

import Image from 'next/image';

import { Card, CardDescription, CardHeader, CardTitle } from './ui/card';

// import swiper react components
import { Swiper, SwiperSlide } from 'swiper/react';

// import swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';

const reviewsData = [
  {
    avatar: '/reviews/avatar-1.png',
    name: 'Alice Rodriguez',
    job: 'Teacher',
    reviews: 'Thanks to Trafalgar, my classroom website is now interactive and engaging.',
  },
  {
    avatar: '/reviews/avatar-2.png',
    name: 'David Patel',
    job: 'Fitness Instructor',
    reviews:
      'Working with Tra elevated my fitness business online. The website they created is not only visually appealing but also functional.',
  },
  {
    avatar: '/reviews/avatar-3.png',
    name: 'Grace Mitchell',
    job: 'Event Planner',
    reviews:
      'I needed a website that reflected the creativity of my event planning business, and Trafalgar Law delivered.',
  },
  {
    avatar: '/reviews/avatar-4.png',
    name: 'Mike Thompson',
    job: 'Graphic Designer',
    reviews:
      'I approached Trafalgar to revamp my small business website, and the results are fantastic.',
  },
  {
    avatar: '/reviews/avatar-5.png',
    name: 'Elena Rodriguez',
    job: 'Chef',
    reviews:
      'Collaborating with Trafalgar on my portfolio website was a breeze, the site showcases my work beautifully.',
  },
  {
    avatar: '/reviews/avatar-6.png',
    name: 'Daniel Kim',
    job: 'Writer',
    reviews:
      'I needed a personal website to showcase my writing portfolio, and Trafalgar exceeded my expectations.',
  },
];

const Reviews = () => {
  return (
    <section>
      <div className='container mx-auto'>
        <h2 className='section-title mb-12 text-center mx-auto'>Reviews</h2>
        {/* slider */}
        <Swiper
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1400: { slidesPerView: 3 },
          }}
          spaceBetween={30}
          modules={[Pagination]}
          pagination={{
            clickable: true,
          }}
          className='h-[350px]'
        >
          {reviewsData.map((person, index) => {
            return (
              <SwiperSlide key={index}>
                <Card className='bg-tertiary dark:bg-secondary/40 p-8 min-h-[300px]'>
                  <CardHeader className='p-0 mb-10'>
                    <div className='flex items-center gap-x-4'>
                      {/* image */}
                      <Image src={person.avatar} width={70} height={70} alt='' priority />
                      {/* name */}
                      <div className='flex flex-col'>
                        <CardTitle>{person.name}</CardTitle>
                        <p>{person.job}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardDescription className='text-lg text-muted-foreground'>
                    {person.reviews}
                  </CardDescription>
                </Card>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default Reviews;
