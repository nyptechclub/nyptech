import Link from "next/link";
import socials from "@/app/Json/socials.json"; 
import Socials from "@/app/_components/list-socials";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "lucide-react";

const SignUp = () => {
  return (
    <section className="py-8 w-fit flex flex-col items-center text-center">
      <div className="mb-2 text-3xl font-bold sm:text-4xl md:text-5xl">
        Get to know us better!
      </div>
      <div className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
        View our latest updates!
      </div>
      <div className="mt-2 flex gap-1 text-accent">
        {socials.map((social, index) => (
          <Socials key={index} social={social}/>
        ))}
      </div>
      <Button variant="expandIcon" Icon={ArrowRightIcon} iconPlacement="right" className="btn mt-4">
      <Link href="/show">
        See More
      </Link>
      </Button>
      
    </section>
  );
};

export default SignUp;