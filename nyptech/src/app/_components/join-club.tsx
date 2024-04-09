const Join = () => {
	return (
		<section className="py-8 text-center">
			<div className="mb-2 text-3xl font-bold sm:text-4xl md:text-5xl">
				What are you waiting for?
			</div>
			<div className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
				Join us now and be part of our community! Exclusively for NYP SIT
				students!
			</div>
			{/* <Button className="mt-4" variant={"outline"} asChild>
				<Link href={""}>Join us now!</Link>
			</Button> */}
			<button className="mt-4 btn" type="button">
				Join us now!
			</button>
		</section>
	);
};

export default Join;