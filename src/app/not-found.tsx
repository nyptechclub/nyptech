import Link from "next/link";

export default function NotFound() {
  return (
    <main className={"h-full grid place-items-center"}>
      <div className={"text-center"}>
        <h1 className={"text-4xl font-bold"}>404</h1>
        <p className={"mt-2 text-xl text-gray-500"}>The page that you are looking for does not exist!</p>
        <Link href={"/"} className="btn btn-primary m-5">
        Home</Link>
      </div>
    </main>
  );
}