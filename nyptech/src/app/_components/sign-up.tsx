import Link from "next/link";
import socials from "@/app/Json/socials.json"; 
import Socials from "@/app/_components/list-socials";

const SignUp = () => {
  return (
    <section className="py-8 w-fit flex flex-col items-center text-center">
      <div className="mb-2 text-3xl font-bold sm:text-4xl md:text-5xl">
        Get to know us better!
      </div>
      <div className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
        View our latest updates!
      </div>
      <div className="mt-2 flex gap-1">
        {socials.map((social, index) => (
          <Socials key={index} social={social}/>
        ))}
      </div>
      <Link href="/show" className="mt-4 btn btn-glow" type="button">
        See More
      </Link>
    </section>
  );
};

export default SignUp;