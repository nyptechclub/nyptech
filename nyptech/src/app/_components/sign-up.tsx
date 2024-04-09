import { Button } from "@/components/ui/button";
import Link from "next/link";

const SignUp = () => {
	return (
		<section className="text-center">
			<div className="mb-2 text-3xl font-bold sm:text-4xl md:text-5xl">Get to know us better!</div>
			<div className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
				Sign up for our newsletter and get the latest updates on our events and
				activities!
			</div>
			<Button className="mt-4" variant={"outline"} asChild>
				{/* TODO: Add link here. */}
				<Link href={""}>Sign up now!</Link>
			</Button>
			{/* <button className="mt-4 btn btn-primary" type="button">
				Sign up now!
			</button> */}
		</section>
	);
};

export default SignUp;