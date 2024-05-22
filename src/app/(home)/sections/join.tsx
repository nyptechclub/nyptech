import Link from "next/link";

export default function JoinSection(props: { className?: string }) {
	return (
		<section className={`px-6 grid place-items-center ${props.className}`}>
			<div className={"text-center"}>
				<h1 className={"text-5xl font-bold max-lg:text-3xl"}>What are you waiting for?</h1>
				<p className={"mt-4 text-xl max-lg:text-md"}>
					Join us now and be part of our community!
				</p>
				<Link className={"mt-6 btn btn-primary"} href={"https://nyptech-go.vercel.app/interest"}>
					Join us now!
				</Link>
			</div>
		</section>
	);
}