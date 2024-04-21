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
    className={"transition hover:scale-110 m-2"}
    href={social.link}
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className="w-10"
    >
      <path d={social.icon} />
    </svg>
  </Link>
  );
};

export default Socials;
