export default function OpportunitiesSection() {
  return (
    <section className={"hero min-h-full py-12 max-md:mt-24"}>
      <div className={"hero-content"}>
        <div className={"flex items-center gap-16 max-md:gap-8 max-md:flex-col max-md:text-center"}>
          <div className={"max-w-xl overflow-hidden rounded-md"}>
            <img className={"aspect-video object-cover"} src={"/assets/blog/group.jpg"} alt={"Opportunities"} />
          </div>
          <div className={"flex-1"}>
            <div className={"mb-4 text-4xl max-md:text-2xl font-bold"}>Obtain rare opportunities!</div>
            <div className={"text-lg max-md:text-md"}>
              You can take hold of opportunities like meeting entrepreneurs and successful alumni! As well as attending
              events, such as the Singapore FinTech Festival, and workshops and events hosted by large local companies
              in Singapore. These experiences can provide invaluable insights and networking possibilities that can
              significantly enhance your portfolio!
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}