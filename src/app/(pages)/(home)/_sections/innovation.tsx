export default function InnovationSection(props: { className?: string }) {
  return (
    <section className={props.className}>
      <div className={"mb-16 text-center"}>
        <h2 className={"text-4xl font-bold"}>Faster Iteration, More Innovation</h2>
        <p className={"mt-4 text-lg"}>
          Empowering breakthrough ideas by streamlining iterations and driving continuous innovation.
        </p>
      </div>
      <div className={"container mx-auto grid grid-cols-3 gap-8"}>
        <div className={"card bg-base-300"}>
          <figure>
            <img className={"h-60 object-cover"} src={"/assets/blog/workshop.jpeg"} about={"Workshop"} />
          </figure>
          <div className={"card-body"}>
            <h2 className={"card-title text-xl"}>Learn From Workshops</h2>
            <p className={"text-current/80"}>
              We have a list of upcoming workshops catered just for you to learn more about what it takes to start a
              SaaS.
            </p>
          </div>
        </div>
        <div className={"card bg-base-300"}>
          <figure>
            <img className={"h-60 object-cover"} src={"/assets/blog/hackathon.jpeg"} about={"Hackathon"} />
          </figure>
          <div className={"card-body"}>
            <h2 className={"card-title text-xl"}>Join The Community</h2>
            <p className={"text-current/80"}>
              Join a group of like minded people to brainstorm, develop and maintain code, get a chance to work with
              real-world clients.
            </p>
          </div>
        </div>
        <div className={"card bg-base-300"}>
          <figure>
            <img className={"h-60 object-cover"} src={"/assets/blog/group.jpg"} about={"Group"} />
          </figure>
          <div className={"card-body"}>
            <h2 className={"card-title text-xl"}>Access Capital</h2>
            <p className={"text-current/80"}>
              We aim to provide you with grands and funding opportunities as well as advise on how to better pursue
              them.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}