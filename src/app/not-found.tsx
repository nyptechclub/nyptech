import Link from "next/link";

export default function NotFoundPage() {
  return (
    <main className={"container grid place-items-center"}>
      <div className={"card max-w-2xl bg-base-300"}>
        <div className={"card-body items-center"}>
          <div className={"card-title"}>Oops! Page not found.</div>
          <div>The page that you are looking for does not exist!</div>
          <Link className={"btn btn-primary btn-sm mt-2"} href={"/"}>
            Go Home
          </Link>
        </div>
      </div>
    </main>
  );
}