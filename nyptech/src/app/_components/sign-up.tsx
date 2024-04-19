import Link from "next/link";
import socials from "@/app/Json/socials.json"; // Assuming socials.json contains the social media links
import Socials from "@/app/_components/list-socials";

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
          <Socials key={index} social={social}/>
        ))}
      </div>
      <button className="mt-4 btn btn-glow" type="button">
        Sign up now!
      </button>
    </section>
  );
};

export default SignUp;