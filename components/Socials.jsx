'use client';

import {
  RiInstagramFill,
  RiFacebookFill,
  RiLinkedinFill,
  RiGithubFill,
  RiTwitterXFill,
} from 'react-icons/ri';

import Link from 'next/link';

// icons
const icons = [
  {
    path: '/',
    name: <RiInstagramFill />,
  },
  {
    path: '/',
    name: <RiFacebookFill />,
  },
  {
    path: '/',
    name: <RiLinkedinFill />,
  },
  {
    path: '/',
    name: <RiGithubFill />,
  },
  {
    path: '/',
    name: <RiTwitterXFill />,
  },
];

const Socials = ({ containerStyles, iconsStyles }) => {
  return (
    <div className={`${containerStyles}`}>
      {icons.map((icon, index) => {
        return (
          <Link href={icon.path} key={index}>
            <div className={`${iconsStyles}`}>{icon.name}</div>
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
