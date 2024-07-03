import Link from "next/link";

export default function GoServiceSection() {
  return (
    <section>
      <h1 className={"mb-3 text-xl font-bold"}>Go Microservice APIs</h1>
      <div className={"mb-2"}>
        <div className={"mockup-code"}>
          <pre className={"text-info"}>
            <code>POST /api/set</code>
          </pre>
        </div>
      </div>
      <div className={"mb-2"}>
        <div className={"mockup-code"}>
          <pre className={"text-success"}>
            <code>GET /api/get</code>
          </pre>
        </div>
      </div>
      <div className={"mb-2"}>
        <div className={"mockup-code"}>
          <pre className={"text-success"}>
            <code>GET /api/get-all</code>
          </pre>
        </div>
      </div>
      <div className={"mb-2"}>
        <div className={"mockup-code"}>
          <pre className={"text-error"}>
            <code>DELETE /api/delete</code>
          </pre>
        </div>
      </div>
      <Link
        className={"w-full btn btn-accent"}
        target={"_blank"}
        href={
          "https://www.postman.com/dentolos19/workspace/tes-apis/collection/21462178-fadb0410-3f41-4de3-ac1f-97f34546ece1?action=share&creator=21462178"
        }
      >
        View in Postman
      </Link>
    </section>
  );
}