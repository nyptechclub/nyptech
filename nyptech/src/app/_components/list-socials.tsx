import Link from 'next/link';
import React from 'react';
interface SocialsProps {
social: {
    link: string;
    icon: string;
}
}

const Socials: React.FC<SocialsProps> = ({ 
social
 }) => {
  return (
    <Link
    className={"transition hover:scale-110"}
    href={social.link}
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      className="w-10 rounded-full"
    >
      <path d={social.icon} />
    </svg>
  </Link>
  );
};

export default Socials;
