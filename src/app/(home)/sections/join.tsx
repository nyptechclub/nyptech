import Link from "next/link";

export default function JoinSection(props: { className?: string }) {
	return (
		<section className={`grid place-items-center ${props.className}`}>
			<div className={"text-center"}>
				<h1 className={"text-5xl font-bold"}>What are you waiting for?</h1>
				<p className={"mt-4 text-xl"}>
					Join us now and be part of our community!
				</p>
				<Link className={"mt-6 btn btn-primary"} href={"#"}>
					Join us now!
				</Link>
			</div>
		</section>
	);
}