export default function InnovationSection(props: { className?: string }) {
	return (
		<section
			className={`px-24 grid grid-cols-2 gap-12 place-items-center ${props.className}`}
		>
			<div>
				<video autoPlay muted loop>
					<source src={"/assets/innovation.mp4"} />
				</video>
			</div>
			<div>
				<h1 className={"text-5xl font-bold"}>
					Faster iteration.
					<br />
					More innovation.
				</h1>
				<p className={"pt-4 text-xl text-gray-500"}>
					We aim to bring you the best opportunity to learn grow and prosper
					within the tech landscape. We hope to bring out the innovators within
					you!
				</p>
			</div>
		</section>
	);
}