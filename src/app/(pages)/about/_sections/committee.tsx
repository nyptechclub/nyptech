import ProfileCard from "@/app/(pages)/about/_components/profile-card";
import committee from "@/content/data/committee.json";

export default function CommitteeSection() {
  return (
    <>
      <section className={"hero h-[80%]"}>
        <div className={"hero-content"}>
          <div className={"max-w-lg text-center"}>
            <h1 className={"mb-4 text-4xl font-bold"}>Meet the committee</h1>
            <p className={"text-gray-600 dark:text-gray-400"}>
              Our committee is made up of a dedicated group of individuals who are passionate about technology and
              innovation. We are dedicated to providing the best experience for our members and the wider community.
            </p>
          </div>
        </div>
      </section>
      <section className={"py-6"}>
        <div className={"mx-auto grid max-w-[90%] grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"}>
          {committee.map((item, index) => (
            <ProfileCard
              key={index}
              name={item.name}
              role={item.role}
              description={item.description}
              src={item.profileSrc}
              href={item.profileUrl}
            />
          ))}
        </div>
      </section>
    </>
  );
}