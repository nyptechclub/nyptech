export default function PeopleSection() {
  return (
    <section className={"hero min-h-full py-12"}>
      <div className={"hero-content"}>
        <div className={"flex items-center gap-8 max-md:flex-col-reverse max-md:text-center"}>
          <div className={"flex-1"}>
            <h2 className={"mb-4 text-4xl font-bold"}>Join our wonderful community!</h2>
            <p className={"text-lg"}>
              Are you a person that wants to build? Or how about starting a tech startup? Or maybe you are just
              interested in this landscape? Well, you are in the right place!
            </p>
          </div>
          <div className={"max-w-xl overflow-hidden rounded-md"}>
            <img src={"/assets/blog/nyplink-committee.jpg"} alt={"People"} className={"h-auto w-full"} />
          </div>
        </div>
      </div>
    </section>
  );
}