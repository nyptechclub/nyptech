import Link from "next/link";
import socials from "./socials.json"; // Assuming socials.json contains the social media links

const SignUp = () => {
  return (
    <section className="py-8 w-fit flex flex-col items-center text-center">
      <div className="mb-2 text-3xl font-bold sm:text-4xl md:text-5xl">
        Get to know us better!
      </div>
      <div className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
        Sign up for our newsletter and get the latest updates on our events and
        activities!
      </div>
      <div className="mt-2 flex gap-1">
        {socials.map((social, index) => (
          <Link
            key={index}
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
        ))}
      </div>
      <button className="mt-4 btn btn-glow" type="button">
        Sign up now!
      </button>
    </section>
  );
};

export default SignUp;