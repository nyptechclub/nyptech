export default function PromotionSection() {
  return (
    <section className={"hero min-h-[80%] py-12 max-md:mt-24"}>
      <div className={"hero-content"}>
        <div className={"flex items-center gap-8 max-md:flex-col-reverse max-md:text-center"}>
          <div className={"flex-1"}>
            <div className={"mb-4 text-4xl font-bold max-md:text-2xl"}>Technology and entrepreneurship!</div>
            <div className={"max-md:text-md text-lg"}>
              Our mission is to promote entrepreneurship with technology. We believe that technology is the future and
              we want to help you build it. We are a community of like-minded individuals who are passionate about
              technology.
            </div>
          </div>
          <div className={"max-w-xl overflow-hidden rounded-md"}>
            <img className={"aspect-video object-cover"} src={"/assets/solve.jpg"} alt={"People"} />
          </div>
        </div>
      </div>
    </section>
  );
}