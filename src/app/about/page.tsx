import ProfileCard from "@/app/about/components/profile-card";
import data from "@/data/excos.json";

export default function Page() {
  return (
    <main className={"h-full"}>
      <section className={"h-full hero"}>
        <div className={"hero-content"}>
          <div className={"max-w-lg text-center"}>
            <h1 className={"mb-5 text-5xl font-bold"}>Meet the people</h1>
            <p>
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In
              deleniti eaque aut repudiandae et a id nisi.
            </p>
          </div>
        </div>
      </section>
      <section className={"h-full"}>
        <div className={"mx-auto max-w-[90%] grid grid-cols-4 gap-8"}>
          {data.map((item, index) => (
            <ProfileCard
              key={index}
              name={item.name}
              role={item.subheading}
              description={item.description}
              src={item.imageSrc}
            />
          ))}
        </div>
      </section>
    </main>
  );
}