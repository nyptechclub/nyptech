import Link from "next/link";

export default function MainServiceSection() {
  return (
    <section>
      <h1 className={"mb-3 text-xl font-bold"}>Main APIs</h1>
      <div className={"mb-2"}>
        <div className={"mockup-code"}>
          <pre className={"text-success"}>
            <code>GET /api/activities</code>
          </pre>
        </div>
      </div>
      <div className={"mb-2"}>
        <div className={"mockup-code"}>
          <pre className={"text-success"}>
            <code>GET /api/excos</code>
          </pre>
        </div>
      </div>
      <div className={"mb-2"}>
        <div className={"mockup-code"}>
          <pre className={"text-success"}>
            <code>GET /api/hero</code>
          </pre>
        </div>
      </div>
      <div className={"mb-2"}>
        <div className={"mockup-code"}>
          <pre className={"text-success"}>
            <code>GET /api/projects</code>
          </pre>
        </div>
      </div>
      <div className={"mb-2"}>
        <div className={"mockup-code"}>
          <pre className={"text-success"}>
            <code>GET /api/socials</code>
          </pre>
        </div>
      </div>
      <Link
        className={"w-full btn btn-accent"}
        target={"_blank"}
        href={
          "https://www.postman.com/dentolos19/workspace/tes-apis/collection/21462178-36ccbd95-6b6f-4535-9c73-1b324cd0f845?action=share&creator=21462178"
        }
      >
        View in Postman
      </Link>
    </section>
  );
}