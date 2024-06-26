export default function Page() {
  return (
    <main className={"p-4"}>
      <section className={"mb-4"}>
        <h1 className={"mb-3 text-xl font-bold"}>Main API</h1>
        <div className={"mb-2"}>
          <div className={"mockup-code"}>
            <pre>
              <code>GET /api/activities</code>
            </pre>
          </div>
        </div>
        <div className={"mb-2"}>
          <div className={"mockup-code"}>
            <pre>
              <code>GET /api/excos</code>
            </pre>
          </div>
        </div>
        <div className={"mb-2"}>
          <div className={"mockup-code"}>
            <pre>
              <code>GET /api/hero</code>
            </pre>
          </div>
        </div>
        <div className={"mb-2"}>
          <div className={"mockup-code"}>
            <pre>
              <code>GET /api/projects</code>
            </pre>
          </div>
        </div>
        <div className={"mb-2"}>
          <div className={"mockup-code"}>
            <pre>
              <code>GET /api/socials</code>
            </pre>
          </div>
        </div>
      </section>
      <section>
        <h1 className={"mb-3 text-xl font-bold"}>Go Microservice</h1>
        <div className={"mb-2"}>
          <div className={"mockup-code"}>
            <pre>
              <code>GET /api/set</code>
            </pre>
          </div>
        </div>
        <div className={"mb-2"}>
          <div className={"mockup-code"}>
            <pre>
              <code>GET /api/get</code>
            </pre>
          </div>
        </div>
        <div className={"mb-2"}>
          <div className={"mockup-code"}>
            <pre>
              <code>GET /api/get-all</code>
            </pre>
          </div>
        </div>
        <div className={"mb-2"}>
          <div className={"mockup-code"}>
            <pre>
              <code>GET /api/delete</code>
            </pre>
          </div>
        </div>
      </section>
    </main>
  );
}