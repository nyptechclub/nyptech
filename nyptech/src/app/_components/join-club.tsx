// Dennise's

import { Button } from "@/components/ui/button";
import Link from "next/link";

const Join = () => {
	return (
		<div className="text-center">
			<div className="mb-2 text-3xl font-bold sm:text-4xl md:text-5xl">
				What are you waiting for?
			</div>
			<div className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
				Join us now and be part of our community! Exclusively for NYP SIT
				students!
			</div>
			<Button className="mt-4" variant={"outline"} asChild>
				{/* TODO: Add link here */}
				<Link href={""}>Join us now!</Link>
			</Button>
			{/* <button className="mt-4 btn btn-primary" type="button">
				Join us now!
			</button> */}
		</div>
	);
};

export default Join;