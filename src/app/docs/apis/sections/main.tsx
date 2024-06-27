export default function MainSection() {
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
    </section>
  );
}