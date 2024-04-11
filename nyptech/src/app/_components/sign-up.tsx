import socials from './socials.json'; // Assuming socials.json contains the social media links
import React from 'react';

const SignUp = () => {
	return (
		<section className="w-full py-8 text-center">
			<div className="mb-2 text-3xl font-bold sm:text-4xl md:text-5xl">Get to know us better!</div>
			<div className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
				Sign up for our newsletter and get the latest updates on our events and
				activities!
			</div>
			<div className="items-center text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed join">
      {socials.map((social, index) => (
        <a key={index} className="avatar w-10 h-10 rounded-full" href={social.link}>
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-10 rounded-full">
		  <path d={social.icon} />
		</svg>
	  </a>
	      ))}
    </div><br>
	</br>
			<button className="mt-4 btn btn-glow" type="button">
				Sign up now!
			</button>
		</section>
	);
};

export default SignUp;