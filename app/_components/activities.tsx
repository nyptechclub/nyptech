import activitiesData from "@/app/Json/activities.json";
import TimelineItem from "@/app/_components/list-activity";

const Activities = () => {
  return (
    <section className="w-full container items-center py-8">
      <div className="space-y-3">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          Activities
        </h2>
        <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
          We organize a variety of events and activities to provide our members
          with insights into the latest trends in technology and the world of
          entrepreneurship. These include workshops, guest speaker sessions
          featuring successful entrepreneurs and industry experts, and
          hackathons where members can put their creativity and skills to the
          test by developing innovative solutions to real-world problems.
        </p>
      </div>
      <ul className="timeline timeline-vertical lg:timeline-horizontal">
        {activitiesData.map((activity, index) => (
          <TimelineItem
            key={index}
            month={activity.month}
            event={activity.event}
            isFirstItem={index === 0}
            isLastItem={false}
          />
        ))}
        <li>
          <hr />
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-5 h-5"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="timeline-end timeline-box">?</div>
        </li>
      </ul>
    </section>
  );
};

export default Activities;