export default function PeopleSection() {
  return (
    <section className={"hero min-h-full py-12 max-md:mt-24"}>
      <div className={"hero-content"}>
        <div className={"flex items-center gap-8 max-md:flex-col-reverse max-md:text-center"}>
          <div className={"flex-1"}>
            <div className={"mb-4 text-4xl max-md:text-2xl font-bold"}>Join our wonderful community!</div>
            <div className={"text-lg max-md:text-md"}>
              Are you a person that wants to build? Or how about starting a tech startup? Or maybe you are just
              interested in this landscape? Well, you are in the right place!
            </div>
          </div>
          <div className={"max-w-xl overflow-hidden rounded-md"}>
            <img className={"aspect-video object-cover"} src={"/assets/blog/nyplink-committee.jpg"} alt={"People"} />
          </div>
        </div>
      </div>
    </section>
  );
}