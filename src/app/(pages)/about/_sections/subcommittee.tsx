import ProfileCard from "@/app/(pages)/about/_components/profile-card";
import subcommittee from "@/content/data/subcommittee.json";

export default function SubcommitteeSection() {
  return (
    <>
      <section className={"hero h-[80%]"}>
        <div className={"hero-content"}>
          <div className={"max-w-lg text-center"}>
            <div className={"mb-4 text-4xl font-bold"}>Meet the subcommittee</div>
            <div>
              Our subcommittee is made up of a diverse group of individuals who are dedicated to supporting the
              committee and the club as a whole. They are also passionate about technology and innovation.
            </div>
          </div>
        </div>
      </section>
      <section className={"py-6"}>
        <div className={"mx-auto grid max-w-[90%] grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"}>
          {subcommittee.map((item, index) => (
            <ProfileCard
              key={index}
              data={{
                name: item.name,
                role: item.role,
                imageSrc: item.imageUrl,
                descriptionSrc: item.descriptionSrc,
                url: item.url,
              }}
            />
          ))}
        </div>
      </section>
    </>
  );
}