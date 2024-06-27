import Link from "next/link";
import { FaEnvelope, FaKey } from "react-icons/fa";

export default function Page() {
  return (
    <main className={"h-full hero"}>
      <div className={"hero-content"}>
        <form className={"p-12 bg-base-200 rounded-box shadow-xl"}>
          <h1 className={"mb-6 text-center text-4xl font-bold"}>Login</h1>
          <div className={"space-y-2"}>
            <label className="input input-bordered flex items-center gap-2">
              <FaEnvelope size={16} />
              <input type={"text"} className={"grow"} placeholder={"Email"} />
            </label>
            <label className="input input-bordered flex items-center gap-2">
              <FaKey size={16} />
              <input type={"password"} className={"grow"} placeholder={"Password"} />
            </label>
          </div>
          <div className={"mt-1 text-right"}>
            <Link className={"text-xs"} href={"#"}>
              Forget password?
            </Link>
          </div>
          <div className={"mt-4 grid grid-cols-2 gap-2"}>
            <button className={"btn btn-primary w-full"} type={"submit"}>
              Login
            </button>
            <button className={"btn btn-secondary w-full"} type={"button"}>
              Register
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}