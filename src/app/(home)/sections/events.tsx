import { twJoin } from "tailwind-merge";

const activities = [
  {
    month: "April",
    name: "Student Life Carnival",
  },
  {
    month: "May",
    name: "NYP Link",
  },
  {
    month: "June",
    name: "SIT Camp",
  },
  {
    month: "June",
    name: "NTU X TES",
  },
  {
    month: "June",
    name: "NYP Solve",
  },
  {
    month: "???",
    name: "Coming Soon",
  },
];

export default function EventsSection(props: { className?: string }) {
  return (
    <section className={twJoin("hero", props.className)}>
      <div className={"hero-content"}>
        <div className={"text-center"}>
          <h1 className={"mb-4 text-4xl font-bold"}>Our events!</h1>
          <p className={"mx-auto lg:max-w-[60%] text-gray-600"}>
            We have a variety of activites lined up for you! These can provide you with insights into latest trends in
            technology and the world of entrepreneurship!
          </p>
          <ul className={"mt-12 mx-auto w-fit timeline overflow-x-auto"}>
            {activities.map((activity, index) => (
              <li key={index}>
                <hr />
                <div className={"timeline-start"}>{activity.month}</div>
                <div className="timeline-middle">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="timeline-end timeline-box">{activity.name}</div>
                <hr />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}