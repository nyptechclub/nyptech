import ProfileCard from "@/app/(pages)/about/_components/profile-card";
import committee from "@/content/data/committee.json";

export default function CommitteeSection() {
  return (
    <>
      <section className={"hero h-[80%]"}>
        <div className={"hero-content"}>
          <div className={"max-w-lg text-center"}>
            <div className={"mb-4 text-4xl font-bold"}>Meet the committee</div>
            <div>
              Our committee is made up of a dedicated group of individuals who are passionate about technology and
              innovation. We are dedicated to providing the best experience for our members and the wider community.
            </div>
          </div>
        </div>
      </section>
      <section className={"py-6"}>
        <div className={"mx-auto grid max-w-[90%] grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"}>
          {committee.map((item, index) => (
            <ProfileCard
              key={index}
              data={{
                name: item.name,
                role: item.role,
                description: item.description || "",
                imageSrc: item.imageSrc,
                url: item.url,
              }}
            />
          ))}
        </div>
      </section>
    </>
  );
}