import Link from "next/link";

const Join = () => {
	return (
		<section className="w-full container items-center gap-4 text-center">
			<div className="mb-2 text-3xl font-bold sm:text-4xl md:text-5xl">
				What are you waiting for?
			</div>
			<div className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
				Join us now and be part of our community! Exclusively for NYP SIT
				students!
			</div>
			<Link href="https://nyptech-go.vercel.app/interest" className="mt-4 btn btn-glow" type="button">
				Join us now!
			</Link>
		</section>
	);
};

export default Join;