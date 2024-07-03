import Link from "next/link";

export default function Page() {
  return (
    <main className={"h-full grid place-items-center"}>
      <div className="flex flex-col">
      <h1 className="font-bold text-3xl">
        Installation
      </h1>
      <div className="flex flex-wrap m-5 gap-5">
      <Link href="https://vercel.com/new/clone?repository-url=https://github.com/nyp-tech/nyp-tech/tree/main/spline-example&demo-title=SampleNYPTECH&demo-description=Deploy-Sample-App-NYPTECH" className="btn">Spline</Link>
                <Link href="https://vercel.com/new/clone?repository-url=https://github.com/nyp-tech/nyp-tech/tree/main/flask-npx&demo-title=Flask%20Hello%20World&demo-description=Use%20Python%20on%20Vercel%20with%20Serverless%20Functions%20using%20the%20Python%20Runtime.&demo-url=https://python-hello-world.vercel.app/&demo-image=https://assets.vercel.com/image/upload/v1669994600/random/python.png" className="btn">Flask</Link>
                <Link href="https://vercel.com/new/clone?repository-url=https://github.com/nyp-tech/nyp-tech/tree/main/pnpm&demo-title=SampleNYPTECH&demo-description=Deploy-Sample-App-NYPTECH" className="btn">PNPM</Link>
                <Link href="https://vercel.com/new/clone?repository-url=https://github.com/nyp-tech/nyp-tech/tree/main/npx-example&demo-title=SampleNYPTECH&demo-description=Deploy-Sample-App-NYPTECH" className="btn">NPX</Link>
      </div>
      </div>
    </main>
  );
}